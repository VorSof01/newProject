<script setup lang="ts">

import {HeaderStand} from "~/src/widgets/header";
import {FooterContent} from "~/src/widgets/footer";
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <HeaderStand/>
    <div class="flex min-h-full flex-col justify-center w-full">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="mt-[16px] sm:mx-auto sm:w-full sm:max-w-sm px-6">
          <slot class="min-h-full"/>
        </div>
      </div>
    </div>
    <FooterContent class="bottom-[30px] items-center" />
  </div>
</template>

<style scoped>

</style>