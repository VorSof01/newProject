
<template>
  <div class="text-1">Изменение пароля</div>
  <form
      class="space-y-6"
      @submit.prevent="saveNewPass">
    <div class="my-[16px]">
      <div class="mt-2 input-wrap">
        <v-input
            v-model="formData.old_password"
            id="passwOld"
            name="pass"
            :type="isPasswordShowOld ? 'text' : 'password'"
            autocomplete="password"
            placeholder="Старый пароль"
            required
            :class="{ 'is-error': isEmptyOldPass}"
        />
        <span v-show="isEmptyOldPass" class="error">Поле должно быть заполнено</span>
        <v-button-icon id="pass-icon1" class="password_btn js-btn-password" @click="isPasswordShowOld = !isPasswordShowOld">
          <span v-if="isPasswordShowOld"><img src="../../../../public/icons/openEye.svg" alt=""></span>
          <span v-else><img src="../../../../public/icons/closeEye.svg" alt=""></span>
        </v-button-icon>
      </div>
    </div>
    <div class="mt-2 input-wrap">
      <v-input
          v-model="formData.new_password"
          id="passw"
          name="pass"
          :type="isPasswordShowNew ? 'text' : 'password'"
          autocomplete="password"
          placeholder="Новый пароль"
          required
          :class="{ 'is-error': differentPass || isEmptyNew}"
      />
      <span v-show="differentPass" class="error">Пароли не совпадают</span>
      <span v-show="isEmptyNew" class="error">Поле должно быть заполнено</span>
      <v-button-icon id="pass-icon2" class="password_btn js-btn-password" @click="v = !isPasswordShowNew">
        <span v-if="isPasswordShowNew"><img src="../../../../public/icons/openEye.svg" alt=""></span>
        <span v-else><img src="../../../../public/icons/closeEye.svg" alt=""></span>
      </v-button-icon>
    </div>
    <div class="mt-2 input-wrap">
      <v-input
          v-model="formData.new_password_confirmation"
          id="passwRepeat"
          name="pass"
          :type="isPasswordShowConf ? 'text' : 'password'"
          autocomplete="password"
          placeholder="Повторите пароль"
          required
          :class="{ 'is-error': differentPass || isEmptyConfirmPass}"
      />
      <span v-show="differentPass" class="error">Пароли не совпадают</span>
      <span v-show="isEmptyConfirmPass" class="error">Поле должно быть заполнено</span>
      <v-button-icon id="pass-icon3" class="password_btn js-btn-password" @click="isPasswordShowConf = !isPasswordShowConf">
        <span v-if="isPasswordShowConf"><img src="../../../../public/icons/openEye.svg" alt=""></span>
        <span v-else><img src="../../../../public/icons/closeEye.svg" alt=""></span>
      </v-button-icon>
    </div>
    <v-button
        @click.prevent="saveNewPass"
    >
      Сохранить
    </v-button>
  </form>
</template>

<script setup>
import VButtonIcon from "../../../shared/ui/common/Button/VButtonIcon.vue";
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
import {VButton} from "~/src/shared/ui/common";
import {useCookie} from "#app";

const isPasswordShowOld = ref(false)
const isPasswordShowNew = ref(false)
const isPasswordShowConf = ref(false)

const isErrorOldPass = ref(false)
const isEmptyOldPass = ref(false)
const differentPass = ref(false)
const isEmptyNew = ref(false)
const isEmptyConfirmPass = ref(false)

const formData = ref({
  old_password: '',
  new_password: '',
  new_password_confirmation: ''
})
const token = useCookie('token')
const {data: responseData2, execute: responseExecute2} = await useFetch('/api/profile/change/password', {
  method: 'patch',
  immediate: false,
  watch: false,
  body: formData,
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})

const saveNewPass = async () => {
  isEmptyOldPass.value = false
  differentPass.value = false
  isEmptyNew.value = false
  isEmptyConfirmPass.value = false
  if (formData.value.new_password === formData.value.new_password_confirmation) {
    await responseExecute2()
    console.log(responseData2.value)
  } else if (formData.value.new_password !== formData.value.new_password_confirmation){
    differentPass.value = true
  } else if(formData.value.new_password==='') {
    isEmptyNew.value = false
  }
  else if(formData.value.old_password==='') {
    isEmptyOldPass.value = false
  }
  else if(formData.value.new_password_confirmation==='') {
    isEmptyConfirmPass.value = false
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

.input-wrap {
  @apply mt-2;
  position: relative;

  .password_btn {
    position: absolute;
    top: 17px;
    right: 15px;
  }
}
</style>