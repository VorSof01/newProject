<template>
  <button @click="goBack" class="flex row" >
  <icon-arrow/>
  <span class="text-[#434FBA] text-center text-[14px] font-bold leading-4 ml-[5px]">
    Назад
  </span>
  </button>
</template>

<script setup lang="ts">
import {IconArrow} from "~/src/shared/ui/common/Icon";
import { useRouter } from '#imports'

const router = useRouter()

const goBack = (): void => {
  router.go(-1);
}
</script>
<style scoped lang="postcss">
.text {
}
</style>