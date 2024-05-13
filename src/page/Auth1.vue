<template>
  <authorization/>
</template>

<script setup>
import {Authorization} from "~/src/widgets/authorization/index.js";
</script>

<style>
input:focus::placeholder {
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: 0.2px;
  transform: translateY(-16px);
}
</style>
