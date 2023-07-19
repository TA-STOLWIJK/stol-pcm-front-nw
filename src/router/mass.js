import defaultLayout from '@/layout/defaultLayout.vue'

const routes = [
  {
    path: '/mass-index',
    name: 'massIndex',
    component: () => import('../views/mass/massIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/mass-clients/:id',
    name: 'massClientIndex',
    component: () => import('../views/mass/MassClientIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  }
]

export default routes
