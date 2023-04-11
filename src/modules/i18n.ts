import { createI18n } from 'vue-i18n'
import type { UserModule } from '@/types'
import en from '@/locales/en.yaml'

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en,
    },
  })

  app.use(i18n)
}
