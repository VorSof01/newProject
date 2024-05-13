<template>
  <div class="block">
    <button @click.stop="isShowMenu = !isShowMenu">
      <span v-if="!isShowMenu"><IconMenu/></span>
      <span v-else-if="isShowMenu"><IconMenuClose/></span>
    </button>
    <div>
      <span v-if="!isShowMenu"><div class="text-1">Меню</div></span>
      <span v-else-if="isShowMenu"><div class="text">Меню</div></span>
    </div></div>
  <teleport
      to="body"
  >
    <transition
        name="modal"
    >
      <div
          v-show="isShowMenu"
          @click="closeMenu"
          class="w-screen h-screen absolute bottom-0 bg-white flex items-center justify-center px-[20px] z-50 overflow-hidden"
          @click.stop
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
const isShowMenu = ref(false)
const route = useRoute()
import {IconMenu, IconMenuClose} from "~/src/shared/ui/common";
const closeMenu = (evt: MouseEvent): void => {
  const eventTargetObject: HTMLElement = evt.target as HTMLElement
  if (eventTargetObject.classList.contains('trigger-button')) {
    evt.preventDefault()
    return
  }
  isShowMenu.value = false
}
watch(() => route.path, () => {
  isShowMenu.value = false
})
</script>

<style scoped>
.text {
  color: #434FBA;
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.text-1 {
  color: black;
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>