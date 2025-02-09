import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const collapsed = ref(false)
  const isOnMobile = ref(false)

  function setCollapsed(value: boolean) {
    collapsed.value = value
  }

  function setIsOnMobile(value: boolean) {
    isOnMobile.value = value
  }

  return { isOnMobile, collapsed, setCollapsed, setIsOnMobile }
})
