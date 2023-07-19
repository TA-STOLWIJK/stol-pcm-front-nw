<script setup>
import RowTableIcon from '@/components/table/RowTableIcon.vue'
import GoIcon from '@/assets/svg/magnify-scan.svg'
// const props = defineProps({
//   faces: {
//     type: String,
//     required: true,
//     default: '1'
//   }})
</script>

<template>
  <RowTableIcon>
    <GoIcon class="fill-red-400 h-8 cursor-pointer hover:scale-150 hover:fill-red-500" />
  </RowTableIcon>
</template>
