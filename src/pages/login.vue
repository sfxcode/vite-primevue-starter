<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store'

const auth = useAuthStore()

const router = useRouter()

const data = ref({ userId: auth.email, password: '' })
const errorMessage = ref('')

const schema = reactive(
  [
    {
      $el: 'h3',
      children: 'Login Area',
    },
    {
      $formkit: 'primeInputText',
      name: 'userId',
      label: 'Email / User ID',
      validation: 'required|email',
    },
    {
      $formkit: 'primeInputText',
      name: 'password',
      label: 'Password (Use 1234)',
      validation: 'required|length:3',
    },
  ],
)

function actionLogin() {
  auth.login(data.value.password)
  if (auth.authentificated) {
    data.value.password = ''
    errorMessage.value = ''
    router.push('/admin')
  }
  else {
    data.value.password = ''
    errorMessage.value = 'Login Error - Try again'
  }
}
</script>

<template>
  <div class="mx-auto px-6 py-8 op80 flex flex-col items-center justify-center md:h-screen">
    <div class="card md:1/2 w-100 md:ml-80">
      <div class="flex justify-center">
        <img class="mt-4 w-8/12" src="/vue-logo.png" alt="Logo">
      </div>
      <FormKit
        id="newRoleForm"
        v-model="data"
        type="form"
        :submit-attrs="{ inputClass: 'p-button p-component' }"
        submit-label="Login"
        @submit="actionLogin"
      >
        <FormKitSchema :schema="schema" :data="data" />
      </FormKit>
      <div v-if="errorMessage.length > 0" class="p-error text-2xl font-medium m-4 mt-2">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
