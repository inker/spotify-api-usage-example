import { Store } from 'vuex'
import { once } from 'lodash'

import appearance from './modules/appearance'
import sidebar from './modules/sidebar'
// eslint-disable-next-line import/no-cycle
import auth from './modules/auth'
import contextMenu from './modules/contextMenu'

import watchAuth from './watchers/auth'

import persistModule from './utils/persistModule'

const createStore = () => {
  const store = new Store({
    modules: {
      appearance,
      sidebar,
      auth,
      contextMenu,
    },

    plugins: [
      persistModule('auth', [
        'stateKey',
        'accessToken',
      ]),
      persistModule('appearance', [
        'colorTheme',
      ]),
      persistModule('sidebar'),
      persistModule('dateTime'),
    ],
  })

  watchAuth(store)

  return store
}

export default once(createStore)
