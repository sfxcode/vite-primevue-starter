import { defineStore } from 'pinia'

export function updateTheme(themeName: string, themeColor: string) {
  const newValue = `/themes/${themeName}-${themeColor}/theme.css`
  const relElements = Array.prototype.slice.call(document.getElementsByTagName('link'))
  relElements.forEach((element: HTMLElement) => {
    if (element.getAttribute('href') && element.getAttribute('href')?.includes('/themes/'))
      element.setAttribute('href', newValue)
  })
}

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useThemeStore = defineStore('theme', {
  // a function that returns a fresh state
  state: () => ({
    themeName: 'aura-dark',
    themeColor: 'green',
  }),
  // optional getters
  getters: {
    theme: (state) => {
      return `${state.themeName}-${state.themeColor}`
    },
    isDarkMode: state => state.themeName === 'lara-dark',
  },
  // optional actions
  actions: {

    setTheme(themeName: string) {
      this.themeName = themeName
      updateTheme(this.themeName, this.themeColor)
    },
    setColor(colorName: string) {
      this.themeColor = colorName
      updateTheme(this.themeName, this.themeColor)
    },
  },
})
