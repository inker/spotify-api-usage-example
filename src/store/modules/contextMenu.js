import { getMutations } from '../utils'

const initialState = Object.freeze({
  position: null,
  items: [],
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

  actions: {
    show({ commit }, { items, mouseEvent }) {
      commit('setItems', items)
      commit('setPosition', [
        mouseEvent.clientX,
        mouseEvent.clientY,
      ])
    },

    reset({ commit }) {
      commit('resetState')
    },
  },
}
