<template>
  <div class='layout-footer'>
    <span class='font-medium ml-2'>Vite PrimeVue Starter - {{ version }}</span>
  </div>
</template>

<script setup lang='ts'>

const version = ref(import.meta.env.VITE_APP_VERSION)
</script>

<style scoped>

</style>
