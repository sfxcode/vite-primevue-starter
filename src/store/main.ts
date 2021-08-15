import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
    // a function that returns a fresh state
    state: () => ({
        counter: 42,
        name: 'Eduardo',
    }),
    // optional getters
    getters: {
        doubleCount: (state) => {
            return state.counter * 2;
        },
    },
    // optional actions
    actions: {
        reset() {
            // `this` is the store instance
            this.counter = 0
        },
    },
})
