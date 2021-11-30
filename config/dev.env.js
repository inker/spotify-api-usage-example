const { merge } = require('webpack-merge')

const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SPOTIFY_AUTH_HOST: 'https://accounts.spotify.com/authorize',
  SPOTIFY_CLIENT_ID: '"e900798eba474a8c8ac4c4373b175d7c"',
  SPOTIFY_REDIRECT_URI: '"http://localhost:9583"',
})
