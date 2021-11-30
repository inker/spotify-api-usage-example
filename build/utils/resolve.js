const path = require('path')

const rootDir = process.cwd()

/**
 * @param {string} dir
 */
module.exports = (dir) =>
  path.join(rootDir, dir)
