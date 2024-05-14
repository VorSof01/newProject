<template>
  <div class="w-full">
      <div class="text-1  mb-[16px]">
        Смены
      </div>
      <div>
        У вас пока нет созданных смен
      </div>
      <div class="mt-[250px] flex w-full justify-center rounded-md px-[36px] py-[18px] text-[14px] font-semibold leading-6 text-white bg-[#434FBA] hover:bg-[#363F95] focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:outline-[#434FBA] border-radius: 8px;">
        <nuxt-link to="/createShift">
          Сформировать смену
        </nuxt-link>
      </div>
    </div>
</template>

<script setup lang="ts">
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