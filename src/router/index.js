import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/user/index'
import detail from '@/views/user/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
