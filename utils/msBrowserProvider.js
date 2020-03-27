import React from 'react'

export const Ie11BrowserContext = React.createContext(false)
export const MsBrowserContext = React.createContext(false)

export const MsBrowserConsumer = (Component) => (props) => (
  <MsBrowserContext.Consumer>
    {(isMsBrowser) => (
      <Ie11BrowserContext.Consumer>
        {(isIe11) => <Component {...props} isIe11={isIe11} isMsBrowser={isMsBrowser} />}
      </Ie11BrowserContext.Consumer>
    )}
  </MsBrowserContext.Consumer>
)

export default function MsBrowserProvider({ isIe11, isMsBrowser, children }) {
  return (
    <Ie11BrowserContext.Provider value={isIe11}>
      <MsBrowserContext.Provider value={isMsBrowser}>{children}</MsBrowserContext.Provider>
    </Ie11BrowserContext.Provider>
  )
}
