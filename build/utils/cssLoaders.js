const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { compact } = require('lodash')

const modulesOptions = {
  localIdentName: '[name]__[local]___[hash:base64:5]',
}

const getLoaderGenerator = (options) =>
  (loader, loaderOptions) =>
    compact([
      options.extract
        ? {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false,
          },
        }
        : 'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          modules: options.modules && modulesOptions,
          sourceMap: options.sourceMap,
        },
      },
      loader && {
        loader: `${loader}-loader`,
        options: {
          ...loaderOptions,
          sourceMap: options.sourceMap,
        },
      },
    ])

module.exports = (options = {}) => {
  const generateLoaders = getLoaderGenerator(options)
  return {
    css: generateLoaders(),
    postcss: generateLoaders('postcss'),
  }
}
