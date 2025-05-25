<script setup lang='ts'>
const version = ref(import.meta.env.VITE_APP_VERSION)
</script>

<template>
  <div class="layout-footer mt-4">
    <span class="font-medium ml-2">Vite PrimeVue Starter - {{ version }}</span>
  </div>
</template>

<style scoped>

</style>
