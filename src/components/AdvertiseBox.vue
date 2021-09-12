<template>
  <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block" style="border-radius: 10px">
                <i :class="'pi ' + icon + ' text-3xl text-' + color"></i>
            </span>
    <div :class="'header-text mb-3 font-medium text-' + color">{{ header }}</div>
    <div class="text-xs text-gray-600">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  header: String,
  icon:String,
  color:String
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue-500'
})

</script>

<style scoped>

</style>
