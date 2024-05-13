<template>
  <option
      :value="props.value"
      :label="props.label ?? undefined"
      :disabled="props.disabled"
      class="v-option"
  />
</template>

<script setup>
const props = defineProps({
  value: String | Number | Boolean | Object,
  label: String | Number,
  disabled: Boolean,
})
</script>

<style scoped>
.v-option {
padding: 16px 12px;
  border-radius: 8px;
  height: 52px;
}
</style>