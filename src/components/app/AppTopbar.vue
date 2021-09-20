<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <span>Vite PrimeVue Starter</span>
    </router-link>
    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
      <i class="pi pi-bars"></i>
    </button>

    <button class="p-link layout-topbar-menu-button layout-topbar-button"
            v-styleclass="{ selector: '@next', enterActiveClass: 'scalein',
			toggleClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
      <i class="pi pi-ellipsis-v"></i>
    </button>

    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button" @click="toggle" >
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </button>
      </li>
    </ul>
    <OverlayPanel ref="op" appendTo="body" id="overlay_panel" style="width: 200px">
      <div class="field-radiobutton">
        <RadioButton id="saga" name="layoutColorMode" value="saga" v-model="themeStore.themeName"
                     @change="themeStore.setLight()"/>
        <label>Light</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton id="vela" name="layoutColorMode" value="vela" v-model="themeStore.themeName"
                     @change="themeStore.setDim()"/>
        <label>Dim</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton id="arya" name="layoutColorMode" value="arya" v-model="themeStore.themeName"
                     @change="themeStore.setDark()"/>
        <label>Dark</label>
      </div>

      <h6>Primary Color</h6>
      <div class="flex">
        <div style="width:2rem;height:2rem;border-radius:6px" class="bg-blue-500 mr-3 cursor-pointer" @click="themeStore.setColor('blue')"></div>
        <div style="width:2rem;height:2rem;border-radius:6px" class="bg-green-500 mr-3 cursor-pointer" @click="themeStore.setColor('green')"></div>
        <div style="width:2rem;height:2rem;border-radius:6px" class="bg-yellow-300 mr-3 cursor-pointer" @click="themeStore.setColor('orange')"></div>
        <div style="width:2rem;height:2rem;border-radius:6px" class="bg-purple-500 cursor-pointer" @click="themeStore.setColor('purple')"></div>
      </div>

    </OverlayPanel>
  </div>
</template>

<script setup lang="ts">

import {useThemeStore} from "@/store";

const themeStore = useThemeStore();
const op = ref<any>(null)


function toggle(event:any) {
  console.log(op.value);
  op.value.toggle(event);
}

const emit = defineEmits(['menu-toggle', 'topbar-menu-toggle']);

function onMenuToggle(event:any) {
  emit('menu-toggle', event);
}

function onTopbarMenuToggle(event:any) {
  emit('topbar-menu-toggle', event);
}

</script>
