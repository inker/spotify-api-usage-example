// eslint-disable-next-line import/no-cycle
import router from 'App/router'
import api from 'App/api'
import errorHandler from 'App/errorHandler'

import UnauthorizedError from 'App/errors/UnauthorizedError'

import randomId from 'App/utils/randomId'
import queryObjectToString from 'App/utils/queryObjectToString'

import { getMutations } from '../utils'

const initialState = Object.freeze({
  stateKey: undefined,
  accessToken: undefined, // unsafe, can be accessed by any external script
  userData: undefined, // undefined - unknown, null - error
})

export default {
  namespaced: true,

  state: {
    ...initialState,
  },

  mutations: getMutations(Object.keys(initialState)),

  actions: {
    async refreshUserData({ commit }) {
      const userData = await api.getCurrentUser()
      commit('setUserData', userData)
    },

    signOut({ commit }) {
      commit('setAccessToken', undefined)
      commit('setUserData', null)
    },

    signIn({ commit }) {
      const currentState = randomId()
      commit('setStateKey', currentState)

      const scope = 'user-read-recently-played'

      const qs = queryObjectToString({
        response_type: 'token',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        state: currentState,
      })

      window.location = `https://accounts.spotify.com/authorize?${qs}`
    },

    async restoreSession({ commit, dispatch, state }) {
      try {
        const {
          search,
          hash,
        } = window.location

        if (search) {
          const params = new URLSearchParams(search)
          const errorCode = params.get('error')
          if (errorCode) {
            const msg = errorCode === 'access_denied' ? 'Access denied' : errorCode
            throw new Error(msg)
          }
        }

        const hashParams = new URLSearchParams(hash.slice(2))
        let accessToken = hashParams.get('access_token')
        if (accessToken) {
          const receivedStateKey = hashParams.get('state')
          if (accessToken && (receivedStateKey == null || receivedStateKey !== state.stateKey)) {
            throw new UnauthorizedError('Error during authentication')
          }

          commit('setStateKey', undefined)
          if (!accessToken) {
            return
          }

          commit('setAccessToken', accessToken)
        } else {
          accessToken = state.accessToken
        }
        api.setAccessToken(accessToken)
        await dispatch('refreshUserData')
        await router.push('/')
      } catch (err) {
        errorHandler.handle(err)
      }
    },
  },
}
