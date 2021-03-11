import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Policy from '@/views/Policy'
import Map from '@/views/Map'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/politika-konfidencialnosti',
    component: Policy
  },
  {
    path: '/karta',
    component: Map
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
