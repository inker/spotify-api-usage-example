const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('@soda/friendly-errors-webpack-plugin')
const { compact } = require('lodash')

const config = require('../../config')

// https://github.com/glenjamin/webpack-hot-middleware#installation--usage

module.exports = compact([
  new webpack.DefinePlugin({
    'process.env': config.dev.env,
  }),

  new ESLintPlugin({
    extensions: ['js', 'vue'],
    exclude: [
      'node_modules',
      'config',
      'build',
      'dist',
    ],
    emitWarning: true,
    failOnError: false,
  }),

  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true,
  }),

  new FriendlyErrorsPlugin(),
])
