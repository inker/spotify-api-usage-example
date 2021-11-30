import { getMutations } from '../utils'

const initialState = Object.freeze({
  x: undefined,
})

export default {
  namespaced: true,

  state: {
    ...initialState,
  },

  mutations: {
    ...getMutations(Object.keys(initialState)),

    resetState(state) {
      Object.assign(state, initialState)
    },
  },
}
