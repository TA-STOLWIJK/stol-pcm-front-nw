<script setup>
import { useDateFormat } from "@vueuse/core";

const props = defineProps({
  statusSend: {
    type: Boolean,
    required: true
  },
  statusLoggendIn: {
    type: Boolean,
    required: true
  },
  statusReport: {
    type: Boolean,
    required: true
  },
  statusNoInt: {
    type: Boolean,
    required: true
  },
  dateStart: {
    type: String,
    required: true
  },
  dateLoggedIn: {
    type: String,
    required: true
  },
  dateReport: {
    type: String,
    required: true
  },
})
const loggedInDate = useDateFormat(props.dateLoggedIn, 'D-MM-YYYY')
const startDate = useDateFormat(props.dateStart, 'D-MM-YYYY')
const reportDate = useDateFormat(props.dateStart, 'D-MM-YYYY')
</script>

<template>
  <div class="relative">
    <!-- Vertical middle line-->
    <div
      class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"
    ></div>
    <div class="space-y-12 lg:space-y-8">
      <!-- Left section -->
      <div v-if="!statusSend">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-start w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pr-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>QuickScan nog niet gestart</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 dark:bg-back_dark bg-back_light border-2 border-blue-200 rounded-full left-1/2 sm:translate-y-0 shadow-lg shadow-blue-300"
          >
            <span class="dark:text-gray-300 text-blue-700">start</span>
          </div>
        </div>
      </div>

      <div v-if="statusSend">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-end w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pl-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>
                  QuickScan is verstuurd op:
                  {{ startDate }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 dark:bg-back_dark bg-back_light border-2 border-blue-200 rounded-full left-1/2 sm:translate-y-0 shadow-lg shadow-blue-300"
          >
            <span class="dark:text-gray-300 text-gray-500">start</span>
          </div>
        </div>
      </div>

      <!-- Left section -->
      <div v-if="!statusLoggendIn">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-start w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pr-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Klant heeft nog niet ingelogd</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 dark:bg-back_dark bg-back_light border-2 border-blue-200 rounded-full left-1/2 sm:translate-y-0 shadow-lg shadow-blue-300"
          >
            <span class="dark:text-gray-300 text-gray-500">1</span>
          </div>
        </div>
      </div>

      <div v-if="statusLoggendIn">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-end w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pl-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Klant heeft ingelogd op: {{ loggedInDate }}</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 dark:bg-back_dark bg-back_light border-2 border-blue-200 rounded-full left-1/2 sm:translate-y-0 shadow-lg shadow-blue-300"
          >
            <span class="dark:text-gray-300 text-gray-500">1</span>
          </div>
        </div>
      </div>

      <!-- Left section -->
      <div v-if="!statusReport">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-start w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pr-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Rapportage niet verzonden</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 dark:bg-back_dark bg-back_light border-2 border-blue-200 rounded-full left-1/2 sm:translate-y-0 shadow-lg shadow-blue-300"
          >
            <span class="dark:text-gray-300 text-gray-500">2</span>
          </div>
        </div>
      </div>

      <div v-if="statusReport">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-end w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pl-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Klant heeft rapportage ontvangen op {{ reportDate }}</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 dark:bg-back_dark bg-back_light border-2 border-blue-200 rounded-full left-1/2 sm:translate-y-0 shadow-lg shadow-blue-300"
          >
            <span class="dark:text-gray-300 text-gray-500">2</span>
          </div>
        </div>
      </div>

      <!-- Left section -->
      <div v-if="!statusNoInt">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-start w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pr-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Interesse klant</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 dark:bg-back_dark bg-back_light border-2 border-blue-200 rounded-full left-1/2 sm:translate-y-0 shadow-lg shadow-blue-300"
          >
            <span class="dark:text-gray-300 text-gray-500">3</span>
          </div>
        </div>
      </div>

      <div v-if="statusNoInt">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-end w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pl-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Klant niet geïnteresseerd na inloggen</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 dark:bg-back_dark bg-back_light border-2 border-blue-200 rounded-full left-1/2 sm:translate-y-0 shadow-lg shadow-blue-300"
          >
            <span class="dark:text-gray-300 text-blue-500">3</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
