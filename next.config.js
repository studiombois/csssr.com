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

    // TODO добавить такое же для картинок и svg
    config.module.rules.push({
      test: /\.woff2?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/fonts/',
            outputPath: 'static/fonts/',
            name: '[name]-[hash].[ext]',
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
}
