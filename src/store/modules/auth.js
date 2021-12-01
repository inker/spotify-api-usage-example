// eslint-disable-next-line import/no-cycle
import router from 'App/router'
import api from 'App/api'
import errorHandler from 'App/errorHandler'

import UnauthorizedError from 'App/errors/UnauthorizedError'

import randomId from 'App/utils/randomId'
import queryObjectToString from 'App/utils/queryObjectToString'

import { getMutations } from '../utils'

const {
  SPOTIFY_AUTH_HOST,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
} = process.env

const initialState = Object.freeze({
  stateKey: undefined,
  accessToken: undefined, // unsafe, can be accessed by any external script
  userData: null,
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
        client_id: SPOTIFY_CLIENT_ID,
        scope,
        redirect_uri: SPOTIFY_REDIRECT_URI,
        state: currentState,
      })

      window.location = `${SPOTIFY_AUTH_HOST}?${qs}`
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
        const receivedAccessToken = hashParams.get('access_token')
        if (receivedAccessToken) {
          const receivedStateKey = hashParams.get('state')
          if (receivedAccessToken && (!receivedStateKey || receivedStateKey !== state.stateKey)) {
            throw new UnauthorizedError('Error during authentication')
          }

          commit('setStateKey', undefined)
          if (!receivedAccessToken) {
            return
          }

          commit('setAccessToken', receivedAccessToken)
          api.setAccessToken(receivedAccessToken)
          await dispatch('refreshUserData')
          await router.push('/')
        } else {
          const { accessToken } = state
          api.setAccessToken(accessToken)
          await dispatch('refreshUserData')
        }
      } catch (err) {
        errorHandler.handle(err)
      }
    },
  },
}
