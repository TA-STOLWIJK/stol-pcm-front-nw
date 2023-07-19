<script setup>
import RowTableIcon from '@/components/table/RowTableIcon.vue'
import TextIcon from '@/assets/svg/text.svg'
// const props = defineProps({
//   faces: {
//     type: String,
//     required: true,
//     default: '1'
//   }})
</script>

<template>
  <RowTableIcon>
    <TextIcon class="fill-blue-500 h-8 cursor-pointer hover:scale-150 hover:fill-red-500" />
  </RowTableIcon>
</template>
