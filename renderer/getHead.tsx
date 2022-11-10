export { getHead }

import React from 'react'
import { PageContextProvider } from './usePageContext'
import { isCallable } from './utils/isCallable'

function getHead(pageContext: any): JSX.Element {
  const Head = pageContext.exports.Head || <></>
  if (Head && !isCallable(Head)) {
    const { filePath } = pageContext.exportsAll.Head![0]!
    throw new Error(filePath + ' `export { Head }` should be a React component')
  }
  const head = (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Head />
      </PageContextProvider>
    </React.StrictMode>
  )
  return head
}
