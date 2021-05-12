import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Policy from '@/views/Policy.vue';
import Map from '@/views/Map.vue';
import Conditions from '@/views/Conditions.vue';
import Catalog from '@/views/Catalog.vue';
import CatalogItem from '@/views/CatalogItem.vue';
import three from '@/views/3d.vue';
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
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map