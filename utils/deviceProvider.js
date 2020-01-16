import React from 'react'

export const DeviceContext = React.createContext({ isTablet: false, isMobile: false })

export const DeviceConsumer = Component => props => (
  <DeviceContext.Consumer>
    {({ isTablet, isMobile }) => <Component {...props} isTablet={isTablet} isMobile={isMobile} />}
  </DeviceContext.Consumer>
)

export default function DeviceProvider({ isTablet, isMobile, children }) {
  return <DeviceContext.Provider value={{ isTablet, isMobile }}>{children}</DeviceContext.Provider>
}
