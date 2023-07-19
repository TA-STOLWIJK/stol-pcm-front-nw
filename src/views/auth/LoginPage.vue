<script setup>
import { useAuth } from '@/stores/authStore'
const authStore = useAuth()
import { ref } from 'vue'
import FlashMessage from '@/components/form/FlashMessage.vue'
const name = ref(null)
const password = ref('password')
</script>
<template>
  <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
    <!-- Login component -->
    <div class="flex shadow-md">
      <!-- Login form -->
      <div
        class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
        style="width: 24rem; height: 32rem"
      >
        <div class="w-72">
          <!-- Heading -->
          <h1 class="text-gray-500 text-2xl font-bold">PCM platform</h1>
          <h1 class="text-gray-500 text-xl font-bold mt-5">Welkom terug!</h1>
          <small class="text-gray-400"
            >Fijn dat je weer gebruik maakt van ons platform. Onderstaand kan je je gebruikersnaam
            invullen.</small
          >

          <!-- Form -->
          <!--          <form class="mt-4">-->
          <form @submit.prevent="authStore.login({ name, password })">
            <div class="mb-3">
              <label class="mb-2 block text-xs font-bold">Gebruikersnaam</label>
              <input
                type="text"
                v-model="name"
                autofocus
                placeholder="Je gebruikersnaam"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
              <input
                type="text"
                v-model="password"
                placeholder="Je gebruikersnaam"
                class="hidden block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>


            <div class="mb-3">
              <button
                class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                type="submit"
              >
                Log in
              </button>
            </div>
            <FlashMessage :errorMessage="authStore.error" />
          </form>
          <!--          </form>-->

          <!-- Footer -->
        </div>
      </div>

      <!-- Login banner -->
      <div
        class="flex flex-wrap content-center justify-center rounded-r-md bg-amber-600"
        style="width: 24rem; height: 32rem"
      >
        <img
          class="w-2/3 bg-center bg-no-repeat bg-cover rounded-r-md"
          src="@/assets/logo/logo_light.png"
        />
      </div>
    </div>

    <!-- Credit -->
    <div class="mt-3 w-full">
      <p class="text-center">
        Ontwikkelt door
        <a target="_blank" href="https://www.trustedaccountant.nl" class="text-purple-700"
          >Trusted Accountant</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
