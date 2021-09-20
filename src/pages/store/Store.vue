<template>
  <h5 class="font-bold text-2xl mb-4 text-blue-600">Pinia Store</h5>
  <p class="text-xl pb-4">Example of Pinia Store !</p>
  <div class="grid grid-cols-2  gap-4">
    <div class="col-span-2">Mainstore</div>
    <div>myRef Value</div>
    <div>{{ myRef }}</div>
    <div>Pinia State counter</div>
    <div>{{ counter }}</div>
    <div>Pinia getter doubleCount</div>
    <div>{{ doubleCount }}</div>
    <div>counter * myRef</div>
    <div>{{ counter * myRef }}</div>
  </div>
</template>

<script setup lang="ts">

import {useMainStore} from "@/store";

const mainStore = useMainStore();

const myRef = ref(3)
const doubleCount = computed(() => mainStore.doubleCount)
const counter = mainStore.counter;

</script>

<style scoped></style>
