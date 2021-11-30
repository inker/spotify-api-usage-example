const { VueLoaderPlugin } = require('vue-loader')
const { compact } = require('lodash')

module.exports = compact([
  new VueLoaderPlugin(),
])
