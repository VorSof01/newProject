<script setup lang="ts">

import LogoSmall from "~/src/shared/ui/branding/LogoSmall.vue";
import {IconAvatar} from "~/src/shared/ui/common";
</script>

<template>
  <div class="flex-col bg-white w-full ">
    <div class="flex min-h-full flex-col justify-center z-50">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm py-4 px-5">
        <div class="flex justify-between pb-4">
          <LogoSmall/>
          <div class="flex justify-between padding-top-20">
            <img src="../../../public/icons/lamp.svg" alt="" class="lamp ">
            <p class="text-instr pl-2">Инструкция</p>
          </div>
        </div>
        <div class="flex row">
          <icon-avatar fill="#DADFEA" stroke="#DADFEA" width="20" height="20"/>
          <p class="text-name pl-2">Иванов И.И.</p>
          <p class="text-stand pl-2">Производство</p>
        </div>
        <div class="flex-col">
          <div class="flex"><p class="text-stand1">фасованного растительного масла и вспомогательных материалов. Цех
            розлива №1. Производственный участок №1.</p></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.lamp {
  width: 15px;
  height: 15px;
  background-color: #434FBA;
  border-radius: 100px;
}

.text-instr {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2px;
}

.text-name {
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.2px;
}

.text-stand {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #949DAF;
}

.text-stand1 {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #949DAF;
  padding-left: 26px;
}
</style>