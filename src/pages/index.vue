<template>

  <div class='surface-0 text-center'>
    <div class='mb-3 font-bold text-4xl'>
      <span class='text-green-600'>PrimeVue </span>
      <span class='text-blue-400'> & TypeScript</span>
      <span class='text-blue-600'> & Vite</span>
    </div>
    <h2 class='text-2xl pb-6'>Starter for Vue.js Development.</h2>
    <div class='flex justify-content-start flex-wrap'>
      <AdvertiseBox header='VUE 3.2' icon='pi-check-circle' color='green-600'>
        VueUse & VueUse Head included
      </AdvertiseBox>
      <AdvertiseBox header='Script Setup' icon='pi-check-circle' color='green-600'>
        Reduce a lot of boilerplate code
      </AdvertiseBox>
      <AdvertiseBox header='Typescript 4.5' icon='pi-check-circle' color='blue-400'>
        Typesafe by default
      </AdvertiseBox>
      <AdvertiseBox header='Vite 2' icon='pi-check-circle' color='blue-600'>
        Vite Plugins like ViteIcons, PurgeIcons, ...
      </AdvertiseBox>
      <AdvertiseBox header='Vite Pages' icon='pi-check-circle' color='blue-600'>
        Routing by File/Folder & Vite Markdown included
      </AdvertiseBox>
      <AdvertiseBox header='Vite Layouts' icon='pi-check-circle' color='blue-600'>
        Layouts like nuxt layout templates
      </AdvertiseBox>

      <AdvertiseBox header='PrimeVue 3.10' icon='pi-check-circle' color='green-600'>
        Excellent Component Library for VUE
      </AdvertiseBox>
      <AdvertiseBox header='PrimeVue Theme and Layout' icon='pi-check-circle' color='green-600'>
        Free Sakai theme (PrimeIcons 2 included)
      </AdvertiseBox>
      <AdvertiseBox header='PrimeFlex 3.1.0' icon='pi-check-circle' color='green-600'>
        Good combination with PrimeVue Themes / Templates
      </AdvertiseBox>
      <AdvertiseBox header='Pinia Store 2' icon='pi-check-circle' color='yellow-400'>
        Replacement / Alternative for VUEX Store
      </AdvertiseBox>
      <AdvertiseBox header='Tailwind CSS 3' icon='pi-check-circle' color='blue-400'>
        Hero Icons included (ViteIcons)
      </AdvertiseBox>
    </div>
  </div>
</template>

<script setup lang='ts'>
import AdvertiseBox from '@/components/AdvertiseBox.vue';</script>

<style scoped></style>
