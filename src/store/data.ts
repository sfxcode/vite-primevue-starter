import { consola } from 'consola'
import { acceptHMRUpdate, defineStore } from 'pinia'

const version = ref(import.meta.env.VITE_APP_VERSION)

export const useDataStore = defineStore('data', {
  state: () => ({
    appVersion: version,
    products: [],
  }),
  actions: {
    async initData() {
      if (this.products.length === 0) {
        consola.debug('fetching data ...')
        await fetch('/data/customers-medium.json').then(res => res.json()).then((d) => {
          this.products = d.data
        }).catch(error => consola.error(error))
      }
    },
  },

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
