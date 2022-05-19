<script setup lang='ts'>
const props = defineProps<{
  header: String
  icon: String
  color?: String
}>()
</script>

<template>
  <div class="">
    <span class="p-3 shadow-2 mb-1 inline-block" style="border-radius: 10px">
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
