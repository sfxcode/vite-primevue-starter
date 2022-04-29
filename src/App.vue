<script setup lang='ts'>
import consola from 'consola'

import { useDataStore } from '@/store/data'

const dataStore = useDataStore()

onMounted(async () => {
  await dataStore.$load({ name: 'app-data' }).catch((error: any) => consola.log(error))
})

useHead({
  title: 'Vite PrimeVue Starter',
  meta: [
    {
      name: 'description',
      content: 'PrimeVue Starter starter for vue and vite',
    },
  ],
})

</script>

<template>
  <div id="bar" />
  <router-view />
</template>

<style lang='scss'>
@import 'App.scss';
</style>
