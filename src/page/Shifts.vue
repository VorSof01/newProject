<template>
  <div>
        <div class="text-1  mb-[16px]">
          История смен
        </div>
  <InfoShifts/>
  </div>
</template>

<script setup lang="ts">
import InfoShifts from "~/src/widgets/shifts/infoShifts/InfoShifts.vue";
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