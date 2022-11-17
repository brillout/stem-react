export { PageContextProvider }
export { usePageContext }

import React, { useContext } from 'react'

type PageContext = Record<string, unknown>

const Context = React.createContext<PageContext>(undefined as any) // TODO

function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  if (!pageContext) throw new Error('Argument `pageContext` is missing')
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  if (!pageContext) throw new Error('<PageContextProvider> is needed for being able to use usePageContext()')
  return pageContext
}
