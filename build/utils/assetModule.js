const { merge } = require('lodash')

module.exports = (dir, extraOptions) => {
  const filename = `${dir}/[name].[contenthash][ext]`

  return {
    oneOf: [
      {
        resourceQuery: /resource/,
        type: 'asset/resource',
        generator: {
          filename,
        },
      },
      merge({
        type: 'asset',
        generator: {
          filename,
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
      }, extraOptions),
    ],
  }
}
