export default {
  // For vite-plugin-ssr@0.4.53+
  extensions: [
    {
      npmPackageName: '@brillout/stem-react',
      pageFiles: [
        '@brillout/stem-react/renderer/_default.page.server.js',
        '@brillout/stem-react/renderer/_default.page.client.js'
      ]
    }
  ],
  // For vite-plugin-ssr@0.4.52 -- TODO: remove
  pageFiles: {
    addPageFiles: [
      '@brillout/stem-react/renderer/_default.page.server.js',
      '@brillout/stem-react/renderer/_default.page.client.js'
    ]
  }
}
