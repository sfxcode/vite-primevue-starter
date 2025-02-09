import type { UserModule } from '@/types'
import VueSidebarMenu from 'vue-sidebar-menu'

export const install: UserModule = ({ app }) => {
  app.use(VueSidebarMenu)
}
