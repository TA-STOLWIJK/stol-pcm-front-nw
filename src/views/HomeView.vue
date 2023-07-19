<script setup>
import DashboardWidget from '@/components/home/DashboardWidget.vue'
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
</script>
<template>
  <PageDefaultLayout>
    <DashboardWidget />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      <div class="bg-red-600 rounded-lg shadow-2xl min-h-[50px] col-span-3">Jouw acties</div>
      <div class="bg-green-600 rounded-lg shadow-2xl min-h-[50px]">Jouw berichten</div>
    </div>
    <!--  <div class="bg-amber-600 dark:bg-indigo-600">-->
    <!--    <div class="mx-auto max-w-screen-xl bg-gray-400 shadow h-screen">-->
    <p class="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
    <p class="text-gray-500 text-lg">Vue and Tailwind CSS in action</p>

    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>

    <div><br /></div>
    <div><br /></div>
    <div>test</div>
    <!--    </div>-->
    <!--  </div>-->
  </PageDefaultLayout>
</template>
