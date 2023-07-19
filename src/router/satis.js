import defaultLayout from '@/layout/defaultLayout.vue'

const routes = [
  {
    path: '/ktv-index',
    name: 'ktvIndex',
    component: () => import('../views/satis/ClientSatisIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
]

export default routes
