<script setup>
import { useDateFormat } from "@vueuse/core";

const props = defineProps({
  statusA: {
    type: Boolean,
    required: true
  },
  statusB: {
    type: Boolean,
    required: true
  },
  statusC: {
    type: Boolean,
    required: true
  },
  dateA: {
    required: true
  },
  dateB: {
    required: true
  },
  dateC: {
    required: true
  },
})
const dateReminderA = useDateFormat(props.dateA, 'D-MM-YYYY')
const dateReminderB = useDateFormat(props.dateB, 'D-MM-YYYY')
const dateReminderC = useDateFormat(props.dateC, 'D-MM-YYYY')
</script>

<template>
  <div class="relative">
    <!-- Vertical middle line-->
    <div
      class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"
    ></div>
    <div class="space-y-12 lg:space-y-8">
      <!-- Left section -->
      <div v-if="!props.statusA">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-start w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pr-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Herinnering A</p>
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

      <div v-if="props.statusA">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-end w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pl-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Datum herinnering: {{ dateReminderA }}</p>
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
      <div v-if="!props.statusB">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-start w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pr-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Herinnering B</p>
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

      <div v-if="props.statusB">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-end w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pl-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Datum herinnering B:{{ dateReminderB }}</p>
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
      <div v-if="!props.statusC">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-start w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pr-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Herinnering aan RM</p>
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

      <div v-if="props.statusC">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-end w-full mx-auto">
            <div class="w-full lg:w-1/2 lg:pl-8">
              <div
                class="p-4 bg-back_light dark:bg-back_dark rounded shadow-lg shadow-blue-300 dark:text-primary_dark text-primary_light"
              >
                <p>Datum herinnering RM: {{ dateReminderC }}</p>
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
    </div>
  </div>
</template>

<style scoped></style>
