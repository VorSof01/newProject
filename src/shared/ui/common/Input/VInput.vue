<template>
  <input
      :id="props.id"
      :name="props.name"
      :type="props.type"
      :autocomplete="props.autocomplete"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      required
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      :class="{ 'is-error': props.error }"
      :maxlength="props.maxlenght"
      @input="onInput"
  />
</template>

<script setup>

const props = defineProps({
  modelValue: String | Number | null,
  type: String,
  id: String,
  name: String,
  autocomplete: String,
  placeholder: String,
  required: Boolean,
  error: String,
  maxlenght: Number
})

const emits = defineEmits(['update:model-value'])

const onInput = (event) => {
  emits('update:model-value', event.target.value)
}
</script>

<style scoped lang="postcss">
.is-error {
  @apply shadow-[0_0_0_1px_#F25D5D];
}
input {
  padding: 17px 16px 17px 16px;
  font-size: 15px;
}
::placeholder {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
  align-self: stretch;
  transition: 0.3s;
}

</style>