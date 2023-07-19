import defaultLayout from '@/layout/defaultLayout.vue'

const routes = [
  {
    path: '/quick-index',
    name: 'quickIndex',
    component: () => import('../views/quick/quickIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/pcm-index/:id',
    name: 'pcmIndex',
    component: () => import('../views/pcm/PcmIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  }
]

export default routes
