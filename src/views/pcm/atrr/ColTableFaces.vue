<script setup>
import HappyIcon from '@/assets/svg/emoticon-happy-outline.svg'
import NeutralIcon from '@/assets/svg/emoticon-neutral-outline.svg'
import SadIcon from '@/assets/svg/emoticon-sad-outline.svg'
import RowTableIcon from '@/components/table/RowTableIcon.vue'
const props = defineProps(['faces'])
</script>

<template>
  <RowTableIcon>
    <HappyIcon v-if="faces === '1'" class="fill-green-600 h-8" />
    <NeutralIcon v-if="faces === '2'" class="fill-orange-400 h-8" />
    <SadIcon v-if="faces === '3'" class="fill-red-600 h-8" />
  </RowTableIcon>
</template>
