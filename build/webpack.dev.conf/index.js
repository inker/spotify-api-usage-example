const { merge } = require('webpack-merge')

const baseWebpackConfig = require('../webpack.base.conf')
const devServer = require('../devServer')

const resolve = require('../utils/resolve')

const rules = require('./rules')
const plugins = require('./plugins')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',

  module: {
    rules,
  },

  // devtool: 'source-map',
  devtool: 'eval-source-map',

  plugins,

  devServer,

  cache: {
    type: 'filesystem',
    cacheDirectory: resolve('.webpack-build-cache'),
    idleTimeout: 60000,
  },
})
