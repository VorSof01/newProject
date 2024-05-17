<template>
    <form
        class="space-y-6"
        @submit.prevent="submitForm"
    >
      <div class="mt-2">
        <v-input
            v-model="formData.subject"
            id="topic"
            name="topic"
            type="text"
            autocomplete="text"
            placeholder="Тема обращения"
            required
            :class="{ 'is-error': isAuthError }"
        />
        <span v-show="isAuthError" class="error">Заполните поле</span>
      </div>
      <div class="mt-2">
        <v-textarea
            v-model="formData.content"
            placeholder="Текст обращения"
            :class="{ 'is-error': isAuthError1 }"></v-textarea>
        <span v-show="isAuthError1" class="error">Заполните поле</span>
      </div>
      <div class="mt-2">
        <v-button type="submit" @click.prevent="submitForm">Отправить</v-button>
      </div>
    </form>
</template>

<script setup>
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
import {VButton} from "~/src/shared/ui/common";
import VTextarea from "~/src/shared/ui/common/Input/VTextarea.vue";
import {useCookie} from "#app";

const token = useCookie('token')

const isAuthError1 = ref(false)
const isAuthError = ref(false)
const formData = ref({
  subject: '',
  content: ''
})
const { data: responseData, execute: responseExecute } = await useFetch('/api/profile/feedback/send', {
  method: 'post',
  immediate: false,
  watch: false,
  body: formData,
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})

const submitForm = async () => {
  isAuthError.value = false
  isAuthError1.value = false
  await responseExecute()
  if (formData.value.content ==='') {
    isAuthError1.value = true
    isAuthError.value = false
  }
  else if (formData.value.subject ==='') {
    isAuthError.value = true
    isAuthError1.value = false
  } else if (formData.value.subject !=='' && formData.value.content !==''){
    console.log(responseData.value)
    formData.value.subject ===''
    formData.value.content ===''
    console.log(responseData.value)
  }
  else{
    isAuthError1.value = true
    isAuthError.value = true
  }
}
</script>

<style scoped>
.is-error {
  @apply shadow-[0_0_0_1px_#F25D5D];
}
.mt-2 {
  margin-top: 10px;
}
</style>
