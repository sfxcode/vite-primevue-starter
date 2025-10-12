<script setup lang='ts'>
import AdvertiseBox from '@/components/AdvertiseBox.vue'
</script>

<template>
  <div class="surface-0 text-center">
    <div class="text-4xl font-bold mb-3">
      <span class="text-green-600">PrimeVue </span>
      <span class="text-blue-400"> & TypeScript</span>
      <span class="text-blue-600"> & Vite</span>
    </div>
    <h2 class="text-2xl pb-6">
      Starter for Vue.js Development.
    </h2>
    <div class="gap-4 grid grid-cols-3">
      <AdvertiseBox header="VUE 3.5" icon="pi-check-circle" color="green-600">
        Composition Api
      </AdvertiseBox>
      <AdvertiseBox header="Script Setup" icon="pi-check-circle" color="green-600">
        Reduce a lot of boilerplate code
      </AdvertiseBox>
      <AdvertiseBox header="Pinia Store 2" icon="pi-check-circle" color="green-600">
        Replacement / Alternative for VUEX Store
      </AdvertiseBox>
      <AdvertiseBox header="Vite 7" icon="pi-check-circle" color="blue-600">
        Vite Plugins like ViteIcons, PurgeIcons, ... and Vitest
      </AdvertiseBox>
      <AdvertiseBox header="Vite Pages" icon="pi-check-circle" color="blue-600">
        Routing by File/Folder & Vite Markdown included
      </AdvertiseBox>
      <AdvertiseBox header="Vite Layouts" icon="pi-check-circle" color="blue-600">
        Layouts like nuxt layout templates
      </AdvertiseBox>
      <AdvertiseBox header="Typescript 5" icon="pi-check-circle" color="blue-400">
        Typesafe by default
      </AdvertiseBox>

      <AdvertiseBox header="PrimeVue 4.4.x" icon="pi-check-circle" color="green-600">
        Excellent Component Library for VUE
      </AdvertiseBox>
      <AdvertiseBox header="PrimeVue Theme and Layout" icon="pi-check-circle" color="green-600">
        Free Sakai theme (PrimeIcons 2 included)
      </AdvertiseBox>
      <AdvertiseBox header="Uno CSS" icon="pi-check-circle" color="blue-400">
        The instant on-demand Atomic CSS engine
      </AdvertiseBox>
      <AdvertiseBox header="Formkit 1.6" icon="pi-check-circle" color="green-600">
        Formkit PrimeVue Example included
      </AdvertiseBox>
      <AdvertiseBox header="VueUse" icon="pi-check-circle" color="green-600">
        VueUse Head included
      </AdvertiseBox>
    </div>
  </div>
</template>

<style scoped></style>
