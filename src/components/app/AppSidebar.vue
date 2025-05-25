<script setup lang='ts'>
import { useNavigationMenu } from '@/composables/navigation'
import { stateStore } from '@/store/state'

const version = ref(import.meta.env.VITE_APP_VERSION)

const { menu } = useNavigationMenu()

function onResize() {
  if (window.innerWidth <= 980) {
    stateStore.setCollapsed(true)
    stateStore.setIsOnMobile(true)
  }
  else {
    stateStore.setCollapsed(false)
    stateStore.setIsOnMobile(false)
  }
}

function onToggleCollapse() {
}

function onItemClick() {
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
</script>

<template>
  <div>
    <sidebar-menu
      v-model:collapsed="stateStore.collapsed"
      :menu="menu"
      :show-one-child="true"
      width="200px"
      width-collapsed="60px"
      @update:collapsed="onToggleCollapse"
      @item-click="onItemClick"
    >
      <template #header>
        <div v-if="!stateStore.collapsed" class="flex">
          <img class="m-6 w-8" src="/primevue-logo.webp" alt="PrimeVue">
          <img class="m-6 w-8" src="/nuxt-logo.svg" alt="Nuxt">
        </div>
        <div v-else>
          <img class="ml-4 mt-6 w-6" src="/primevue-logo.webp" alt="PrimeVue">
          <img class="ml-4 mt-2 w-6" src="/nuxt-logo.svg" alt="Nuxt">
        </div>
      </template>
      <template #footer>
        <div class="text-xs text-color-primary m-2 text-center">
          <span v-if="!stateStore.collapsed">PrimeVue Vite Starter {{ version }}</span>
          <span v-if="stateStore.collapsed">{{ version }}</span>
        </div>
      </template>
    </sidebar-menu>
    <div
      v-if="stateStore.isOnMobile && !stateStore.collapsed"
      class="sidebar-overlay"
      @click="stateStore.collapsed = true"
    />
  </div>
</template>

<style lang="scss">
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
</style>
