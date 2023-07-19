<script setup>
import { useSatis } from '@/stores/satis/satisStore'
import BasePagination from '@/components/table/BasePagination.vue'
const satisStore = useSatis()
</script>

<template>
  <BasePagination
    v-if="satisStore.meta && satisStore.meta.last_page > 1"
    path="ktv-index"
    :meta="satisStore.meta"
    :links="satisStore.links"
    :store-action="satisStore.paginateClients"
  />
</template>
