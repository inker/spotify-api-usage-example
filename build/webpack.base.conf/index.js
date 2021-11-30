const config = require('../../config')

const resolve = require('../utils/resolve')

const rules = require('./rules')
const plugins = require('./plugins')

module.exports = {
  entry: {
    app: resolve('src/index'),
  },

  output: {
    clean: true,
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.json',
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      App: resolve('src'),
    },
  },

  module: {
    rules,
  },

  plugins,

  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },

  experiments: {
    backCompat: false,
  },
}
