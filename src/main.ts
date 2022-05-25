// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'uno.css'
import '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss'
import '@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },

)

