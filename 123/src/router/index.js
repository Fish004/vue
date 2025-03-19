
import { createRouter, createWebHashHistory } from 'vue-router'
import User_ST from '@/views/User_ST.vue'
import ZERO from '@/views/ZERO.vue'

const routes = [
    {
        path: '/user_st',
        name: 'User_ST',
        component: User_ST
    },
    {
        path: '/ZERO',
        name: 'ZERO',
        component: ZERO
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router