const prod = require('./prod.env')
const dev = require('./dev.env')

module.exports = {
  build: {
    env: prod,
    productionSourceMap: process.env.npm_config_sm,
    bundleAnalyzerReport: process.env.npm_config_report,
  },

  dev: {
    env: dev,
    port: 9583,
    cssSourceMap: false,
  },
}
