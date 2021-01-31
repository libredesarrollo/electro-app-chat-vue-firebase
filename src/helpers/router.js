import { createRouter, createWebHistory } from 'vue-router'

import App from '../components/App'
import Login from '../components/Login'
import Groups from '../components/Groups'
import Chat from '../components/Chat'


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
    },
    {
        path: '/groups',
        name:'Groups',
        component: Groups
    },
    {
        path: '/chat/:room',
        name:'Chat',
        component: Chat
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router

