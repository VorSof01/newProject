<template>
  <form>
<select
    @change="onInput"
    class="rounded-[8px] hover:outline-0 focus:outline-0 w-full py-[16px] mt-[16px] px-[17px]"
>
  <option
      value=""
      selected
      disabled
      class="text-white"
  >
     <slot/>
  </option>
  <option
      v-for="option in props.options"
      :key="option.value"
      :value="option.value"
      class="text-black"
  >
    {{ option.label }}
  </option>
</select></form>
</template>

<script setup>
const props = defineProps({
  modelValue: String | Number | null,
  placeholder: String,
  options: {
    type: Array
  },
  disabled: Boolean,
  label: String
})
const emits = defineEmits(['update:model-value'])

const onInput = (event) => {
  emits('update:model-value', event.target.value)
}
</script>

<style scoped>
</style>