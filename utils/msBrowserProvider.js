import React from 'react'

export const Ie11BrowserContext = React.createContext(false)
export const MsBrowserContext = React.createContext(false)

export default function MsBrowserProvider({ isIe11, isMsBrowser, children }) {
  return (
    <Ie11BrowserContext.Provider value={isIe11}>
      <MsBrowserContext.Provider value={isMsBrowser}>{children}</MsBrowserContext.Provider>
    </Ie11BrowserContext.Provider>
  )
}
