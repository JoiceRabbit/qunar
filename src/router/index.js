import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import City from 'pages/city/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/city',
    name: 'city',
    component: City
  }]
})
