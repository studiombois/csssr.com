import React from 'react'

export const DeviceContext = React.createContext(false)

export default function DeviceProvider({ isMobile, children }) {
  return <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>
}
