import React from 'react'
import { usePageContext } from './usePageContext'

export { Link }

function Link({ href, children }: { href: string; children: string }) {
  const pageContext = usePageContext()
  const urlPathname = pageContext.urlPathname as string /* TODO */
  const isActive = normalize(urlPathname) === normalize(href)
  const isActiveParent = !isActive && normalize(urlPathname).startsWith(`${normalize(href)}/`)
  const className = ['navigation-link', isActive && 'is-active', isActiveParent && 'is-active-parent']
    .filter(Boolean)
    .join(' ')
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

function normalize(urlPathname: string) {
  return urlPathname.split('/').filter(Boolean).join('/')
}
