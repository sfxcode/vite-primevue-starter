<template>
  <main class="">
    <div>
      <TabMenu :model="tabs"/>
    </div>
    <div class="p-2">
      <router-view />
    </div>
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div>
  </main>
</template>

<script setup lang="ts">

const tabs = computed(() => [
  {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
  {label: 'Store', icon: 'pi pi-fw pi-calendar', to: '/store'},
  {label: 'Blocks', icon: 'pi pi-fw pi-pencil', to: '/ui/blocks'},
  {label: 'Icons', icon: 'pi pi-fw pi-image', to: '/ui/icons'},
  {label: 'Tailwind', icon: 'pi pi-fw pi-calendar', to: '/ui/tailwind'},
  {label: 'Blueprint', icon: 'pi pi-fw pi-cog', to: '/templates/blueprint'},
]);

</script>
