<template>
    <div class="text-1">Изменение почты</div>
    <form v-if="!isEmailCode"
          class="space-y-6"
          @submit.prevent="sendCode">
      <div class="text">Укажите ваш новый email</div>
      <div class="my-[16px]">
        <p>Ваш старый email</p>
        <p class="font-semibold leading-6">master@lave.tech</p>
      </div>
      <div class="mt-2">
        <v-input
            v-model="formData.subject"
            id="login"
            name="email"
            type="text"
            autocomplete="email"
            placeholder="Новый email"
            required
            :class="{ 'is-error': incorrectNumber || isEmpty}"
        />
        <span v-show="incorrectNumber" class="error">Некорректно указанный номер</span>
        <span v-show="isEmpty" class="error">Поле должно быть заполнено</span>
      </div>
      <v-button
          @click.prevent="sendCode"
      >
        Получить код
      </v-button>
    </form>
    <form
        v-else-if="isEmailCode"
        class="space-y-6 mt-[20px]"
        @submit.prevent="changeEmail"
    >
      <v-input-code
          digit-count="4"
          :class="{ 'is-error': isCodeError || isEmptyCode}"
          @update:otp="formData.code = $event">
      </v-input-code>
      <span v-show="isCodeError" class="error">Неверный код для входа</span>
      <span v-show="isEmptyCode" class="error">Введите код для входа</span>
      <v-button type="submit" class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-radius: 8px;" @click.prevent="changeEmail">Проверить</v-button>
    </form>
</template>

<script setup>
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
import {VButton} from "~/src/shared/ui/common";
import VInputCode from "~/src/shared/ui/common/Input/VInputCode.vue";
import {useCookie} from "#app";

const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isEmailCode = ref(false)
const token = useCookie('token')

const isCodeError = ref(false)
const isEmptyCode = ref(false)
const incorrectNumber = ref(false)
const isEmpty = ref(false)

const formData = ref({
  subject: '',
  code: '',
  email: ''
})
const { code, subject } = toRefs(formData.value)

const { data: responseData, execute: responseExecute } = await useFetch('/api/auth/code/send', {
  method: 'post',
  immediate: false,
  watch: false,
  body: {subject},
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})

const sendCode = async () => {
  incorrectNumber.value = false
  isEmpty.value = false
  if (formData.value.subject.match(re)){
    await responseExecute()
    console.log(responseData.value)
    if (responseData.value) {
      isEmailCode.value = true
    }}else if (formData.value.subject.length === 0){
    isEmpty.value = true
    incorrectNumber.value = false
  }
  else {
    isEmailCode.value = false
    incorrectNumber.value = true
    isEmpty.value = false
  }
}
const { data: responseData1, execute: responseExecute1 } = await useFetch('/api/auth/code/confirm', {
  method: 'post',
  immediate: false,
  watch: false,
  body: formData,
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const { data: responseData2, execute: responseExecute2 } = await useFetch('/api/profile/change/email', {
  method: 'patch',
  immediate: false,
  watch: false,
  body: {
    code: code,
    email: subject
  },
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const changeEmail = async () => {
  isCodeError.value = false
  isEmptyCode.value = false
  await responseExecute1()
  console.log(responseData1.value)
  if (responseData1.value) {
    await responseExecute2()
    console.log(responseData2.value)
  } else if (formData.value.code ===''){
    isEmptyCode.value = true
  } else {
    isCodeError.value=true
  }
}
</script>

<style scoped>
.text {
  color: #949DAF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2px;
  margin-top: 8px;
}
.text-1 {
  color: #2A3039;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
}
</style>