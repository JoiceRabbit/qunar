import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'styles/base/reset.css'
import 'styles/base/border.css'
import 'styles/base/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
