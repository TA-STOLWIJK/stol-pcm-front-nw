<script setup>
import RowTable from '@/components/table/RowTable.vue'
import ColTableFaces from '@/views/pcm/atrr/ColTableFaces.vue'

const props = defineProps({
  innerProfile: {
    required: true
  },
  innerKans: {
    required: true
  },
  innerUser: {
    required: true
  }
})
</script>

<template>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>Volgens profiel</RowTable>
    <ColTableFaces :faces="innerProfile" />
  </tr>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>Volgens update</RowTable>
    <ColTableFaces :faces="innerKans" />
  </tr>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>Volgens relatiemanager</RowTable>
    <ColTableFaces :faces="innerUser" />
  </tr>
</template>
