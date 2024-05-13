<template>
  <div class="but">
  <button
      :id="props.id"
      :type="props.type"
      class="flex w-full justify-center rounded-md px-[36px] py-[18px] text-sm font-semibold leading-6 text-white bg-[#434FBA] hover:bg-[#363F95] focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:outline-[#434FBA] border-radius: 8px;"
      :class="props.class"
  >
    <div class="t1"><slot/></div>
  </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  type: String,
  class: String || Number
})
</script>

<style scoped lang="postcss">
.t1{
  font-size: 14px;
}
</style>