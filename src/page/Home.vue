<template>
  <div class="w-full">
    <div v-if="!isCreat">
      <div class="text-1  mb-[16px]">
        Смены
      </div>
      <div>
        У вас пока нет созданных смен
      </div>
      <div class="mt-[250px]">
        <v-button type="submit" @click="isCreat = !isCreat">
          Сформировать смену
        </v-button>
      </div>
    </div>
    <div v-else>
      <shifts-creat/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {VButton} from "~/src/shared/ui/common";
import {ShiftsCreat} from "~/src/features/shifts/createShifts";

const isCreat = ref(false)
</script>

<style scoped>
.text-1 {
  color: #2A3039;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
}

</style>