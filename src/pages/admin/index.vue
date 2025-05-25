<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <div class="px-4 py-12 flex min-h-screen items-center justify-center lg:px-8 sm:px-6">
    <div class="max-w-md w-full space-y-8">
      <h5>Restricted Admin Area</h5>
      <p>Some restricted content ....</p>
      <Button label="Logout" @click="logout" />
    </div>
  </div>
</template>

<style scoped></style>
