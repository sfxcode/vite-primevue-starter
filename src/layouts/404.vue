
<template>
  <main class="px-4 py-10 text-center text-teal-700">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <router-view />
  </main>
  <Footer footer-text="[404 Layout]"/>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>
