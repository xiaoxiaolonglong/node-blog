import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/user/login'
import index from '@/views/user/index'
import detail from '@/views/user/detail'
import newBlog from '@/views/user/new-blog'
import generate from '@/views/user/generate'

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
    },
    {
      path: '/new-blog',
      name: 'newBlog',
      component: newBlog
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/generate',
      name: 'generate',
      component: generate
    },
  ]
})
