<script setup lang="ts">

import HeaderAuth from "../../shared/ui/branding/HeaderAuth.vue";
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 mt-24 lg:px-8 w-full">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <HeaderAuth/>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>