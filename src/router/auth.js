import authLayout from '@/layout/authLayout.vue'
const routes = [

  {
    path: '/',
    name: 'login',
    component: () => import('../views/auth/LoginPage.vue'),
    meta: {
      layout: authLayout
    }
  },
  {
    path: '/factor',
    name: 'factor',
    component: () => import('../views/auth/FactorPage.vue'),
    meta: {
      layout: authLayout,
      requiresAuth: true
    }
  }
]

export default routes
