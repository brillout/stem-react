export { getPageElement }

import { getLayout } from './getLayout'
import type { Component } from './types'
import React from 'react'
import { PageContextProvider } from './usePageContext'

function getPageElement(pageContext: {
  Page: Component
  pageProps?: Record<string, unknown>
  exports: Record<string, unknown>
  exportsAll: Record<string, undefined | { filePath: string }[]>
}): JSX.Element {
  const Layout = getLayout(pageContext)
  const { Page, pageProps } = pageContext
  const page = (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Page {...pageProps} />
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
  return page
}
