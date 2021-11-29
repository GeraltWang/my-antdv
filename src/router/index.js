import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index')
      },
      {
        path: '/upload',
        name: 'upload',
        component: () => import(/* webpackChunkName: "upload" */ '@/views/upload/index')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error-page',
    component: () => import(/* webpackChunkName: "error-page" */ '@/views/error/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
