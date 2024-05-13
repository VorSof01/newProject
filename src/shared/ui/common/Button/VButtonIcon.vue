<template>
    <button
        :id="props.id"
        :type="props.type"
        :class="props.class"
    >
      <slot />
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  type: String,
  class: String || Number
})
</script>

<style scoped lang="postcss">
</style>