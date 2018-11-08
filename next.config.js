const { ANALYZE } = process.env

module.exports = {
  publicRuntimeConfig: {
    HR_ORIGIN: process.env.HR_ORIGIN,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

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
}
