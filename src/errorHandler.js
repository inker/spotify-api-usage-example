import Vue from 'vue'

import UnauthorizedError from 'App/errors/UnauthorizedError'

class ErrorHandler {
  /**
   * @type {import('vue-router').default}
   */
  #router

  /**
   * @type {import('vuex').Store}
   */
  #store

  setRouter(router) {
    this.#router = router
  }

  setStore(store) {
    this.#store = store
  }

  async handle(err) {
    console.error(err)

    if (err instanceof UnauthorizedError) {
      this.#store.dispatch('auth/signOut')
      await this.#router.push({
        name: 'login',
      })
    }

    Vue.notify({
      group: 'global',
      title: 'Error',
      text: err.message,
    })
  }
}

export default new ErrorHandler()
