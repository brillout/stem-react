export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }
export type { Page }

import type {
  PageContextBuiltInServer,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
} from 'vike/types'

type Page = (pageProps: PageProps) => React.ReactElement
type PageProps = Record<string, unknown>
type WrapperComponent = ({ children }: { children: any }) => React.ReactElement

export type PageContextCommon = {
  Page: Page
  pageProps?: PageProps
  exports: {
    Layout?: WrapperComponent
    Wrapper?: WrapperComponent
  }
}

type PageContextServer = PageContextBuiltInServer<Page> &
  PageContextCommon & {
    exports: {
      Head?: () => React.ReactElement
    }
  }
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCommon
type PageContext = PageContextClient | PageContextServer
