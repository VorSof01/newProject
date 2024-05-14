<template>
    <div class="text-1">Изменение номера телефона</div>
    <form v-if="!isCodeNumber"
          class="space-y-6"
          @submit.prevent="sendCode">
      <div class="text">Укажите ваш новый номер телефона </div>
      <div class="my-[16px]">
        <p>Ваш старый номер</p>
        <p class="font-semibold leading-6">+7 (999) 000-09-09</p>
      </div>
      <div class="margin">
        <v-input
            v-model="formData1.subject"
            id="login"
            name="email"
            type="text"
            autocomplete="phone"
            placeholder="Новый номер"
            required
            :class="{ 'is-error': isErrorPhone || isEmptyPhone}"
            v-maska data-maska="#(###) ###-##-##"
        />
        <span v-show="isErrorPhone" class="error">Некорректно указанный номер</span>
        <span v-show="isEmptyPhone" class="error">Поле должно быть заполнено</span>
      </div>
      <v-button
          @click.prevent="sendCode"
      >
        Получить код
      </v-button>
    </form>
    <form
        v-else-if="isCodeNumber"
        class="space-y-6 mt-[20px]"
        @submit.prevent="changePhone"
    >
      <v-input-code
          digit-count="4"
          :class="{ 'is-error': isErrorCode || isEmptyCode}"
          @update:otp="formData1.code = $event">
      </v-input-code>
      <span v-show="isErrorCode" class="error">Неверный код для входа</span>
      <span v-show="isEmptyCode" class="error">Введите код для входа</span>
      <v-button type="submit" class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-radius: 8px;" @click.prevent="changePhone">Проверить</v-button>
    </form>
</template>

<script setup>
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
import {VButton} from "~/src/shared/ui/common";
import VInputCode from "~/src/shared/ui/common/Input/VInputCode.vue";
import {useCookie} from "#app";

const isCodeNumber = ref(false)

const isErrorCode = ref(false)
const isEmptyCode = ref(false)
const isErrorPhone = ref(false)
const isEmptyPhone = ref(false)

const token = useCookie('token')

const formData1 = ref({
  subject: '',
  code: '',
  phone: ''
})
const { subject, code } = toRefs(formData1.value)

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
  isErrorPhone.value = false
  isEmptyPhone.value = false
  await responseExecute()
  console.log(responseData.value)
  if (responseData.value) {
    isCodeNumber.value = true
  } else if (formData1.value.subject==='') {
    isEmptyPhone.value=true
  }
  else {
    isErrorPhone.value = true
  }
}
const { data: responseData1, execute: responseExecute1 } = await useFetch('/api/auth/code/confirm', {
  method: 'post',
  immediate: false,
  watch: false,
  body: formData1,
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const { data: responseData2, execute: responseExecute2 } = await useFetch('/api/profile/change/phone', {
  method: 'patch',
  immediate: false,
  watch: false,
  body: {
    code: code,
    phone: subject
  },
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const changePhone = async () => {
  isErrorCode.value = false
  isEmptyCode.value = false
  await responseExecute1()
  console.log(responseData1.value)
  if (responseData1.value) {
    await responseExecute2()
    console.log(responseData2.value)
  } else if (formData1.value.code ===''){
    isEmptyCode.value = true
  } else {
    isErrorCode.value=true
  }
}
</script>

<style scoped>
.text-1 {
  color: #2A3039;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
}
.text {
  color: #949DAF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2px;
  margin-top: 8px;
}
.margin {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>