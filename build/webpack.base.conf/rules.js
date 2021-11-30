const svgToMiniDataURI = require('mini-svg-data-uri')
const { compact } = require('lodash')

const config = require('../../config')

const cssLoaders = require('../utils/cssLoaders')
const assetModule = require('../utils/assetModule')

const resolve = require('../utils/resolve')

const isProd = process.env.NODE_ENV === 'production'

module.exports = compact([
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: cssLoaders({
        sourceMap: isProd
          ? config.build.productionSourceMap
          : config.dev.cssSourceMap,
        extract: isProd,
        modules: true,
      }),
      transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href',
      },
    },
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      resolve('src'),
      resolve('test'),
    ],
  },
  {
    test: /\.(png|jpe?g|gif)(\?.*)?$/,
    ...assetModule('img'),
  },
  {
    test: /\.svg$/,
    ...assetModule('img', {
      generator: {
        dataUrl: (content) => svgToMiniDataURI(content.toString()),
      },
    }),
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    ...assetModule('media'),
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    ...assetModule('fonts'),
  },
])
