declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  // eslint-disable-next-line import/no-duplicates
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default Component
}
