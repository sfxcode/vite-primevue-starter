<template>
  <div class=''>
            <span class='p-3 shadow-2 mb-1 inline-block' style='border-radius: 10px'>
      <div :class="'i-mdi-check text-4xl text-' + color" />
            </span>
    <div :class="'header-text mb-3 font-medium text-' + color">{{ header }}</div>
    <div class='text-xs '>
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>

const props = defineProps<{
  header: String,
  icon: String,
  color?: String
}>();

</script>

<style scoped>

</style>
