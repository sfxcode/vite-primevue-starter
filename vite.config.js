import * as path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import vueI18n from '@intlify/vite-plugin-vue-i18n'


process.env.VITE_APP_BUILD_EPOCH = new Date().getTime()
process.env.VITE_APP_VERSION = pkg.version

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  server: {
    hmr: {
      port: false,
      path: '/ws'
    }
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
