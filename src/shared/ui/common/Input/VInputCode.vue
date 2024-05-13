<template>
  <div ref="otpCont">
  <input
      :id="props.id"
      type="text"
      class="block1 w-full rounded-md border-0 py-1.5 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      v-for="(el, ind) in digits"
      :key="el+ind"
      v-model="digits[ind]"
      :autofocus="ind === 0"
      maxlength="1"
      :class="{ 'is-error': props.error }"
      @keydown="handleKeyDown($event, ind)"
      @input="onInput"
  />
  </div>
</template>

<script setup>
const emits = defineEmits(['update:otp'])

const onInput = (event) => {
  emits('update:otp', event.target.value)
}

const isDigitsFull = function () {
  for (const elem of digits) {
    if (elem === null || elem === undefined) {
      return false;
    }
  }

  return true;
}
import { ref, reactive } from 'vue';

const props = defineProps({
  default: String,
  modelValue: String | Number | null,
  digitCount: {
    type: Number,
    required: true
  }
});

const digits = reactive([])

if (props.default && props.default.length === props.digitCount) {
  for (let i =0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i)
  }
} else {
  for (let i =0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}

const otpCont = ref(null)
const handleKeyDown = function (event, index) {
  if (event.key !== "Tab" &&
      event.key !== "ArrowRight" &&
      event.key !== "ArrowLeft"
  ) {
    event.preventDefault();
  }

  if (event.key === "Backspace") {
    digits[index] = null;

    if (index !== 0) {
      (otpCont.value.children)[index-1].focus();
    }
    if (isDigitsFull()) {
      emits('update:otp', digits.join(''))
    }
    return;
  }

  if ((new RegExp('^([0-9])$')).test(event.key)) {
    digits[index] = event.key;

    if (index !== props.digitCount - 1) {
      (otpCont.value.children)[index+1].focus();
    }
  }
  if (isDigitsFull()) {
    emits('update:otp', digits.join(''))
  }
}
</script>

<style scoped lang="postcss">
.is-error {
  border: 1px solid #F25D5D;
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
.block1 {
  display: inline-block;
  height: 66px;
  width: 56px;
  padding: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 4px;
  border: 1px solid #434FBA;
  background: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  letter-spacing: 0.2px;
  text-align: center;
  margin: 5px;
}
</style>