<template>
  <div class="form-group">
    <label :for="name">{{label}}</label>
    <VeeField
      :name="name"
      :label="label"
      :modelValue="modelValue"
      @input="$emit('modelUpdate', $event)"
      :id="name"
      class="form-input"
      v-bind="$attrs"
    />
    <VeeErrorMessage :name="name" class="text-red-400" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    label: { type: String, default: '' },
    modelValue: { type: String, default: '' }
  }
}
</script>

<style scoped>
</style>
