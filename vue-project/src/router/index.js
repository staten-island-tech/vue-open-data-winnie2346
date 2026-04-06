import { createRouter, createWebHistory } from 'vue-router'
import Rat from '@/views/rat.vue'
import Bar from '@/views/bar.vue'
import Donut from '@/views/donut.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Rat',
      component: Rat,
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar,
    },
  
  { path: '/donut', 
    name: "donut",
    component: Donut },
  ],
})

export default router
