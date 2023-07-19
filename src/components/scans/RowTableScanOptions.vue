<script setup>
import RowTable from '@/components/table/RowTable.vue'
import ColTableFaces from '@/views/pcm/atrr/ColTableFaces.vue'
import ColTableStatus from "@/views/pcm/atrr/ColTableStatus.vue";

const props = defineProps({
  innerStyle: {
    required: true
  },
  innerUser: {
    required: true
  },
  innerReminder: {
    required: true
  },
  innerRelMan: {
    required: true
  },
  innerPersonalText: {
    required: true
  },
})
</script>

<template>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>Commerciële kans volgens RM</RowTable>
    <ColTableFaces :faces="innerUser" />
  </tr>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>Stijl</RowTable>
    <RowTable class="text-center" v-if="innerStyle === 'formeel'">Formeel</RowTable>
    <RowTable class="text-center" v-if="innerStyle === 'informeel'">Informeel</RowTable>
  </tr>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>Klant krijgt herinneringen (3 en 7 dagen)</RowTable>
    <ColTableStatus :check="innerReminder" />
  </tr>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>Tweede relatiemanager betrokken</RowTable>
    <ColTableStatus :check="innerRelMan" />
  </tr>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>Persoonlijke tekst email</RowTable>
    <ColTableStatus :check="innerPersonalText" />
  </tr>
</template>
