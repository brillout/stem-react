export { getPageElement }

import type { PageContext } from './types'
import React from 'react'
import { PageContextProvider } from './usePageContext'

function getPageElement(pageContext: PageContext): JSX.Element {
  const Layout = pageContext.exports.Layout ?? PassThrough
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

function PassThrough({ children }: any) {
  return <>{children}</>
}
