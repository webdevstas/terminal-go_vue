import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Policy from '@/views/Policy'
import Map from '@/views/Map'
import Conditions from '@/views/Conditions'
import Catalog from '@/views/Catalog'
import CatalogItem from '@/views/CatalogItem'

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
  },
  {
    path: '/usloviya',
    component: Conditions
  },
  {
    path: '/katalog',
    component: Catalog
  },
  {
    path: '/katalog/:slug',
    component: CatalogItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
