import { createRouter, createWebHistory } from 'vue-router'
import CounterPage from '../views/CounterPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/counter'
  },
  {
    path: '/counter',
    name: 'CounterPage',
    component: CounterPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
