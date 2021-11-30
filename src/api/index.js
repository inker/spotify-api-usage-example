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
    return this.getJson(`${SPOTIFY_API_HOST}/v1/me`)
  }

  getRecentlyPlayedTracks(options) {
    return this.getJson(`${SPOTIFY_API_HOST}/v1/me/player/recently-played`, options)
  }
}

export default new Api()
