import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/week1',
      name: 'week1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeekOne.vue')
    },
    {
      path: '/week2',
      name: 'week2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeekTwo.vue')
    },
    {
      path: '/week3',
      name: 'week3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeekThree.vue')
    }
  ]
})

export default router
