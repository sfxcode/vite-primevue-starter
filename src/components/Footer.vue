<template>
  <div class="mt-5 mx-auto text-center opacity-25 text-sm">
    {{ footerText }}
  </div>
</template>


<script setup lang="ts">

const props = defineProps<{
  footerText: String,
}>()

</script>

<style scoped>

</style>
