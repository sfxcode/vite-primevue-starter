<template>
  <div class='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
    <div class='max-w-md w-full space-y-8'>
      <h5>Restricted Admin Area</h5>
      <p>Some restricted content ....</p>
      <Button @click='logout' label='Logout' />
    </div>
  </div>

</template>

<script setup lang='ts'>
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

function logout() {
  auth.logout();
  router.push('/');
}

</script>

<style scoped></style>
