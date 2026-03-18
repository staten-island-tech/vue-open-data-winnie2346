import { createRouter, createWebHistory } from 'vue-router'
import Rat from '@/views/rat.vue'
import raTATA from '@/views/raTSDATA.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Rat',
      component: Rat,
    },
    {
      path: '/guh',
      name: 'guhh',
      component: raTATA,
    },
  ],
})

export default router
