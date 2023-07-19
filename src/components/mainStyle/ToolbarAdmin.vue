<script setup>
import ThemeButton from '@/layout/themeButton.vue'
import RouterLinkDefault from '@/components/mainStyle/RouterLinkDefault.vue'
import { useAuth } from '@/stores/AuthStore'
const authStore = useAuth()
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
      <a href="https://flowbite.com" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >TrustedAccountant</span
        >
      </a>
      <div class="flex items-center">
        <span class="mr-6 text-sm font-medium text-gray-500 dark:text-white">{{
          authStore.user.first_name_user
        }} {{
            authStore.user.last_name_user
          }}</span>

        <theme-button />
      </div>
    </div>
  </nav>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
      <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          <li>
            <router-link-default :name="'Home'" :link="'home'" />
          </li>
          <li>
            <router-link-default :name="'HomeAdmin'" :link="'adminIndex'" />
          </li>
          <li>
            <router-link-default :name="'Teams'" :link="'teamIndex'" />
          </li>
          <li>
            <router-link-default :name="'Users'" :link="'userIndex'" />
          </li>
          <li>
            <router-link-default :name="'Links'" :link="'LinkIndex'" />
          </li>
          <li>
            <router-link-default :name="'KTV-reports'" :link="'KTVReports'" />
          </li>
          <li>
            <router-link-default :name="'Uploads'" :link="'Uploads'" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
