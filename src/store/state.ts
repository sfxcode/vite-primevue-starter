import { reactive } from 'vue'

export const stateStore = reactive({
  collapsed: false,
  isOnMobile: false,

  setCollapsed(value: boolean) {
    this.collapsed = value
  },

  setIsOnMobile(value: boolean) {
    this.isOnMobile = value
  },
})
