<template>
  <div>
    <div class="text-1  mb-[16px]">
      Аккаунт
    </div>
    <div class="mb-[8px]">
      Вы зашли под аккаунтом
    </div>
    <block-white><div class="font-semibold">Мастер</div></block-white>
    <button id="show-modal" @click="showModal = true">
      <block-white><div class="text-[14px]">Изменить номер</div>
        <div class=" ml-[150px] mt-[5px]"><icon-arrow-small/></div>
      </block-white></button>
    <Teleport to="body">
      <v-modal :show="showModal" @close="showModal = false">
        <ChangePhoneModel/>
      </v-modal>
    </Teleport>

    <button id="show-modal1" @click="showModal1 = true">
      <block-white><div class="text-[14px]">Изменить почту</div>
        <div class="ml-[150px] mt-[5px]"><icon-arrow-small/></div>
      </block-white></button>
    <Teleport to="body">
      <v-modal :show="showModal1" @close="showModal1 = false">
        <ChangeEmailModel/>
      </v-modal>
    </Teleport>

    <button id="show-modal2" @click="showModal2 = true">
      <block-white><div class="text-[14px]">Изменить пароль</div>
        <div class="ml-[140px] mt-[5px]"><icon-arrow-small/></div>
      </block-white></button>
    <Teleport to="body">
      <v-modal :show="showModal2" @close="showModal2 = false">
        <ChangePassModel/>
      </v-modal>
    </Teleport>

    <div class="flex justify-between">
      <div><v-switch v-model="formData.email_notification" @click="submitForm"/></div>
      <div class="text-[14px] mr-[50px]">Рассылка уведомлений на почту</div>
    </div>
  </div>
</template>

<script setup>
import VModal from "~/src/shared/ui/common/Modal/VModal.vue";
import {IconArrowSmall} from "~/src/shared/ui/common";
import VSwitch from "~/src/shared/ui/common/Switch/VSwitch.vue";
import {BlockWhite} from "~/src/shared/ui/common/blockWhite/index.js";
import {ChangePhoneModel} from "~/src/features/account/changePhone/index.js";
import {ChangeEmailModel} from "~/src/features/account/changeEmail/index.js";
import {ChangePassModel} from "~/src/features/account/changePass/index.js";
import {useCookie} from "#app";

const showModal = ref(false)
const showModal1 = ref(false)
const showModal2 = ref(false)

const formData = ref({
  email_notification: ''
})
const token = useCookie('token')
const { data: responseData, execute: responseExecute } = await useFetch('/api/profile/change/notification', {
  method: 'patch',
  immediate: false,
  watch: false,
  body: formData,
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})

const submitForm = async () => {
  await responseExecute()
  console.log(responseData.value)
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
</style>