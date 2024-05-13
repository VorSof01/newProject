<template>
        <v-button-back/>
        <div class="text-1  mt-[16px]">
          Сформировать смену
        </div>
  <v-select
      placeholder="Выберите смену:"
      v-model="formData.selectValue"
      :options="selectOptions"
  ><<template #placeholder>Выберите цех: </template></v-select>
  <v-select
      v-model="formData.selectValue1"
      :options="selectOptions1"
  ><template #placeholder>Выберите смену: </template></v-select>
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
  ><template #placeholder>Выберите единицу измерения: </template></v-select>
  <div class="mt-[16px]">
  <v-button @click.prevent="">Сохранить</v-button>
  </div>
</template>

<script setup>
import {VButton, VButtonBack, VSelect} from "~/src/shared/ui/common";
import VInput from "~/src/shared/ui/common/Input/VInput.vue";
const selectOptions = ref([
  {
    label: '',
    value: ''
  },
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

const selectOptions1 = ref([
  {
    label: '',
    value: ''
  },
  {
    label: 'Дневная',
    value: '1'
  },
  {
    label: 'Ночная',
    value: '2'
  },
])
const formData = ref({
  text: '',
  selectValue: '',
  selectValue1: '',
  selectValue2: '',
})
const selectOptions2 = ref([
  {
    label: '',
    value: ''
  },
  {
    label: 'кг',
    value: 'opt3'
  },
  {
    label: 'мг',
    value: 'opt4'
  },
])

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