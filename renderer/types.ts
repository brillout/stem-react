// TODO: remove this file by implementing VPS TS namespace overrriding

export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }
export type { Component }

import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router'

type Component = (pageProps: PageProps) => React.ReactElement
type Page = Component
type PageProps = Record<string, unknown>

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
}

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer
