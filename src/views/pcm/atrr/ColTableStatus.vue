<script setup>
import CheckIcon from '@/assets/svg/check.svg'
import UnCheckIcon from '@/assets/svg/minus-box-outline.svg'
import RowTableIcon from '@/components/table/RowTableIcon.vue'

const props = defineProps({
  check: {
    required: true,
    default: true
  }})
</script>

<template>
  <RowTableIcon>
    <CheckIcon v-if="check" class="fill-green-500 h-8" />
    <UnCheckIcon v-if="!check" class="fill-red-600 h-8" />
  </RowTableIcon>
</template>
