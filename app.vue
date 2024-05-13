<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
<style lang="postcss">
body {
  background-color: #F6F6FA;
  height: 100%;
}
#__nuxt {
  height: 100%;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(150px);
}
</style>
<script setup>

</script>