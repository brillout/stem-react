import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    './renderer/_default.page.client.ts',
    './renderer/_default.page.server.ts',
    './renderer/index.ts',
    './vite-plugin-ssr.config.ts',
    './eject.config.ts'
  ],
  format: 'esm',
  clean: true,
  sourcemap: true,
  dts: true
})
