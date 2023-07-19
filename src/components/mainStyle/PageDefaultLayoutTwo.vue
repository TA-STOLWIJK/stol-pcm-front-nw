<script setup></script>
<template>
  <div class="bg-back_light dark:bg-back_dark">
    <div class="mx-auto max-w-screen-xl bg-base_light dark:bg-base_dark shadow h-full">
      <div class="pt-10 px-5 pb-20">
        <slot></slot>
      </div>
    </div>
    <div class="bg-back_light dark:bg-back_dark h-screen">
    </div>
  </div>
</template>

<style scoped></style>
