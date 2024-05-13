<script setup>
import {
  IconAvatar,
  IconExit,
  IconHome,
  IconProblemsLog,
  IconShifts,
} from "~/src/shared/ui/common";
import {VMenu, VMenuItem} from "~/src/shared/ui/components/Menu/index.js";

const isShowHome = ref(false)
const isProblemsLog = ref(false)
const route = useRoute()
</script>

<template>
  <div class="w-full p-[16px] flex justify-center">
    <div class="flex bottom-0 w-[320px] py-[16px] px-[17px] bg-white rounded-[14px] relative z-[100]">
      <nav class="flex gap-[24px] justify-between">
        <div class="block">
          <v-menu>
            <nav class="flex flex-col w-full max-w-[600px]">
              <div class="flex min-h-full flex-col justify-center px-6 mt-[80px] lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <nuxt-link to="/account">
                      <v-menu-item>
                        <template #icon>
                          <icon-avatar
                              fill="#434FBA"
                              stroke="#434FBA"
                          />
                        </template>
                        Аккаунт
                      </v-menu-item>
                    </nuxt-link>
                    <nuxt-link to="/shifts">
                      <v-menu-item>
                        <template #icon>
                          <icon-shifts
                              fill="#434FBA"
                              stroke="#434FBA"
                          />
                        </template>
                        История смен
                      </v-menu-item>
                    </nuxt-link>
                    <nuxt-link to="/">
                      <v-menu-item>
                        <template #icon>
                          <icon-exit
                              fill="#434FBA"
                              stroke="#434FBA"
                          />
                        </template>
                        Выход
                      </v-menu-item>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </nav>
          </v-menu>
        </div>
        <div class="block">
          <nuxt-link to="/home"
                     class="flex flex-col gap-[6px] items-center text-[11px] leading-[13px] w-[74px]"
                     active-class="text-[#434FBA] active"
          >
            <icon-home
                :stroke="route.path === '/home' ? '#434FBA' : '#161F2F'"
            />
            <div>
              <span v-if="!isShowHome"><div class="text-1">Главная</div></span>
              <span v-else-if="isShowHome"><div class="text">Главная</div></span>
            </div>
          </nuxt-link>
        </div>
        <div class="block">
          <nuxt-link to="/support" class="flex flex-col gap-[6px] items-center text-[11px] leading-[13px] w-[74px]"
                     active-class="text-[#434FBA] active">
            <icon-problems-log :fill="route.path === '/support' ? '#434FBA' : '#161F2F'"/>
            <div>
              <span v-if="!isProblemsLog"><div class="text-1">Неполадки</div></span>
              <span v-else-if="isProblemsLog"><div class="text">Неполадки</div></span>
            </div>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  width: 74px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.text-1 {
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.text {
  color: #434FBA;
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>