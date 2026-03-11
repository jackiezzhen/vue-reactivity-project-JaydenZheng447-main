import { createRouter, createWebHistory } from 'vue-router'
import CookieClicker from '@/views/CookieClicker.vue'
import UserCreate from '@/views/UserCreate.vue'
import AnimalViewer from '@/views/AnimalViewer.vue'
import TestView from '@/views/TestView.vue'
import VoteView from '@/views/Vote.vue'
import VoteViewer from '@/views/VoteView.vue'
import ParliamentView from '@/views/Parliament.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/user-create',
      name: 'user-create',
      component: UserCreate,
    },
    {
      path: '/animal-view',
      name: 'animal-view',
      component: AnimalViewer,
    },
    {
      path: '/test-view',
      name: 'test-view',
      component: TestView,
    },
    {
      path: '/',
      name: 'home',
      component: VoteView,
    },
    {
      path: '/voter',
      name: 'voter',
      component: VoteViewer,
    },
    {
      path: '/parliament',
      name: 'parliament',
      component: ParliamentView,
    },
  ],
})

export default router
