declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.md' {
  // eslint-disable-next-line import/no-duplicates
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
