<template>

  <ConfirmPopup class="shadow"></ConfirmPopup>
  <Toast/>
  <h5 class='font-bold text-2xl mb-4 text-blue-600'>Input Text</h5>
  <InputText v-model='textValue' />
  <Button label='Clear' v-on:click='clear($event)' class='ml-2' />

  <h5 class='font-bold text-2xl text-green-600 mt-4'>{{ textValue }}</h5>

</template>

<script setup lang='ts'>
import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";

const toast = useToast();
const confirm = useConfirm();

const textValue = ref('Some Text');

function clear (event: any) {
  confirm.require({
    target: event.currentTarget,
    message: 'Delete Text ?',
    icon: 'pi pi-info-circle',
    acceptClass: 'p-button-danger',
    accept: () => {
      textValue.value = '';
      toast.add({severity: 'info', summary: 'Success', detail: 'Everything is deleted ...', life: 3000});

    },
    reject: () => {
      toast.add({
        severity: 'info',
        summary: 'Action cancelled',
        detail: 'Nothing has changed ...',
        life: 3000,
      });
    }
  });

}

</script>

<style scoped></style>
