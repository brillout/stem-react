export { PageContextProvider }
export { usePageContext }

import React, { useContext } from 'react'

type PageContext = Record<string, unknown>

const Context = React.createContext<PageContext>(undefined as any)

function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}
