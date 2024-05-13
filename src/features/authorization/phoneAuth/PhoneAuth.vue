<template>
  <form
        class="space-y-6"
        @submit.prevent="sendCode">
    <div class="mt-2">
      <v-input
          v-model="formData.subject"
          id="phone"
          name="email"
          type="text"
          autocomplete="phone"
          required
          placeholder="Введите номер телефона"
          class="tel"
          v-maska data-maska="#(###) ###-##-##"
          :class="{ 'is-error': isErrorPhone || isEmptyPhone}"
      />
      <span v-show="isErrorPhone" class="error">Некорректно указанный номер</span>
      <span v-show="isEmptyPhone" class="error">Поле должно быть заполнено</span>
    </div>

    <form
        v-if="isCodeNumber"
        class="space-y-6"
        @submit.prevent="checkCode"
    >
      <v-input-code
          digit-count="4"
          :class="{ 'is-error': isErrorCode || isEmptyCode}"
          @update:otp="formData.code = $event">
      </v-input-code>
      <span v-show="isErrorCode" class="error">Неверный код для входа</span>
      <span v-show="isEmptyCode" class="error">Введите код для входа</span>
      <v-button type="submit" v-if="!isChangePass"
                class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-radius: 8px;"
                @click.prevent="checkCode">
        Проверить
      </v-button>
      <ChangePass v-else/>
      <p class="text-2" v-if="seconds2>0 || minutes2>0">Повторный запрос кода будет доступен
        через {{ minutes2 }}:{{ seconds2 }} сек.</p>
      <button v-else class=" bt-text flex w-full  bg-none br-none" @click.prevent="sendCode">Отправить код повторно</button>
    </form>
    <v-button
        v-if="!isCodeNumber"
        @click.prevent="sendCode"
    >
      Получить код
    </v-button>
  </form>
</template>

<script setup>
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
import {VButton} from "~/src/shared/ui/common";
import VInputCode from "~/src/shared/ui/common/Input/VInputCode.vue";
import {ChangePass} from "~/src/features/authorization/changePass/index.js";

const isCodeNumber = ref(false)
const isChangePass = ref(false)

const isErrorCode = ref(false)
const isEmptyCode = ref(false)
const isErrorPhone = ref(false)
const isEmptyPhone = ref(false)

const formData = ref({
  subject: '',
  code: ''
})

const { data: responseData, execute: responseExecute } = await useFetch('/api/auth/code/send', {
  method: 'post',
  immediate: false,
  watch: false,
  body: formData
})

const sendCode = async () => {
  isErrorPhone.value = false
  isEmptyPhone.value = false
  await responseExecute()
  console.log(responseData.value)
  if (responseData.value) {
    isCodeNumber.value = true
  } else if (formData.value.subject==='') {
    isEmptyPhone.value = true
  } else {
    isErrorPhone.value = true
    console.log(responseData.value)
  }
}

let time=3600;
const minutes2 = ref(0)
const seconds2 = ref(10)
function updateCountdown() {
  let seconds = time % 60;
  if (seconds2.value === 0) {
    minutes2.value --
    seconds2.value = 60
  }
  seconds2.value--
  seconds = seconds < 10 ? "0" + seconds: seconds;
  time--;
}
onMounted(() => {
  const idInt = setInterval(updateCountdown, 1000);
  watch(seconds2, (newValue) => {
    if(minutes2.value === 0 && newValue === 0) {
      clearInterval(idInt)
    }
  })
})

const { data: responseData1, execute: responseExecute1 } = await useFetch('/api/auth/code/confirm', {
  method: 'post',
  immediate: false,
  watch: false,
  body: formData
})

const checkCode = async () => {
  isErrorCode.value = false
  isEmptyCode.value = false
  await responseExecute1()
  console.log(responseData1.value)
  if (responseData1.value) {
    isChangePass.value = true
  } else if (formData.value.code ===''){
    isEmptyCode.value = true
  } else {
    isErrorCode.value=true
  }
}
</script>

<style scoped>
[id=default-checkbox]:checked + .fake::before{
  opacity: 1;
}
.mt-2{
  position: relative;
  margin-top: 10px;
  margin-bottom: 30px;
}
.text-2 {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: 0.2px;
}
.error {
  color: #F25D5D;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: 0.2px;
}
</style>