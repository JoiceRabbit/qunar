import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from 'store/'
import VueLazyload from 'vue-lazyload'
import 'styles/base/reset.css'
import 'styles/base/border.css'
import 'styles/base/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
  loading: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
