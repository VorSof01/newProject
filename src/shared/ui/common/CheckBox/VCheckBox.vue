<template>
  <div class="flex items-center mb-4">
    <input
        id="default-checkbox"
        type="checkbox"
        :modelValue="props.modelValue"
        :value="props.value"
        :label="props.label"
        :disabled="props.disabled"
        :checked="props.checked"
        @change="onChange"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <span class="fake"></span>
    <label for="default-checkbox" class="text ms-2 text-sm"><slot/></label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String | Number | null,
  value: String | Boolean,
  label: String | Number | Boolean | Object,
  disabled: Boolean,
  checked: Boolean
})
const emits = defineEmits(['update:model-value'])

const onChange = (event) => {
  emits('update:model-value', event.target.value)
}
</script>

<style scoped>
[id=default-checkbox] {
  display: none;
}
.fake {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;
  border: 2px solid #434FBA;
  border-radius: 2px;
}
.fake:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 15px;
  height: 15px;
  background: #434FBA;
  opacity: 0;
  transition: .2s;
}
[id=default-checkbox]:checked + .fake::before{
  opacity: 1;
}
.text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.2px;
}
</style>