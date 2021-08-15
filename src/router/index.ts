import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Home.vue'),
    },
    {
        path: '/blocks',
        name: 'blocks',
        component: () => import('../components/Blocks.vue'),
    },
    {
        path: '/store',
        name: 'store',
        component: () => import('../components/Store.vue'),
    },
    {
        path: '/blueprint',
        name: 'blueprint',
        component: () => import('../components/Blueprint.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
