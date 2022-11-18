import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    './renderer/_default.page.client.tsx',
    './renderer/_default.page.server.tsx',
    './renderer/index.ts',
    './vite-plugin-ssr.config.ts',
    './eject.config.ts'
  ],
  format: 'esm',
  clean: true,
  sourcemap: true,
  dts: true
})
