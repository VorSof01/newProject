<template>
  <button @click="goBack" class="flex row" >
  <icon-arrow/>
  <div class="text">
    Назад
  </div>
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
  color: #434FBA;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
}
</style>