<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <component :is="$route.meta.layout || 'div'"></component>
  <RouterView />
  <DialogsWrapper />
</template>

<style scoped></style>
