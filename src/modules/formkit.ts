import type { UserModule } from '@/types'
import { createAutoAnimatePlugin } from '@formkit/addons'

import { de, en } from '@formkit/i18n'
import { defaultConfig, plugin } from '@formkit/vue'
import { FormKitDataEdit, FormKitDataView, primeInputs, primeOutputs } from '@sfxcode/formkit-primevue'
import { addPrimeAsteriskPlugin } from '@sfxcode/formkit-primevue/plugins'

export const install: UserModule = ({ app }) => {
  app.component('FormKitDataEdit', FormKitDataEdit)
  app.component('FormKitDataView', FormKitDataView)

  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'en',
    inputs: { ...primeInputs, ...primeOutputs },
    plugins: [
      createAutoAnimatePlugin(
        {
          /* optional AutoAnimate config */
          // default:
          duration: 250,
          easing: 'ease-in-out',
        },
        {
          /* optional animation targets object */
          // default:
          global: ['outer', 'inner'],
          form: ['form'],
          repeater: ['items'],
        },
      ),
      addPrimeAsteriskPlugin,
    ],
  }))
}
