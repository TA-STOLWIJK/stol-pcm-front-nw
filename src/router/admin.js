import adminLayout from '@/layout/adminLayout.vue'
import defaultLayout from '@/layout/defaultLayout.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/admin-index',
    name: 'adminIndex',
    component: () => import('../views/admin/adminIndex.vue'),
    meta: {
      layout: adminLayout
    }
  },
  {
    path: '/team-index',
    name: 'teamIndex',
    component: () => import('../views/team/TeamIndex.vue'),
    meta: {
      layout: adminLayout
    }
  },
  {
    path: '/user-index',
    name: 'userIndex',
    component: () => import('../views/user/userIndex.vue'),
    meta: {
      layout: adminLayout
    }
  },
  {
    path: '/link-index',
    name: 'LinkIndex',
    component: () => import('../views/admin/LinkIndex.vue'),
    meta: {
      layout: adminLayout
    }
  },
  {
    path: '/ktv-reports',
    name: 'KTVReports',
    component: () => import('../views/satis/SatisReports.vue'),
    meta: {
      layout: adminLayout
    }
  },
  {
    path: '/uploads',
    name: 'Uploads',
    component: () => import('../views/admin/UploadIndex.vue'),
    meta: {
      layout: adminLayout
    }
  }
]

export default routes
