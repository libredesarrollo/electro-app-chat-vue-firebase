import { createRouter, createWebHistory } from 'vue-router'

import App from '../components/App'
import Login from '../components/Login'


const routes = [
    {
        path: '/',
        name:'App',
        component: App
    },
    {
        path: '/login',
        name:'Login',
        component: Login
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router

