<template>
  <div id="bar"/>
  <router-view/>
</template>

<script setup lang="ts">

useHead({
  title: "Vite PrimeVue Starter",
  meta: [
    {
      name: "description",
      content: "PrimeVue Starter starter for vue and vite",
    },
  ],
})


</script>

<style lang="scss">
@import 'App.scss';
</style>
