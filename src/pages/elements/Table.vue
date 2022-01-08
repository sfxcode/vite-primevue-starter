<template>

  <div class='card'>
    <DataTable :value='tableData' ref='dataTableRef' dataKey='name'
               v-model:filters='filters' :globalFilterFields="['name','code','inventoryStatus']"
               stripedRows
               :paginator='true' :rows='10'
               paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
               :rowsPerPageOptions='[10,20,50]'
               currentPageReportTemplate='Showing {first} to {last} of {totalRecords}'>
      <template #header>
        <div class='datatable-header'>
          <span>Products</span>
          <span class='p-input-icon-left' float-right>
                                <i class='pi pi-search' />
                                <InputText v-model="filters['global'].value" placeholder='Globale Suche' />
              </span>
        </div>
      </template>
      <template #empty>
        No Data Found.
      </template>
      <Column field='name' header='Name' :sortable='true' />
      <Column field='code' header='Code' :sortable='true' />
      <Column field='price' header='Price' :sortable='true' />
      <Column field='inventoryStatus' header='Status' :sortable='true' />
      <template #footer>
        <span>{{ tableData ? tableData.length : 0 }} Products</span>
        <Button class='float-right' icon="pi pi-external-link" label="Export" @click="exportCSV($event)"/>
      </template>
      <template #paginatorRight>

      </template>
    </DataTable>
  </div>
</template>

<script setup lang='ts'>
import { useDataStore } from '@/store/data';
import useDataTable from '@/composables/primevue/useDataTable';
import { FilterMatchMode } from 'primevue/api';

const dataStore = useDataStore();
const { tableData, filters, dataTableRef, exportCSV } = useDataTable();

filters.value = {
  'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'code': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'inventoryStatus': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
};

function updateTableData() {
  tableData.value = dataStore.products as Array<any>;
}

// mounted
onMounted(async () => {
  await dataStore.$load({ name: 'app-data' }).catch((error: any) => console.log(error));

  console.log(dataStore.products);

  updateTableData();
  console.log(tableData);

});


</script>

<style scoped></style>
