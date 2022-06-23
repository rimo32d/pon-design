import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsPage.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/ServicePage.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('../views/WorksPage.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/CompanyPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
