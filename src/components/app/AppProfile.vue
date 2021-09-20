<template>
  <div class="layout-profile">
    <div>
    </div>
    <button class="p-link layout-profile-link" @click="onClick">
      <span class="username">Claire Williams</span>
      <i class="pi pi-fw pi-cog"></i>
    </button>
    <transition name="layout-submenu-wrapper">
      <ul v-show="expanded">
        <li>
          <button class="p-link"><i class="pi pi-fw pi-user"></i><span>Account</span></button>
        </li>
        <li>
          <button class="p-link"><i class="pi pi-fw pi-inbox"></i><span>Notifications</span><span
              class="menuitem-badge">2</span></button>
        </li>
        <li>
          <button class="p-link"><i class="pi pi-fw pi-power-off"></i><span>Logout</span></button>
        </li>
      </ul>
    </transition>

  </div>
</template>

<script setup lang="ts">

const expanded = ref(false);

function onClick(event: any) {
  expanded.value = !expanded.value;
  event.preventDefault();
}

</script>

<style scoped>

</style>
