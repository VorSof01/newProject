<template>
  <form
      v-if="!isCodeWasSent"
      class="space-y-6"
      @submit.prevent="changePass"
  >
    <div class="input-wrap">
      <v-input
          v-model="formData.password"
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          placeholder="Пароль новый"
          required
      />
    </div>
    <div>
      <div class="flex items-center justify-between">
      </div>
      <div class="input-wrap">
        <v-input
            v-model="formData.password_confirmation"
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            placeholder="Повторите пароль"
            required
            :class="{ 'is-error': differentPass }"
        />
        <span v-show="differentPass" class="error">Неверный пароль</span>
      </div>
    </div>
    <v-button type="submit" @click.prevent="changePass">
      Сохранить
    </v-button>
  </form>
  <div
      v-else>
    <auth1/>
  </div>
</template>

<script setup>
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
import {VButton} from "~/src/shared/ui/common/index.js";
import Auth1 from "~/src/page/Auth1.vue";
import {useCookie} from "#app";

const token = useCookie('token')
const formData = ref({
  password: '',
  password_confirmation: ''
})
const {data: responseData, execute: responseExecute} = await useFetch('/api/auth/forgot', {
  method: 'post',
  immediate: false,
  watch: false,
  body: formData,
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})
const isCodeWasSent = ref(false)
const differentPass = ref(false)
const changePass = async () => {
  differentPass.value = false
  if (formData.value.password === formData.value.password_confirmation) {
    await responseExecute()
    console.log(responseData.value)
    isCodeWasSent.value = true
    return navigateTo('/')
  } else {
    differentPass.value = true
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
.input-wrap {
  @apply mt-2;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
  .password_btn {
    position: absolute;
    top: 17px;
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
  line-height: 14px; /* 140% */
  letter-spacing: 0.2px;
}
</style>