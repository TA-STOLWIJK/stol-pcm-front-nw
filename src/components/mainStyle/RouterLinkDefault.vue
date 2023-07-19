<script setup>
const props = defineProps({
  link: String,
  name: String
})
</script>

<template>
  <router-link :to="{ name: props.link }" class="text-gray-900 dark:text-white hover:underline">{{
    props.name
  }}</router-link>
</template>
<style scoped>
.active-link {
  text-decoration: underline overline;
  font-weight: bold;
}
</style>
