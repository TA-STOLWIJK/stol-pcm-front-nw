<script setup>
import { useUser } from '@/stores/user/userStore'
import BasePagination from '@/components/table/BasePagination.vue'
const userStore = useUser()
</script>

<template>
  <BasePagination
    v-if="userStore.meta && userStore.meta.last_page > 1"
    path="user-index"
    :meta="userStore.meta"
    :links="userStore.links"
    :store-action="userStore.paginateUsers"
  />
</template>
