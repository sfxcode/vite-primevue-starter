import { defaultConfig, plugin } from '@formkit/vue'
import { primeInputs } from '@sfxcode/formkit-primevue'

import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(plugin, defaultConfig({
    inputs: primeInputs,
  }))
}
