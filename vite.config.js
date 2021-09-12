import * as path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import {resolve} from "path";
import Pages from "vite-plugin-pages"
import ViteIcons from "vite-plugin-icons"
import PurgeIcons from "vite-plugin-purge-icons"
import Markdown from 'vite-plugin-md'
import Restart from 'vite-plugin-restart'

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
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      // pagesDir: ['src/pages', 'src/pages2'],
      pagesDir: [
        { dir: 'src/pages', baseRoute: '' },
      ],
      extensions: ['vue', 'md'],
      syncIndex: true,
      replaceSquareBrackets: true,
      extendRoute(route) {
        if (route.name === 'about')
          route.props = route => ({ query: route.query.q })

        if (route.name === 'components') {
          return {
            ...route,
            beforeEnter: (route) => {
              // eslint-disable-next-line no-console
              console.log(route)
            },
          }
        }
      },
    }),
    Markdown(),
    Restart({
      restart: ['../../dist/*.js'],
    }),
    // https://github.com/antfu/vite-plugin-icons
    ViteIcons(),

    // https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
    PurgeIcons(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, 'node_modules/'),
    },
  },
})
