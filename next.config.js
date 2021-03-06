const webpack = require('webpack')
const withSourceMaps = require('@zeit/next-source-maps')()
const CompressionPlugin = require('compression-webpack-plugin')
const { ANALYZE } = process.env
const { defaultTheme } = require('@csssr/core-design')

module.exports = withSourceMaps({
  poweredByHeader: false,
  env: {
    CSSSR_SPACE_ORIGIN: process.env.CSSSR_SPACE_ORIGIN,
    IS_PRODUCTION: process.env.IS_PRODUCTION,
    BENCHMARK_EMAIL_TOKEN: process.env.BENCHMARK_EMAIL_TOKEN,
  },
  webpack: (config, { dev, isServer, buildId }) => {
    // Фиксит npm пакеты, которые зависят от `fs` модуля
    config.node = {
      fs: 'empty',
    }

    const withSentry = () => {
      if (!dev) {
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
          }),
        )
      }

      if (!isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser'
      }
    }

    const fileLoaderConfig = {
      loader: 'file-loader',
      options: {
        publicPath: '/_next',
        name: dev ? '[path][name].[ext]' : '[path][name]-[hash:8].[ext]',
        esModule: false,
      },
    }

    const withFonts = () => {
      config.module.rules.push({
        test: /\.(woff2?)$/,
        use: [fileLoaderConfig],
      })
    }

    const withVideo = () => {
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: [fileLoaderConfig],
      })
    }

    const withResponsiveImages = () => {
      let comHost, imgproxyHost
      if (dev) {
        const ip = require('ip')
        comHost = `http://${ip.address()}:3000`
        imgproxyHost = 'http://localhost:8080'
      } else {
        comHost = process.env.COM_HOST || 'https://csssr.com'
        imgproxyHost = 'https://images.csssr.com'
      }

      config.module.rules.push({
        test: /\.(jpe?g|png|webp|gif|ico)$/,
        oneOf: [
          // {
          //   resourceQuery: /responsive_and_webp/,
          //   use: [responsiveLoaderConfig, webpLoaderConfig],
          // },
          // {
          //   resourceQuery: /responsive/,
          //   use: [responsiveLoaderConfig],
          // },
          {
            resourceQuery: /csssr-images/,
            use: [
              {
                loader: '@csssr/csssr.images',
                options: {
                  breakpoints: defaultTheme.breakpointsOrdered,
                  imgproxy: {
                    disable: dev,
                    imagesHost: comHost,
                    host: imgproxyHost,
                  },
                  originalPixelRatio: '3x',
                },
              },
              {
                loader: 'file-loader',
                options: {
                  publicPath: '/_next/static/',
                  outputPath: `${isServer ? '../' : ''}static/`,
                  name: '[path][name]-[hash:8].[ext]',
                  esModule: false,
                },
              },
            ],
          },
          {
            use: [fileLoaderConfig],
          },
        ],
      })
    }

    const svgrLoaderConfig = {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [
            { inlineStyles: false },
            { prefixIds: false },
            { removeViewBox: false },
            {
              cleanupNumericValues: {
                floatPrecision: 3,
              },
            },
          ],
        },
      },
    }

    const svgrLoaderConfigWithoutSvgo = {
      ...svgrLoaderConfig,
      options: {
        ...svgrLoaderConfig.options,
        svgo: false,
      },
    }

    const withSvg = () => {
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /original/,
            use: [svgrLoaderConfigWithoutSvgo, fileLoaderConfig],
          },
          {
            use: [svgrLoaderConfig, fileLoaderConfig],
          },
        ],
      })
    }

    const withCompression = () => {
      if (!dev) {
        config.plugins.push(
          new CompressionPlugin({
            test: /\.js$|\.css$|\.html$|\.svg$/,
            threshold: 10240,
          }),
          new CompressionPlugin({
            test: /\.js$|\.css$|\.html$|\.svg$/,
            algorithm: 'brotliCompress',
            filename: '[path].br[query]',
            compressionOptions: { level: 11 },
            threshold: 10240,
          }),
        )
      }
    }

    withSentry()
    withFonts()
    withVideo()
    withSvg()
    withResponsiveImages()
    withCompression()

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      )
    }

    return config
  },
})
