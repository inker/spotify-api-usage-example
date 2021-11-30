const config = require('../../config')

const styleLoaders = require('../utils/styleLoaders')

module.exports = styleLoaders({
  sourceMap: config.build.productionSourceMap,
  extract: true,
})
