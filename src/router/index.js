import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Blog from '../views/Blog.vue'
import Learning from "@/views/Learning";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/learning',
        name: 'Learning',
        component: Learning
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
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
