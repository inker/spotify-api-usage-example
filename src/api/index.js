import RequestError from 'App/errors/RequestError'
import UnauthorizedError from 'App/errors/UnauthorizedError'

import queryObjectToString from 'App/utils/queryObjectToString'

class Api {
  #accessToken

  setAccessToken(value) {
    this.#accessToken = value
  }

  async requestJson(baseUrl, queryObject) {
    const url = queryObject
      ? `${baseUrl}?${queryObjectToString(queryObject)}`
      : baseUrl

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.#accessToken}`,
      },
    })

    const json = await response.json()
    if (response.ok) {
      return json
    }

    if (response.status === 401) {
      throw new UnauthorizedError(json.error.message)
    }

    throw new RequestError(json.error.message)
  }

  getCurrentUser() {
    return this.requestJson('https://api.spotify.com/v1/me')
  }

  getRecentlyPlayedTracks(options) {
    return this.requestJson('https://api.spotify.com/v1/me/player/recently-played', options)
  }
}

export default new Api()
