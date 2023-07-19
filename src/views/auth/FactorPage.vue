<script setup>
import { useAuth } from '@/stores/AuthStore'
const authStore = useAuth()
const email = authStore.user.email
import { ref } from 'vue'
import FlashMessage from '@/components/form/FlashMessage.vue'
const two_factor_code = ref(null)
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
          <h1 class="text-gray-500 text-xl font-bold mt-5">Authenticatiecode</h1>
          <small class="text-gray-400"
            >Nu nog je authenticatiecode deze is verstuurd per mail.</small
          >

          <!-- Form -->
          <!--          <form class="mt-4">-->
          <form @submit.prevent="authStore.factor({ email, two_factor_code })">
            <div class="mb-3">
              <label class="mb-2 block text-xs font-bold">Authenticatiecode</label>
              <input
                type="text"
                v-model="two_factor_code"
                autofocus
                placeholder="Je code"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
              <input
                type="text"
                v-model="authStore.user.email"
                placeholder="Je gebruikersnaam"
                class="hidden block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3 flex flex-wrap content-center">
              <a href="#" class="text-xs font-bold text-purple-700">Gebruikersnaam vergeten?</a>
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
