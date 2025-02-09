<script setup lang='ts'>
import { useStateStore } from '@/store/state'

const { collapsed, isOnMobile } = useStateStore()
</script>

<template>
  <div class="">
    <ConfirmDialog />
    <Toast />
    <AppSidebar />
    <div id="workspace" :class="[{ collapsed }, { mobile: isOnMobile }]">
      <AppTopbar />
      <div class="m-1 mt-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
