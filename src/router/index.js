import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/Front/Homepage.vue')
      },
      {
        path: 'ProductsList/:id',
        component: () => import('../views/Front/ProductsList.vue')
      },
      {
        path: 'ProductPage/:id',
        component: () => import('../views/Front/ProductPage.vue')
      },
      {
        path: 'OrderCheckout',
        component: () => import('../views/Front/OrderCheckout.vue')
      },
      {
        path: 'OrderCheckIn/:id',
        component: () => import('../views/Front/OrderCheckIn.vue')
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () =>
      import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () =>
      import('../views/Backstage/Manager.vue'),
    children: [
      {
        path: '',
        component: () =>
          import('../views/Backstage/BackProductList.vue')
      },
      {
        path: 'BackOrderList',
        component: () =>
          import('../views/Backstage/BackOrderList.vue')
      },
      {
        path: 'BackCoupons',
        component: () =>
          import('../views/Backstage/BackCoupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
