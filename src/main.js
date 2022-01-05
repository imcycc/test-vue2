import Vue from 'vue'
import App from './App.vue'

import Zui from '@zto/zui'
import '@zto/zui/lib/theme-chalk/index.css'

import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Zui)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
