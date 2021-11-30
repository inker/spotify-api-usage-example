const { merge } = require('webpack-merge')

const config = require('../../config')

const resolve = require('../utils/resolve')

const baseWebpackConfig = require('../webpack.base.conf')

const optimization = require('./optimization')
const rules = require('./rules')
const plugins = require('./plugins')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  module: {
    rules,
  },

  devtool: config.build.productionSourceMap ? 'source-map' : false,

  output: {
    path: resolve('dist'),
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: 'resource/[name].[contenthash].[ext][query]',
  },

  optimization,

  plugins,
})

module.exports = webpackConfig
