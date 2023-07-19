<script setup>
import ThemeButton from '@/layout/themeButton.vue'
import RouterLinkDefault from '@/components/mainStyle/RouterLinkDefault.vue'
import { useAuth } from '@/stores/AuthStore'
const authStore = useAuth()
import PowerIcon from '@/assets/svg/power.svg'

const logout = () => {
  authStore.logout()
}
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
      <a href="/" class="flex items-center">
        <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white"
          >TrustedAccountant
        </span>
        <span class="text-red-500 text-sm ml-5 whitespace-nowrap">Personal Content Marketing</span>
      </a>
      <div class="flex items-center">
        <span class="mr-6 text-sm font-medium text-gray-500 dark:text-white">{{
          authStore.user.first_name_user
        }} {{
            authStore.user.last_name_user
          }}</span>

        <theme-button />
        <PowerIcon @click='logout' class="fill-blue-500 h-8 cursor-pointer hover:scale-150 hover:fill-red-500"/>
      </div>
    </div>
  </nav>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
      <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          <li>
            <router-link-default v-if="authStore.isAdmin" :name="'Home'" :link="'home'" />
          </li>
          <li>
            <router-link-default :name="'Klanten'" :link="'clientIndex'" />
          </li>
          <li>
            <router-link-default v-if="authStore.isAdmin" :name="'QuickScans'" :link="'quickIndex'" />
          </li>
          <li>
            <router-link-default :name="'KTV'" :link="'ktvIndex'" />
          </li>
          <li>
            <router-link-default v-if="authStore.isAdmin" :name="'LandingPages'" :link="'landingIndex'" />
          </li>
          <li>
            <router-link-default :name="'Coll acties'" :link="'massIndex'" />
          </li>
          <li>
            <router-link-default v-if="authStore.isAdmin" :name="'Admin'" :link="'adminIndex'" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
