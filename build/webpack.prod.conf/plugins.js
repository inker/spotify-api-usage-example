const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { compact } = require('lodash')

const config = require('../../config')

// http://vuejs.github.io/vue-loader/en/workflow/production.html

module.exports = compact([
  new webpack.DefinePlugin({
    'process.env': config.build.env,
  }),

  // extract css into its own file
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
  }),

  new HtmlWebpackPlugin({
    filename: config.build.index,
    template: 'index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    },
  }),

  config.build.showBuildProgress && new webpack.ProgressPlugin(),

  config.build.bundleAnalyzerReport && new BundleAnalyzerPlugin(),
])
