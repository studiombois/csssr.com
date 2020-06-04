import React from 'react'

export const L10nContext = React.createContext()

export const L10nConsumer = (Component) => {
  const Wrapper = (props) => (
    <L10nContext.Consumer>{(l10n) => <Component {...props} l10n={l10n} />}</L10nContext.Consumer>
  )

  Wrapper.getInitialProps = Component.getInitialProps

  return Wrapper
}

export default function L10nProvider({ l10n, children }) {
  return <L10nContext.Provider value={l10n}>{children}</L10nContext.Provider>
}
