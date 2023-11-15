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
      children: 'Login Area'
    },
    {
      $formkit: 'primeInputText',
      name: 'userId',
      label: 'Email / User ID',
      validation: 'required|email'
    },
    {
      $formkit: 'primeInputText',
      name: 'password',
      label: 'Passwort',
      validation: 'required|length:3'
    }
  ])

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
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen op80">
    <div class="card md:1/2 md:ml-80 w-100">
      <div class="flex justify-center">
        <img class="w-8/12 mt-4" src="/assets/logo.png" alt="Logo">
      </div>
      <FormKit
        id="newRoleForm"
        v-model="data"
        type="form"
        :submit-attrs="{ inputClass: 'p-button p-component' }"
        submit-label="Anmelden"
        @submit="actionLogin"
      >
        <FormKitSchema :schema="schema" :data="data" />
      </FormKit>
      <div v-if="errorMessage.length > 0" class="mt-2 m-4 text-2xl font-medium p-error">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
