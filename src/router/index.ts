import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/pages/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
