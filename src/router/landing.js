import defaultLayout from '@/layout/defaultLayout.vue'

const routes = [
  {
    path: '/landing-index',
    name: 'landingIndex',
    component: () => import('../views/landing/landingIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  }
]

export default routes
