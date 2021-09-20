<template>
  <h5 class="font-bold text-2xl mb-4 text-blue-600">Input Text</h5>
  <InputText v-model="textValue"/>
  <Button label="Clear" v-on:click="clear" class="ml-2"/>

  <h5 class="font-bold text-2xl text-green-600 mt-4">{{ textValue }}</h5>

</template>

<script setup lang="ts">

const textValue = ref('Some Text')

function clear() {
  textValue.value = '';
}

</script>

<style scoped></style>
