<script setup lang='ts'>
const { d, t, n } = useI18n()
const testDate = new Date()
const testNumber = 42.4242
</script>

<template>
  <div class="card">
    <h2>Localization</h2>
    Switch Locale to
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ t(`lang.${locale}`) }}
        </option>
      </select>
    </div>
    <p>{{ t('save') }}</p>
    <p>{{ d(testDate, 'shortshort') }}</p>
    <p>{{ n(testNumber, 'currency') }}</p>
  </div>
</template>

<style scoped></style>
