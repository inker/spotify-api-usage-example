import RequestError from 'App/errors/RequestError'
import UnauthorizedError from 'App/errors/UnauthorizedError'

import queryObjectToString from 'App/utils/queryObjectToString'

const {
  SPOTIFY_API_HOST,
} = process.env

class Api {
  #accessToken

  setAccessToken(value) {
    this.#accessToken = value
  }

  async getJson(baseUrl, queryObject) {
    const url = queryObject
      ? `${baseUrl}?${queryObjectToString(queryObject)}`
      : baseUrl

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.#accessToken}`,
      },
    })

    const contentType = response.headers.get('Content-Type')

    let json
    if (/application\/json/.test(contentType)) {
      json = await response.json()
      if (response.ok) {
        return json
      }
    }

    const errMsg = json?.error.message || await response.text()

    if (response.status === 401) {
      throw new UnauthorizedError(errMsg)
    }

    throw new RequestError(errMsg)
  }

  getCurrentUser() {
    return this.getJson(`${SPOTIFY_API_HOST}/v1/me`)
  }

  getRecentlyPlayedTracks(options) {
    return this.getJson(`${SPOTIFY_API_HOST}/v1/me/player/recently-played`, options)
  }
}

export default new Api()
