// eslint-disable-next-line import/no-cycle
import getStore from 'App/store'

import NotFound from 'App/pages/NotFound'
import Login from 'App/pages/Login'
import Dashboard from 'App/pages/Dashboard'

const routes = [
  {
    path: '/',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const store = getStore()
      if (store.state.auth.accessToken) {
        next()
      } else {
        const path = to.fullPath
        next({
          name: 'login',
          query: {
            redirect: path !== '/' && path || undefined,
          },
        })
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const store = getStore()
      if (store.state.auth.accessToken) {
        next('/')
      } else {
        next()
      }
    },
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: (to, from, next) => {
      const store = getStore()
      store.dispatch('auth/signOut')
      next({
        name: 'login',
      })
    },
  },
  {
    path: '*',
    component: NotFound,
    beforeEnter: (to, from, next) => {
      // Normally, you don't need this if the router is configured in 'history' mode.
      // Due to GitHub Pages limitations, it's only possible to use 'hash' mode for now.
      if (to.path.startsFrom('/access_token')) {
        next('/')
      } else {
        next()
      }
    },
  },
]

export default routes
