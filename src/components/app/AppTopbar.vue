<script setup lang='ts'>
import { useThemeStore } from '@/store'

const emit = defineEmits(['menuToggle', 'topbarMenuToggle'])

const themeStore = useThemeStore()
const op = ref<any>(null)

function toggle(event: any) {
  op.value.toggle(event)
}

function redirectToGithub(event: any) {
  window.open('https://github.com/sfxcode/vite-primevue-starter', '_blank')
}

function onMenuToggle(event: any) {
  emit('menuToggle', event)
}

function onTopbarMenuToggle(event: any) {
  emit('topbarMenuToggle', event)
}
</script>

<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <span>Vite PrimeVue Starter</span>
    </router-link>
    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
      <i class="pi pi-bars" />
    </button>

    <button
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        toggleClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
      class="p-link layout-topbar-menu-button layout-topbar-button"
    >
      <i class="pi pi-ellipsis-v" />
    </button>

    <ul class="layout-topbar-menu hidden origin-top lg:flex">
      <li>
        <button class="p-link layout-topbar-button" @click="toggle">
          <i class="pi pi-cog" />
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user" />
          <span>Profile</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button" @click="redirectToGithub">
          <i class="pi pi-github" />
          <span>Github</span>
        </button>
      </li>
    </ul>
    <OverlayPanel id="overlay_panel" ref="op" append-to="body" style="width: 200px">
      <div class="field-radiobutton">
        <RadioButton
          id="lara-dark"
          v-model="themeStore.themeName"
          name="layoutColorMode"
          value="lara-dark"
          @change="themeStore.setTheme('lara-dark')"
        />
        <label>Lara Dark</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          id="lara-light"
          v-model="themeStore.themeName"
          name="layoutColorMode"
          value="lara-light"
          @change="themeStore.setTheme('lara-light')"
        />
        <label>Lara Light</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          id="aura-dark"
          v-model="themeStore.themeName"
          name="layoutColorMode"
          value="aura-dark"
          @change="themeStore.setTheme('aura-dark')"
        />
        <label>Aura Dark</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          id="aura-light"
          v-model="themeStore.themeName"
          name="layoutColorMode"
          value="aura-light"
          @change="themeStore.setTheme('aura-light')"
        />
        <label>Aura Light</label>
      </div>

      <h6>Primary Color</h6>
      <div class="flex">
        <div
          style="width:2rem;height:2rem;border-radius:6px; "
          class="mr-3 cursor-pointer bg-green-500"
          @click="themeStore.setColor('green')"
        />
        <div
          style="width:2rem;height:2rem;border-radius:6px"
          class="mr-3 cursor-pointer bg-blue-500"
          @click="themeStore.setColor('blue')"
        />
        <div
          style="width:2rem;height:2rem;border-radius:6px;"
          class="mr-3 cursor-pointer bg-teal-500"
          @click="themeStore.setColor('teal')"
        />
        <div
          style="width:2rem;height:2rem;border-radius:6px"
          class="mr-3 cursor-pointer bg-purple-500"
          @click="themeStore.setColor('purple')"
        />
        <div
          style="width:2rem;height:2rem;border-radius:6px"
          class="mr-3 cursor-pointer bg-amber-500"
          @click="themeStore.setColor('amber')"
        />
      </div>
    </OverlayPanel>
  </div>
</template>

<style scoped>
.hidden {
  display: none !important;
}

@media (min-width: 1024px) {
  .lg\:flex {
    display: flex !important;
  }
}
</style>
