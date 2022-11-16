export default {
  ejectables: [
    {
      actions: [
        {
          moveSourceCode: './renderer/'
        },
        {
          modifyImportPaths: {
            importPathOld: '@brillout/stem-react',
            importPathNew: './renderer'
          }
        }
      ]
    }
  ]
}
