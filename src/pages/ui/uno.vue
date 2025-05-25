<script setup lang='ts'>
const isDevelopmentMode = process.env.NODE_ENV?.indexOf('dev') !== -1
</script>

<template>
  <div class="card">
    <h5>UnoCSS</h5>
    <div text-center flex h-full select-none all:transition-400>
      <div ma>
        <div animate-5s text-5xl fw100 animate-bounce-alt animate-count-infinite>
          unocss
        </div>
        <div text-lg fw300 m1 op30>
          The instant on-demand Atomic CSS engine.
        </div>
        <div text-2xl m2 op30 flex justify-center hover="op80">
          <a
            i-mdi-github-circle
            text-inherit
            href="https://github.com/antfu/unocss"
            target="_blank"
          />
        </div>
      </div>
    </div>
    <div fw300 text-center op30 bottom-5 left-0 right-0>
      on-demand · instant · fully customizable
    </div>

    <div v-if="isDevelopmentMode">
      <h4 pt-10>
        Inspector
      </h4>
      <div pb-4>
        <span>Only visible in Development mode - click info icon below</span>
      </div>
      <a href="../__unocss" target="_blank">
        <div class="i-mdi-information text-green-600-500-500 text-4xl" />
      </a>
      <article class="prose-truegray text-base pt-4 prose xl:text-xl">
        View, play and analyse rules and setup ...
      </article>
    </div>
  </div>
</template>

<style scoped></style>
