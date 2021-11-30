import 'unfocus'
import 'normalize.css'

import Vue from 'vue'
import Notifications from 'vue-notification'
import { Plugin as FragmentPlugin } from 'vue-fragment'
import Vuex from 'vuex'

import './styles'

import getStore from 'App/store'
import errorHandler from 'App/errorHandler'

import router from './router'
import Root from './Root'

/* make app version available at `window.__VERSION__` */
const versionPromise = import(/* webpackPreload: true, webpackChunkName: "version" */ './version')

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(FragmentPlugin)
Vue.use(Notifications)

errorHandler.setRouter(router)
const store = getStore()
errorHandler.setStore(store)

async function start() {
  await versionPromise
  await store.dispatch('auth/restoreSession')

  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    components: {
      Root,
    },
    store,
    router,
    template: '<Root/>',
  })
}

start()
