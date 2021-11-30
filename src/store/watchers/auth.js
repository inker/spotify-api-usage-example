import Vue from 'vue'

/**
 * @param {import('vuex').Store} store
 */
export default (store) => {
  store.watch(state => state.auth.accessToken, (val) => {
    if (!val) {
      Vue.notify({
        clean: true,
      })
    }
  })
}
