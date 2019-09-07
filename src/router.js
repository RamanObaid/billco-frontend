import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
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
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/invoices',
          component: () => import(/* webpackChunkName: "demo" */ './views/Invoices.vue')
        },
        {
          path: '/create-invoice',
          component: () => import(/* webpackChunkName: "demo" */ './views/Invoice/Create.vue')
        },
        {
          path: '/invoice-details/quoted',
          component: () => import(/* webpackChunkName: "demo" */ './views/Invoice/Quoted.vue')
        },
        {
          path: '/invoice-details/cancelled',
          component: () => import(/* webpackChunkName: "demo" */ './views/Invoice/Cancelled.vue')
        },
        {
          path: '/bills',
          component: () => import(/* webpackChunkName: "demo" */ './views/Bills.vue')
        },
        {
          path: '/companies',
          component: () => import(/* webpackChunkName: "demo" */ './views/Companies.vue')
        }
      ]
    }
  ]
})
