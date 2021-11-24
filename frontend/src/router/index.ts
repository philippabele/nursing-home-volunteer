import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { baseUrl } from '../config'
import HomePage from '../views/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/landing-page',
    component: () => import('../views/LandingPage.vue'),
  },
  {
    path: '/blog',
    component: () => import('../views/NestedRoute.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/BlogOverview.vue'),
      },
      {
        path: ':id',
        component: () => import('../views/BlogPost.vue'),
      },
    ],
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
