export default {
  pageFiles: {
    includeDist: [
      require.resolve('../dist/renderer/_default.page.server.js'),
      require.resolve('../dist/renderer/_default.page.client.js')
    ]
  }
}
