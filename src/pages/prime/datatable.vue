<script setup lang='ts'>
import { FilterMatchMode } from '@primevue/core/api'
import { usePrimeDataTable } from '@/composables/primeDataTable'
import { useDataStore } from '@/store'

const { tableData, filters, dataTableRef, exportCSV } = usePrimeDataTable()

filters.value = {
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  company: { value: null, matchMode: FilterMatchMode.CONTAINS },
  status: { value: null, matchMode: FilterMatchMode.CONTAINS },
}

const dataStore = useDataStore()

onMounted(async () => {
  await dataStore.initData()
  tableData.value = dataStore.products
})
</script>

<template>
  <div class="card">
    <h2>DataTable Example</h2>
    <DataTable
      ref="dataTableRef"
      v-model:filters="filters"
      :value="tableData"
      data-key="name"
      :global-filter-fields="['name', 'company', 'status']"
      striped-rows
      :paginator="true"
      :rows="8"
      paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rows-per-page-options="[8, 15, 50]"
      current-page-report-template="Showing {first} to {last} of {totalRecords}"
    >
      <template #header>
        <div class="datatable-header">
          <div class="flex justify-between">
            <span class="text-xl">Customers</span>
            <IconField icon-position="left">
              <InputIcon class="pi pi-search" />
              <InputText v-model="filters.global.value" placeholder="Global Search" />
            </IconField>
          </div>
        </div>
      </template>
      <template #empty>
        No Data Found.
      </template>
      <Column field="name" header="Name" :sortable="true" />
      <Column field="company" header="Company" :sortable="true" />
      <Column field="status" header="Status" :sortable="true" />
      <template #footer>
        <div class="flex justify-between">
          <span class="text-2xl">{{ tableData ? tableData.length : 0 }} Customers found</span>
          <Button icon="pi pi-external-link" label="Export" @click="exportCSV" />
        </div>
      </template>
      <template #paginatorRight />
    </DataTable>
  </div>
</template>

<style scoped></style>
