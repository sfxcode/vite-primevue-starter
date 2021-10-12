import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useAuthStore = defineStore('auth', {
    // a function that returns a fresh state
    state: () => ({
        authentificated: false,
        email: 'admin@test.com',
    }),
    // optional getters
    getters: {
    },
    // optional actions
    actions: {
        login(password:string) {
            // `this` is the store instance
            if (this.email === 'admin@test.com' && password==='1234') {
                this.authentificated = true;
            }
            else {
                this.authentificated = false;
            }
        },
        logout()  {
            this.authentificated = false;
        }
    },
})
