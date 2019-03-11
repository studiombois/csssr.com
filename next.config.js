const webpack = require('webpack')
const withSourceMaps = require('@zeit/next-source-maps')()

const { ANALYZE } = process.env

module.exports = withSourceMaps({
  poweredByHeader: false,
  env: {
    CSSSR_SPACE_ORIGIN: process.env.CSSSR_SPACE_ORIGIN,
    IS_PRODUCTION: process.env.IS_PRODUCTION,
  },
  webpack: (config, { dev, isServer, buildId }) => {
    if (!dev) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
        })
      )
    }

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    config.module.rules.push({
      test: /\.(jpe?g|png|gif|webp|svg|ico|woff2?)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: '[path][name]-[hash:8].[ext]',
          },
        },
      ],
    })

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
