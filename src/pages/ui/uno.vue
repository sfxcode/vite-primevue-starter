<script setup lang='ts'>
const isDevelopmentMode = process.env.NODE_ENV?.indexOf('dev') !== -1
</script>

<template>
  <div class="card">
    <h5>UnoCSS</h5>
    <div h-full flex select-none text-center all:transition-400>
      <div ma>
        <div animate-5s animate-bounce-alt animate-count-infinite text-5xl fw100>
          unocss
        </div>
        <div m1 text-lg fw300 op30>
          The instant on-demand Atomic CSS engine.
        </div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a
            i-mdi-github-circle
            text-inherit
            href="https://github.com/antfu/unocss"
            target="_blank"
          />
        </div>
      </div>
    </div>
    <div bottom-5 left-0 right-0 text-center fw300 op30>
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
      <article class="pt-4 text-base prose prose-truegray xl:text-xl">
        View, play and analyse rules and setup ...
      </article>
    </div>
  </div>
</template>

<style scoped></style>
