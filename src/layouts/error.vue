<template>
  <main class="px-4 py-10 text-center text-red-600 text-6xl">
    <router-view/>
  </main>
  <Footer footer-text="[Error Layout]"/>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";</script>
