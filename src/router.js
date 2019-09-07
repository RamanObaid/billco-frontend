import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/invoices',
          name: 'invoices',
          component: () => import(/* webpackChunkName: "demo" */ './views/Invoices.vue')
        },
        {
          path: '/create-invoice',
          name: 'create invoice',
          component: () => import(/* webpackChunkName: "demo" */ './views/Invoice/Create.vue')
        },
        {
          path: '/bills',
          name: 'bills',
          component: () => import(/* webpackChunkName: "demo" */ './views/Bills.vue')
        },
        {
          path: '/companies',
          name: 'companies',
          component: () => import(/* webpackChunkName: "demo" */ './views/Companies.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
