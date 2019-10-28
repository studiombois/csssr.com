const webpack = require('webpack')
const withSourceMaps = require('@zeit/next-source-maps')()
const CompressionPlugin = require('compression-webpack-plugin')

const { ANALYZE } = process.env

module.exports = withSourceMaps({
  poweredByHeader: false,
  env: {
    CSSSR_SPACE_ORIGIN: process.env.CSSSR_SPACE_ORIGIN,
    IS_PRODUCTION: process.env.IS_PRODUCTION,
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

    const withAssets = () => {
      config.module.rules.push({
        test: /\.(jpe?g|png|gif|webp|svg|ico|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: dev ? '[path][name].[ext]' : '[path][name]-[hash:8].[ext]',
            },
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
    withAssets()
    withCompression()

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      }))
    }

    return config
  },
})
