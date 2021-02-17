import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { SHARED } from '@rivvid/rivvid-shared'
console.log({ SHARED })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
