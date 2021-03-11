import Vue from 'vue'
import Router from 'vue-router'
import Temperature from './views/Temperature.vue'
import Humidity from './views/Humidity.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/temperature',
      name: 'Temperature',
      component: Temperature
    },
    {
      path: '/humidity',
      name: 'Humidity',
      component: Humidity
    }
  ]
})
