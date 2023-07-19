<script setup>
import { useClients } from '@/stores/client/clientStore'
import BasePagination from '@/components/table/BasePagination.vue'
const clientsStore = useClients()
</script>

<template>
  <BasePagination
    v-if="clientsStore.meta && clientsStore.meta.last_page > 1"
    path="client-index"
    :meta="clientsStore.meta"
    :links="clientsStore.links"
    :store-action="clientsStore.paginateClients"
  />
</template>
