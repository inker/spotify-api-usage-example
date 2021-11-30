// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

const prod = require('./prod.env')
const dev = require('./dev.env')

module.exports = {
  build: {
    env: prod,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    productionSourceMap: process.env.npm_config_sm,
    showBuildProgress: !process.env.npm_config_hide_progress,
    bundleAnalyzerReport: process.env.npm_config_report,
  },

  dev: {
    env: dev,
    port: 9583,
    cssSourceMap: false,
  },
}
