<template>
  <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                <i :class="'pi ' + icon + ' text-4xl text-blue-500'"></i>
            </span>
    <div class="header-text text-900 mb-3 font-medium">{{ header }}</div>
    <slot/>
  </div>
</template>

<script setup lang="ts">

defineProps({
  header: String,
  icon:String
})

</script>

<style scoped>

</style>
