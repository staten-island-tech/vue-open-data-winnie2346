import { createRouter, createWebHistory } from 'vue-router'
import rat from '@/views/rat.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chi',
      name: 'rat',
      component: rat,
    },
  ],
})

export default router
