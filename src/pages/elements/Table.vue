<script setup lang='ts'>
import consola from 'consola'

import { FilterMatchMode } from 'primevue/api'
import { useDataStore } from '@/store/data'
import useDataTable from '@/composables/primevue/useDataTable'

const dataStore = useDataStore()
const { tableData, filters, dataTableRef, exportCSV } = useDataTable()

filters.value = {
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  code: { value: null, matchMode: FilterMatchMode.CONTAINS },
  inventoryStatus: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
}

function updateTableData() {
  tableData.value = dataStore.products as Array<any>
}

// mounted
onMounted(async () => {
  await dataStore.$load({ name: 'app-data' }).catch((error: any) => consola.error(error))

  consola.debug(dataStore.products)

  updateTableData()
  consola.debug(tableData)
})
</script>

<template>
  <div class="card">
    <h5>DataTable Example</h5>
    <DataTable
      ref="dataTableRef" v-model:filters="filters" :value="tableData"
      data-key="name" :global-filter-fields="['name', 'code', 'inventoryStatus']"
      striped-rows
      :paginator="true" :rows="10"
      paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rows-per-page-options="[10, 20, 50]"
      current-page-report-template="Showing {first} to {last} of {totalRecords}"
    >
      <template #header>
        <div class="datatable-header h-10">
          <div class="flex justify-between">
            <span class="text-xl">Products</span>
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
      <Column field="code" header="Code" :sortable="true" />
      <Column field="price" header="Price" :sortable="true" />
      <Column field="inventoryStatus" header="Status" :sortable="true" />
      <template #footer>
        <div class="h-12">
          <span>{{ tableData ? tableData.length : 0 }} Products</span>
          <Button class="float-right" icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
        </div>
      </template>
      <template #paginatorRight />
    </DataTable>
  </div>
</template>

<style scoped></style>
