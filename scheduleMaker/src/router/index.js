import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/Schedule.vue'),
    },
    {
      path: '/schedule-creation',
      name: 'schedule-creation',
      component: () => import('../views/ScheduleCreation.vue'),
    },
    {
      path: '/created-schedule',
      name: 'created-schedule',
      component: () => import('../views/CreatedSchedule.vue'),
    },
  ],
})

export default router
