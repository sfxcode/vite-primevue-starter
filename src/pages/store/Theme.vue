<template>
  <h5 class='tw-font-bold tw-text-2xl tw-mb-4 tw-text-blue-600'>Pinia Store</h5>
  <div class='tw-grid tw-grid-cols-2  tw-gap-4'>
    <div class='tw-col-span-2'>Primevue Theme Store</div>
    <div>Theme Name</div>
    <div>{{ themeStore.themeName }}</div>
    <div>Theme Color</div>
    <div>{{ themeStore.themeColor }}</div>

  </div>
</template>

<script setup lang='ts'>

import { useThemeStore } from '@/store';

const themeStore = useThemeStore();
</script>

<style scoped></style>
