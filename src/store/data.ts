import { defineCachedStore } from 'pinia-cached-store';

export const useDataStore = defineCachedStore({
    id: 'data',

    state: () => ({
      appVersion: import.meta.env.VITE_APP_VERSION as string | undefined,
      customers: [],
      products: [],
    }),

    // @ts-ignore
    async refresh({ name }: { name: string }) {

      console.debug('fetching data ...');

      await fetch('/data/customers-medium.json').then(res => res.json()).then(d => {
        this.customers = d.data;
      })
        .catch((error) => console.log(error));


      await fetch('/data/products.json').then(res => res.json()).then(d => {
        this.products = d.data;
      })
        .catch((error) => console.log(error));
      ;

    },

    caching: {
      // force reload on new version
      checkValidity: (state) => ((state.appVersion ?? '') === import.meta.env.VITE_APP_VERSION),
    },
  },
);
