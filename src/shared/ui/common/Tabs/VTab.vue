<template>
  <div class="tab" :class="props.active ? 'active' : ''" ref="tabs">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  active: Boolean
});
</script>

<style>
.tab {
  display: none;
}
.tab.active {
  display: block;
}
</style>