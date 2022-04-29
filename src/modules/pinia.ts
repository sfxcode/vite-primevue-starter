import { createPinia } from 'pinia'
import { useAuthStore } from '@/store'
import type { UserModule } from '@/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ isClient, initialState, app, router }) => {
  const pinia = createPinia()
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value

  // enable athentification
  const auth = useAuthStore()
  router.beforeEach((to, from, next) => {
    const path: string = to.path
    if (path === '/logout') {
      auth.logout()
      router.push('/')
    }
    else if (path.includes('/admin')) {
      if (auth.authentificated)
        next()
      else
        router.push('/login')
    }
    else {
      next()
    }
  })
}
