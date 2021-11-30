import { getMutations } from '../utils'

const initialState = Object.freeze({
  /**
   * user-selected colour theme stored in localstorage
   * @type {'light' | 'dark' | 'auto'}
   */
  colorTheme: 'light',

  /**
   * colour theme in user's system settings
   * determined by the CSS media query
   * @type {null | 'light' | 'dark'}
   */
  systemTheme: null,
})

export default {
  namespaced: true,

  state: {
    ...initialState,
  },

  getters: {
    /**
     * @param {typeof initialState} state
     */
    isDarkMode(state) {
      const { colorTheme } = state
      return colorTheme === 'dark'
        || colorTheme === 'auto' && state.systemTheme === 'dark'
    },
  },

  mutations: getMutations(Object.keys(initialState)),
}
