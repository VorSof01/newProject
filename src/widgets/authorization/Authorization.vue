<script setup>

import {LoginPass} from "~/src/features/authorization/log-in";
const emit = defineEmits(['update:to-reset'])
const onToResetPassword = () => {
  emit('to-reset')
}
</script>

<template>
  <LoginPass
      @to-reset-password="onToResetPassword"
  />
</template>
<style scoped>
input:focus::placeholder {
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: 0.2px;
  transform: translateY(-16px);
}
.bt-text {
  color: #434FBA;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.input-wrap{
  @apply mt-2;
  position: relative;
  .password_btn{
    position: absolute;
    top:17px;
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
  line-height: 14px;
  letter-spacing: 0.2px;
}
</style>