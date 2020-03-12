import React from 'react'

export const PagesListContext = React.createContext({ isTablet: false, isMobile: false })

export const PagesListConsumer = Component => props => (
  <PagesListContext.Consumer>
    {pagesList => <Component {...props} pagesList={pagesList} />}
  </PagesListContext.Consumer>
)

export default function PagesListProvider({ pagesList, children }) {
  return <PagesListContext.Provider value={pagesList}>{children}</PagesListContext.Provider>
}
