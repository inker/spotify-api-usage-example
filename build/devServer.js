const config = require('../config')

const resolve = require('./utils/resolve')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const ENV = process.env.NODE_ENV

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port

const distDir = resolve('dist')

const isProd = ENV === 'production'

module.exports = {
  port,
  proxy: config.dev.proxyTable,
  compress: isProd,
  hot: !isProd,
  historyApiFallback: true,
  open: true,
  static: {
    directory: distDir,
  },
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
  },
  devMiddleware: {
    stats: 'none',
  },
}
