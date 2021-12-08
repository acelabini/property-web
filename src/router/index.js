import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import ForSaleSign from '../components/ForSaleSign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    },
    {
      path: '/:slug',
      name: 'Property',
      component: ForSaleSign
    }
  ]
})
