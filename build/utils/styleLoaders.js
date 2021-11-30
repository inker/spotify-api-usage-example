const cssLoaders = require('./cssLoaders')

module.exports = (options) =>
  Object.entries(cssLoaders(options))
    .map(([extension, loader]) => ({
      test: new RegExp(`\\.${extension}$`),
      use: loader,
    }))
