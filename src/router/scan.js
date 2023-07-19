import defaultLayout from '@/layout/defaultLayout.vue'

const routes = [
  {
    path: '/ascan-index/:id',
    name: 'ascanIndex',
    component: () => import('../views/scans/ascan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/bscan-index/:id',
    name: 'bscanIndex',
    component: () => import('../views/scans/bscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/cscan-index/:id',
    name: 'cscanIndex',
    component: () => import('../views/scans/cscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/dscan-index/:id',
    name: 'dscanIndex',
    component: () => import('../views/scans/dscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/escan-index/:id',
    name: 'escanIndex',
    component: () => import('../views/scans/escan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/hscan-index/:id',
    name: 'hscanIndex',
    component: () => import('../views/scans/hscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/iscan-index/:id',
    name: 'iscanIndex',
    component: () => import('../views/scans/iscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/jscan-index/:id',
    name: 'jscanIndex',
    component: () => import('../views/scans/jscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/kscan-index/:id',
    name: 'kscanIndex',
    component: () => import('../views/scans/kscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/lscan-index/:id',
    name: 'lscanIndex',
    component: () => import('../views/scans/lscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/mscan-index/:id',
    name: 'mscanIndex',
    component: () => import('../views/scans/mscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/oscan-index/:id',
    name: 'oscanIndex',
    component: () => import('../views/scans/oscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/pscan-index/:id',
    name: 'pscanIndex',
    component: () => import('../views/scans/pscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/rscan-index/:id',
    name: 'rscanIndex',
    component: () => import('../views/scans/rscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/tscan-index/:id',
    name: 'tscanIndex',
    component: () => import('../views/scans/tscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/wscan-index/:id',
    name: 'wscanIndex',
    component: () => import('../views/scans/wscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
  {
    path: '/abscan-index/:id',
    name: 'abscanIndex',
    component: () => import('../views/scans/abscan/scanIndex.vue'),
    meta: {
      layout: defaultLayout
    }
  },
]

export default routes
