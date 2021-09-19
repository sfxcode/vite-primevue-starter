<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view/>
    <Footer/>
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Error Layout]
    </div>
    <Footer footer-text="[Error Layout]"/>
  </main>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";

</script>
