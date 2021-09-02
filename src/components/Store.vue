<template>
  <h5 class="font-bold text-2xl mb-4 text-blue-600">Pinia Store</h5>
  <p class="tw-text-xl tw-pb-4">Example of Pinia Store !</p>
  <div>Mainstore: {{ mainStore }}</div>
  <div>myRef Value: {{ myRef }}</div>
  <div>Pinia State counter: {{ counter }}</div>
  <div>Pinia getter doubleCount  {{ doubleCount }}</div>
  <div>counter * myRef: {{ counter * myRef }}</div>

</template>

<script setup lang="ts">

import {useMainStore} from "../store";
import {computed, ref} from "vue";

const mainStore = useMainStore();

const myRef = ref(3)
const doubleCount = computed(() => mainStore.doubleCount)
const counter = mainStore.counter;

</script>

<style scoped></style>
