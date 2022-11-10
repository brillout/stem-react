export { render }
export { passToClient }

import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { getTitle } from './getTitle'
import { getPageElement } from './getPageElement'
import type { PageContextServer } from './types'
import { getHead } from './getHead'

const passToClient = ['pageProps', 'title']

async function render(pageContext: PageContextServer) {
  const page = getPageElement(pageContext)
  const pageHtml = renderToString(page)

  const title = getTitle(pageContext)
  const titleTag = title === null ? '' : escapeInject`<title>${title}</title>`

  const head = getHead(pageContext)
  const headHtml = renderToString(head)

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        ${titleTag}
        ${dangerouslySkipEscape(headHtml)}
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml
  }
}
