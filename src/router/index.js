import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Ideas from '../views/Ideas.vue'
import Learning from "@/views/Learning";
import NotFound from "@/views/NotFound";
import Preferences from "@/views/Preferences";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/knowledge',
        name: 'Knowledge',
        component: Learning
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/ideas',
        name: 'Ideas',
        component: Ideas
    },
    {
        path: '/preferences',
        name: 'Preferences',
        component: Preferences
    },
    {
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
