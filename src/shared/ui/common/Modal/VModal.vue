<template>
  <Transition name="modal" :id="props.id">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-footer">
          <div class="footer">
            <button
                class="modal-default-button mx-[250px] my-[-30px]"
                @click="$emit('close')"
            ><IconCross/></button>
          </div>
        </div>
          <slot/>
      </div>
    </div>
  </Transition>
</template>


<script setup lang="ts">
import {IconCross} from "~/src/shared/ui/common";

const props = defineProps({
  show: Boolean,
  id: String,
})
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 340px;
  height: auto;
  margin: auto;
  padding: 32px 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-default-button {
  position: fixed;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);}
</style>