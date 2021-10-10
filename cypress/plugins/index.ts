import { startDevServer } from '@cypress/vite-dev-server'

export default function (on, config) {
    on('dev-server:start', (options) => {
        const viteConfig = {
            // import or inline your vite configuration from vite.config.js
        }
        return startDevServer({ options, viteConfig })
    })
}
