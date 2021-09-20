<template>
  <div>
    {{ t('not_found') }}
  </div>
</template>

<script setup lang="ts">
const {t} = useI18n()
</script>

<route lang="yaml">
meta:
  layout: 404
</route>
