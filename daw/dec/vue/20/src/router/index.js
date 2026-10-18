import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/homeView.vue'
import ProductsView from '@/views/productsView.vue'
import UsersView from '@/views/usersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
    },
    {
      path: '/products',
      name: 'pdoructs',
      component: ProductsView,
    },
    {
      path: '/about',
      name: 'about',
      // cogido del código de ejemplo 
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/aboutView.vue'),
    },
  ],
})

export default router

