<template>
  <form
      @submit.prevent="saveForm"
      class="space-y-6"
  >
        <v-button-back/>
        <div class="text-1  mt-[16px]">
          Сформировать смену
        </div>
  <v-select
      placeholder="Выберите смену:"
      v-model="formData.selectValue"
      :options="selectOptions"
  ><option>Выберите цех:</option></v-select>
  <v-select
      v-model="formData.type"
      :options="type"
  ><option>Выберите смену:</option></v-select>
  <div class="mt-[16px]">
  <v-input
      v-model="formData.text"
      id="text11"
      name="text"
      type="text"
      autocomplete="text"
      placeholder="Плановая выработка"
      required
  /></div>
  <v-select
      v-model="formData.selectValue2"
      :options="selectOptions2"
  ><option>Выберите единицу измерения:</option></v-select>
  <div class="mt-[16px]">
  <v-button @click.prevent="saveForm">Сохранить</v-button>
  </div>
  </form>
</template>

<script setup>
import {VButton, VButtonBack, VSelect} from "~/src/shared/ui/common";
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
import {refreshCookie, useCookie} from "#app";
const token = useCookie('token')
const selectOptions = ref([
  {
    label: 'Цех1',
    value: 'opt1'
  },
  {
    label: 'Цех2',
    value: 'opt2'
  },
  {
    label: 'Цех3',
    value: 'opt3'
  }
])

const type = ref([
  {
    label: 'Дневная',
    value: 'day'
  },
  {
    label: 'Ночная',
    value: 'night'
  },
])
const formData1 = ref({
  text: '',
  selectValue: '',
  selectValue1: '',
  selectValue2: '',
})
const selectOptions2 = ref([
  {
    label: 'кг',
    value: 'opt3'
  },
  {
    label: 'мг',
    value: 'opt4'
  },
])
const formData = ref({
  shift_date: Date(),
  type: '',
  department_id: '',
  employers:'',
  unit_id: '',
  planned_output:''
})
const { data: responseData, execute: responseExecute } = await useFetch('/api/profile/shifts/create', {
  method: 'post',
  immediate: false,
  watch: false,
  body: formData,
  headers: {
    Authorization: `Bearer ${token.value}`
  }
})

const saveForm = async () => {
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