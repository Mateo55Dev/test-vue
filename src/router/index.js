import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/a',
      name: 'a',
      component: () => import('../views/AView.vue')
    },
    {
      path: '/b',
      name: 'b',
      component: () => import('../views/BView.vue')
    },
    {
      path: '/c',
      name: 'c',
      component: () => import('../views/CView.vue')
    },
    {
      path: '/d',
      name: 'd',
      component: () => import('../views/DView.vue')
    },
    {
      path: '/e',
      name: 'e',
      component: () => import('../views/EView.vue')
    }
  ]
})

export default router
