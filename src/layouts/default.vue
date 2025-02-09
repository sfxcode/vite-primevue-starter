<script setup lang='ts'>
import { stateStore } from '@/store/state'
</script>

<template>
  <div class="">
    <ConfirmDialog />
    <Toast />
    <AppSidebar />
    <div id="workspace" :class="[{ collapsed: stateStore.collapsed }, { mobile: stateStore.isOnMobile }]">
      <AppTopbar />
      <div class="m-1 mt-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
