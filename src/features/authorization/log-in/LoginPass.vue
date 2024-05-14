<template>
  <div>
    <form
        v-if="!isOpen"
        class="space-y-6"
        @submit.prevent="submitForm"
    >
      <div class="input-wrap">
        <v-input
            v-model="formData.login"
            id="login"
            name="email"
            type="text"
            autocomplete="email"
            placeholder="Логин"
            required
            :class="{ 'is-error': isAuthError || isAuthError2 }"
        />
        <span v-show="isAuthError" class="error">Неверный логин или пароль</span>
        <span v-show="isAuthError2" class="error">Заполните поле</span>
      </div>
      <div>
        <div class="flex items-center justify-between">
        </div>
        <div class="input-wrap">
          <v-input
              v-model="formData.password"
              id="password"
              name="password"
              :type="isPasswordShow ? 'text' : 'password'"
              autocomplete="current-password"
              placeholder="Пароль"
              required
              :class="{ 'is-error': isAuthError || isAuthError3 }"

          />
          <span v-show="isAuthError" class="error">Неверный логин или пароль</span>
          <span v-show="isAuthError3" class="error">Заполните поле</span>
          <v-button-icon id="pass-icon5" class="password_btn js-btn-password" @click="isPasswordShow = !isPasswordShow">
            <span v-if="isPasswordShow"><img src="public/icons/openEye.svg" alt=""></span>
            <span v-else-if="!isPasswordShow"><img src="public/icons/closeEye.svg" alt=""></span>
          </v-button-icon>
        </div>
      </div>
      <div class="flex justify-between">
        <v-check-box
            v-model="rememberMe"
        >Запомнить меня
        </v-check-box>
        <div class="bt-text">
          <button @click="isOpen = !isOpen">Забыли пароль?</button>
        </div>
      </div>
      <v-button type="submit" @click.prevent="submitForm">
        Войти
      </v-button>
    </form>
    <div
        v-else-if="isOpen"
    >
      <phone-auth/>
    </div>
  </div>
</template>

<script setup>
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
import VCheckBox from "~/src/shared/ui/common/CheckBox/VCheckBox.vue";
import {VButton} from "~/src/shared/ui/common/index.js";
import VButtonIcon from "~/src/shared/ui/common/Button/VButtonIcon.vue";
import {PhoneAuth} from "~/src/features/authorization/phoneAuth/index.js";
import axios from "axios";
import {refreshCookie, useCookie} from "#app";

const formData = ref({
  login: '',
  password: ''
})

const rememberMe = ref(false)
const isPasswordShow = ref(false)

const isAuthError = ref(false)
const isAuthError2 = ref(false)
const isAuthError3 = ref(false)
const isOpen = ref(false)

const { data: responseData, execute: responseExecute } = await useFetch('/api/auth/login', {
  method: 'post',
  immediate: false,
  watch: false,
  body: formData
})

const submitForm = async () => {
  isAuthError.value = false
  isAuthError2.value = false
  isAuthError3.value = false
  await responseExecute()
  console.log(responseData.value)
  if (responseData.value) {
    const tokenCookieOptions = {}
    if (rememberMe.value) {
      tokenCookieOptions.maxAge = 14 * 24 * 60 * 60
    }
    const token = useCookie('token', tokenCookieOptions)
    token.value = responseData.value?.data.token
    refreshCookie('token')
    console.log(token.value)
    return navigateTo('/home')
  } else if (formData.value.login==='' && formData.value.password==='') {
    isAuthError2.value = true;
    isAuthError3.value = true;
  } if (formData.value.login==='') {
    isAuthError2.value = true;
  } if (formData.value.password==='') {
    isAuthError3.value = true;
  }
  else {
    isAuthError.value = true;
  }
}
</script>

<style>
input:focus::placeholder {
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: 0.2px;
  transform: translateY(-16px);
}
.bt-text {
  color: #434FBA;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.input-wrap{
  @apply mt-2;
  position: relative;
  margin-top: 10px;
  margin-bottom: 15px;
  .password_btn{
    position: absolute;
    top:17px;
    right: 15px;
  }
}
.is-error {
  @apply shadow-[0_0_0_1px_#F25D5D];
}
.error {
  color: #F25D5D;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.2px;
}
</style>