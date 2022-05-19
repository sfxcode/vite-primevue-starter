<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <h5>Restricted Admin Area</h5>
      <p>Some restricted content ....</p>
      <Button label="Logout" @click="logout" />
    </div>
  </div>
</template>

<style scoped></style>
