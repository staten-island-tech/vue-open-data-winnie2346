import { createRouter, createWebHistory } from 'vue-router'
import Rat from '@/views/rat.vue'
import raTATA from '@/views/raTSDATA.vue'
import bar from '@/views/bar.vue'
import donut from '@/views/donut.vue'

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
      component: bar,
    },
  
  { path: '/donut', 
    name: "donut",
    component: donut },
  ],
})

export default router
