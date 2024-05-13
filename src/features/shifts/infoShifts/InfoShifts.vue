<template>
  <v-tabs>
    <v-tab active="true" title="Смена">
      <div class="text-1  mb-[16px]">
        Данные смены
      </div>
      <div class="flex flex-col gap-[16px] p-[12px] bg-white rounded-[8px] px-[20px]">
        <div class="textgrey">Участок</div>
        <div>
        Цех #2
        </div>
      <div class="textgrey">Тип смены</div>
        <div>
          Дневная
      </div>
      <div class="textgrey">Плановая выработка</div>
        <div>
          5000 кг
      </div>
        <div class="textgrey">Сотрудники</div>
        <div>
          1. Рябов Кузьма Александрович
        </div>
      </div>
    </v-tab>
    <v-tab title="Выработка">
      <div class="text-1  mb-[16px]">
        Выработка за смену
      </div>
      <div class="flex flex-col gap-[16px] p-[12px] bg-white rounded-[8px] px-[20px]">
        <div class="textgrey">Единица измерения</div>
        <div>
          кг
        </div>
        <div class="textgrey">Плановая выработка</div>
        <div>
          5000
        </div>
        <div class="textgrey">Фактическая выработка</div>
        <div>
          6000
        </div>
        <div class="textgrey">Часы</div>
        <div>
          8
        </div>
      </div>
    </v-tab>
  </v-tabs>
</template>

<script setup>
import VTabs from "~/src/shared/ui/common/Tabs/VTabs.vue";
import VTab from "~/src/shared/ui/common/Tabs/VTab.vue";
</script>

<style scoped>
.text-1 {
  color: #2A3039;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
}
.textgrey {
  color: #949DAF;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>