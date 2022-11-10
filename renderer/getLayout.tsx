export { getLayout }

import type { Component } from './types'
import React from 'react'
import { isCallable } from './utils/isCallable'

function getLayout(pageContext: {
  exports: Record<string, unknown>
  exportsAll: Record<string, undefined | { filePath: string }[]>
}): Component {
  const { Layout } = pageContext.exports
  if (!Layout) {
    return ({ children }) => <>{children}</>
  }
  const { filePath } = pageContext.exportsAll.Layout![0]!
  if (!isCallable(Layout)) {
    throw new Error(filePath + ' `export { Layout }` should be a React component')
  }
  return Layout as Component
}
