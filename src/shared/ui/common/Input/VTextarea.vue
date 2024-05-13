<template>
 <textarea
     v-model="props.modelValue"
     :placeholder="props.placeholder"
     class="resize-none outline-none w-[340px] h-[200px] rounded-md border-0 py-1.5 px-[16px] text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[14px] sm:text-sm sm:leading-6"
     :class="{ 'is-error': props.error }"
     @input="onInput"
 >{{ props.modelValue }}</textarea>
</template>

<script setup>
const props = defineProps({
  id: String,
  placeholder: String,
  error: String,
  modelValue: String,
  type: String
})

const emits = defineEmits(['update:model-value'])

const onInput = (event) => {
  emits('update:model-value', event.target.value)
}
</script>

<style scoped>
textarea{
  font-size: 14px;
}
</style>