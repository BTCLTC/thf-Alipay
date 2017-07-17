import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Friend from '@/components/mainhtml/Friend'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Friend',
      name: 'Friend',
      component: Friend
    }
  ]
})
