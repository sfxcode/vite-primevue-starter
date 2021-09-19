<template>
  <main class="">
    <div>
      <TabMenu :model="tabs"/>
    </div>
    <div class="p-2">
      <router-view />
    </div>
  </main>
  <Footer footer-text="[Default Layout]"/>
</template>

<script setup lang="ts">

import Footer from "@/components/Footer.vue";

const tabs = computed(() => [
  {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
  {label: 'PrimeVue', icon: 'pi pi-fw pi-vue', to: '/elements/input'},
  {label: 'Store', icon: 'pi pi-fw pi-calendar', to: '/store'},
  {label: 'Blocks', icon: 'pi pi-fw pi-pencil', to: '/ui/blocks'},
  {label: 'Icons', icon: 'pi pi-fw pi-image', to: '/ui/icons'},
  {label: 'Tailwind', icon: 'pi pi-fw pi-calendar', to: '/ui/tailwind'},
  {label: 'Blueprint', icon: 'pi pi-fw pi-cog', to: '/templates/blueprint'},
]);

</script>
