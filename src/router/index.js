import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
