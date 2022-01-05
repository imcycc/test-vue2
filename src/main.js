import Vue from 'vue'
import App from './App.vue'

import Zui from '@zto/zui'
import '@zto/zui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Zui)

new Vue({
  render: h => h(App),
}).$mount('#app')
