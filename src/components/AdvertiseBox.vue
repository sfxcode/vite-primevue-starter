<script setup lang='ts'>
defineProps<{
  header: string
  icon: string
  color?: string
}>()
</script>

<template>
  <div class="">
    <span class="shadow-2 mb-1 p-3 inline-block" style="border-radius: 10px">
      <div :class="`i-mdi-check text-4xl text-${color}`" />
    </span>
    <div :class="`mb-3 text-2xl text-${color}`">
      {{ header }}
    </div>
    <div class="">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
