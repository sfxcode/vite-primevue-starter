<template>

  <div class="surface-0 text-center">
    <div class="mb-3 font-bold text-4xl">
      <span class="text-green-600">PrimeVue </span>
      <span class="text-blue-400"> & TypeScript</span>
      <span class="text-blue-600"> & Vite</span>
    </div>
    <h2 class="text-2xl pb-2">Starter for Vue.js Development.</h2>
    <div class="grid">
      <AdvertiseBox header="VUE 3.2" icon="pi-check-circle" color="gray-700"/>
      <AdvertiseBox header="Vue Router 4" icon="pi-check-circle" color="gray-700"/>
      <AdvertiseBox header="Script Setup" icon="pi-check-circle" color="gray-700"/>
      <AdvertiseBox header="Typescript 4.3" icon="pi-check-circle" color="blue-600"/>
      <AdvertiseBox header="Vite 2" icon="pi-check-circle" color="blue-600"/>
      <AdvertiseBox header="Pinia Store 2" icon="pi-check-circle"/>
      <AdvertiseBox header="PrimeVue 3.7" icon="pi-check-circle" color="green-600"/>
      <AdvertiseBox header="PrimeFlex 3 included" icon="pi-check-circle" color="green-600"/>
      <AdvertiseBox header="PrimeIcons 2 included" icon="pi-check-circle" color="green-600"/>
      <AdvertiseBox header="PrimeBlocks Example" icon="pi-check-circle" color="green-600"/>
      <AdvertiseBox header="Tailwind CSS" icon="pi-check-circle"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdvertiseBox from '../widgets/AdvertiseBox.vue';

</script>


<style scoped></style>
