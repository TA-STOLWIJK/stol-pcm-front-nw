import { defaultConfig, plugin } from '@formkit/vue'
import { createPinia } from 'pinia'
import PiniaRouter from 'pinia-plugin-router'
import { createApp } from 'vue'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import * as ConfirmDialog from 'vuejs-confirm-dialog'

import config from '../formkit.config'
import App from './App.vue'
import router from './router'
import './style/style.css'

const pinia = createPinia()
pinia.use(PiniaRouter(router))


createApp(App)
  .use(
    plugin,
    defaultConfig(config)
  )
  .use(pinia)
  .use(Vue3Toasity, {
    autoClose: 3000,
    theme: 'auto'
  })
  .use(router)
  .use(ConfirmDialog)

  .mount('#app')
