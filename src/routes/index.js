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
        // params are ignored if a path is provided
        params: {
          logout: true,
        },
      })
    },
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
