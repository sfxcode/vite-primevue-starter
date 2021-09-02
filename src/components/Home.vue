<template>

  <div class="surface-0 text-center">
    <div class="mb-3 font-bold text-4xl">
      <span class="text-green-600">PrimeVue </span>
      <span class="text-blue-400"> & TypeScript</span>
      <span class="text-blue-600"> & Vite</span>
    </div>
    <h2 class="text-2xl pb-2">Starter for Vue.js Development.</h2>
    <div class="grid">
      <AdvertiseBox header="VUE 3.2.x" icon="pi-check-circle">

      </AdvertiseBox>


      <AdvertiseBox header="VITE 2.x" icon="pi-check-circle"/>
      <AdvertiseBox header="PrimeVue 3.6.0" icon="pi-check-circle"/>
      <AdvertiseBox header="PrimeFlex 3.x included" icon="pi-check-circle"/>
      <AdvertiseBox header="PrimeIcons 2.x included" icon="pi-check-circle"/>
      <AdvertiseBox header="Vue Router 4.x" icon="pi-check-circle"/>
      <AdvertiseBox header="Pinia Store 2.x" icon="pi-check-circle"/>
      <AdvertiseBox header="Script Setup" icon="pi-check-circle"/>
      <AdvertiseBox header="PrimeBlocks Example" icon="pi-check-circle"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdvertiseBox from '../widgets/AdvertiseBox.vue';

</script>


<style scoped></style>
