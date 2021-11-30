const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  minimize: true,

  minimizer: [
    new TerserPlugin({
      terserOptions: {
        warnings: false,
      },
    }),

    new CssMinimizerPlugin(),
  ],

  runtimeChunk: 'single',

  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      defaultVendors: {
        test: /node_modules/,
        chunks: 'initial',
        name: 'vendor',
        priority: -10000,
        enforce: true,
      },
      lodash: {
        test: /[/\\]lodash[/\\]/,
        chunks: 'initial',
        name: 'lodash',
        priority: -5000,
        enforce: true,
        reuseExistingChunk: true,
      },
      dateFns: {
        test: /[/\\]date-fns(-tz)?[/\\]/,
        chunks: 'initial',
        name: 'date-fns',
        priority: -5000,
        enforce: true,
        reuseExistingChunk: true,
      },
      vue: {
        test: /[/\\]vue[/\\]/,
        chunks: 'initial',
        name: 'vue',
        enforce: true,
        reuseExistingChunk: true,
      },
      normalize: {
        test: /[/\\]normalize.css[/\\]/,
        chunks: 'initial',
        name: 'normalize',
        enforce: true,
        reuseExistingChunk: true,
      },
    },
  },
}
