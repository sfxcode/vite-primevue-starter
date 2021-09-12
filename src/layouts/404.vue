<script setup lang="ts">
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <router-view />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [404 Layout]
    </div>
  </main>
</template>
