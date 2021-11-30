import Vue from 'vue'
import VueRouter from 'vue-router'

// eslint-disable-next-line import/no-cycle
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  routes,
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash,
      }
    }
    if (to.name !== from.name) {
      return {
        x: 0,
        y: 0,
      }
    }
  },
})
