<script setup lang='ts'>
import { useDemoStore } from '@/store'

const demoStore = useDemoStore()

const myRef = ref(3)
const doubleCount = computed(() => demoStore.doubleCount)
const counter = demoStore.counter
</script>

<template>
  <div class="card">
    <h5>Store Demo</h5>
    <p class="text-xl pb-4">
      Example of Pinia Store !
    </p>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2">
        ID: {{ demoStore.$id }}
      </div>
      <div>myRef Value</div>
      <div>{{ myRef }}</div>
      <div>Pinia State counter</div>
      <div>{{ demoStore.counter }}</div>
      <div>Pinia getter doubleCount</div>
      <div>{{ doubleCount }}</div>
      <div>counter * myRef</div>
      <div>{{ counter * myRef }}</div>
    </div>
  </div>
</template>

<style scoped></style>
