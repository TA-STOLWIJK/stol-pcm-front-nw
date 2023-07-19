import defaultLayout from '@/layout/defaultLayout.vue'

const routes = [
  {
    path: '/client-index',
    name: 'clientIndex',
    component: () => import('../views/client/clientIndex.vue'),
    meta: {
      layout: defaultLayout,
      requiresAuth: true
    }
  }
]

export default routes
