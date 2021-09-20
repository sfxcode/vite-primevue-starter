<template>
  <main class="px-4 py-10 text-center text-teal-700 text-8xl">
    <div>
      <p class="text-8xl text-red-600">
        <i-codicon-error class="inline-block"/>
      </p>
    </div>
    <router-view/>
  </main>
  <Footer footer-text="[404 Layout]"/>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import {useLogger} from "vue-logger-plugin";

const log = useLogger()

log.debug(log)

</script>
