<script setup lang='ts'>
const expanded = ref(false)

function onClick(event: any) {
  expanded.value = !expanded.value
  event.preventDefault()
}
</script>

<template>
  <div class="layout-profile">
    <div />
    <button class="layout-profile-link p-link" @click="onClick">
      <span class="username">Claire Williams</span>
      <i class="pi pi-fw pi-cog" />
    </button>
    <transition name="layout-submenu-wrapper">
      <ul v-show="expanded">
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-user" /><span>Account</span>
          </button>
        </li>
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-inbox" /><span>Notifications</span><span
              class="menuitem-badge"
            >2</span>
          </button>
        </li>
        <li>
          <button class="p-link">
            <i class="pi pi-fw pi-power-off" /><span>Logout</span>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>

</style>
