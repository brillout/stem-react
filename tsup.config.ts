import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['renderer/_default.page.client.ts', 'renderer/_default.page.server.ts', 'vite-plugin-ssr.config.ts'],
  format: 'esm',
  clean: true
})
