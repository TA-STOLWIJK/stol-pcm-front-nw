import { createRouter, createWebHistory } from 'vue-router'
import { authenticated } from '@/utils/middleware'

import authRoutes from '@/router/auth'
import adminRoutes from '@/router/admin'
import quickRoutes from '@/router/quick'
import clientRoutes from '@/router/client'
import landingRoutes from '@/router/landing'
import massRoutes from '@/router/mass'
import scanRoutes from '@/router/scan'
import satisRoutes from '@/router/satis'
let allRoutes = []
allRoutes = allRoutes.concat(
  authRoutes,
  adminRoutes,
  quickRoutes,
  clientRoutes,
  landingRoutes,
  massRoutes,
  scanRoutes,
  satisRoutes,
)
const routes = allRoutes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link'
})
router.beforeEach(authenticated)
export default router
