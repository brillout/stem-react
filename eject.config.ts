export default {
  name: 'stem-react',
  root: __dirname,
  ejectables: [
    {
      src: '/renderer',
      importModifications: [{
        importPathOld: 'stem-react',
        importPathNew: '/renderer'
      }]
    }
  ]
}
