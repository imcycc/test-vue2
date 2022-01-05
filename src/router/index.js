import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})
