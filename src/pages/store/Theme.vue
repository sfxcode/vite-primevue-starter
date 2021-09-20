<template>
  <h5 class="font-bold text-2xl mb-4 text-blue-600">Pinia Store</h5>
  <div class="grid grid-cols-2  gap-4">
    <div class="col-span-2">Primevue Theme Store</div>
    <div>Theme Name</div>
    <div>{{ themeStore.themeName }}</div>

  </div>
</template>

<script setup lang="ts">

import {useThemeStore} from "@/store";

const themeStore = useThemeStore();
</script>

<style scoped></style>
