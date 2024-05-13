<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
    <g clip-path="url(#clip0_3896_15226)">
      <circle cx="10" cy="10" r="10" :fill="props.fill"/>
      <path d="M9.99982 4.61597C9.05184 4.61597 8.19471 4.97122 7.58563 5.61683C6.97655 6.26245 6.67226 7.15515 6.741 8.11324C6.88041 10.0001 8.34229 11.5384 9.99982 11.5384C11.6574 11.5384 13.1163 10.0001 13.2586 8.11372C13.3298 7.16477 13.0279 6.28023 12.4087 5.6226C11.7972 4.97363 10.9416 4.61597 9.99982 4.61597Z" fill="white"/>
      <path d="M10 13C6.68629 13 4 14.7095 4 16.8182C4.58334 18.3334 6.66669 19.5834 10 19.5834C13.3333 19.5834 15.4167 18.3334 16 16.8182C16 14.7095 13.3137 13 10 13Z" fill="white"/>
      <circle cx="10" cy="10" r="9.5" :stroke="props.stroke"/>
    </g>
    <defs>
      <clipPath id="clip0_3896_15226">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
const props = defineProps({
  fill: String,
  stroke: String,
})
</script>

<style scoped>
</style>