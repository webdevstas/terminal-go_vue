import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Policy from '@/views/Policy'
import Map from '@/views/Map'
import Conditions from '@/views/Conditions'
import Catalog from '@/views/Catalog'
import CatalogItem from '@/views/CatalogItem'
import three from '@/views/3d'

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
  },
  {
    path: '/3d',
    component: three
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
