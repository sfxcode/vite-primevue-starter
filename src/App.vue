<script setup lang='ts'>
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
@use 'App.scss';
</style>
