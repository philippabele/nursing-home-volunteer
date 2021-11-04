import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { baseUrl } from '../config'
import HomePage from '../views/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  // catch-all 404 route
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
})

export default router
