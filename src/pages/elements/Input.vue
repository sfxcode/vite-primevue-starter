<script setup lang='ts'>
import { useToast } from 'primevue/usetoast'
import { useConfirm } from 'primevue/useconfirm'

// eslint-disable-next-line import/no-named-as-default
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
const toast = useToast()
const confirm = useConfirm()

const state = reactive({
  firstName: 'Tim',
  lastName: 'Sample',
  contact: {
    email: 'tim@sfxcode.com',
  },
})

const rules = {
  firstName: { required }, // Matches state.firstName
  lastName: { required }, // Matches state.lastName
  contact: {
    email: { required, email }, // Matches state.contact.email
  },
}
const v$ = useVuelidate(rules, state)

function reset(event: any) {
  confirm.require({
    target: event.currentTarget,
    message: 'Reset Text ?',
    icon: 'pi pi-info-circle',
    acceptClass: 'p-button-danger',
    accept: () => {
      state.contact.email = 'tim@sfxcode.com'
      toast.add({ severity: 'info', summary: 'Success', detail: 'Reset finished ...', life: 3000 })
    },
    reject: () => {
      toast.add({
        severity: 'info',
        summary: 'Action cancelled',
        detail: 'Nothing has changed ...',
        life: 3000,
      })
    },
  })
}

</script>

<template>
  <div class="card">
    <h5>InputText Example (with Vuelidate ...)</h5>
    <ConfirmPopup class="shadow" />
    <Toast />
    <InputText v-model="v$.contact.email.$model" />
    <Button label="Reset" class="ml-2" @click="reset($event)" />
    <div v-if="v$.contact.email.$error" class="mt-4">
      <span v-for="(error, index) of v$.contact.email.$errors" id="name-error" :key="index" class="p-error text-xl">
        {{ error.$message }}
      </span>
    </div>
    <h5 class="font-bold text-2xl text-green-600 mt-4">
      {{ state.contact.email }}
    </h5>
  </div>
</template>

<style scoped></style>
