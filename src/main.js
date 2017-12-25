import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'

import 'styles/base/reset.css'
import 'styles/base/border.css'

Vue.config.productionTip = false
Fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
