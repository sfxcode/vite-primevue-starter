<template>
  <div>
    <TabMenu :model="tabs"/>

  </div>
  <div class="p-2">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import { useHead } from "@vueuse/head"

useHead({
  title: "Vite PrimeVue Starter",
  meta: [
    {
      name: "description",
      content: "PrimeVue Starter starter for vue and vite",
    },
  ],
})

const tabs = computed(() => [
  {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
  {label: 'Blocks', icon: 'pi pi-fw pi-pencil', to: '/blocks'},
  {label: 'Store', icon: 'pi pi-fw pi-calendar', to: '/store'},
  {label: 'Tailwind', icon: 'pi pi-fw pi-calendar', to: '/tailwind'},
  {label: 'Blueprint', icon: 'pi pi-fw pi-cog', to: '/blueprint'},
]);

</script>


<style lang="scss">
@import 'App.scss';
</style>
