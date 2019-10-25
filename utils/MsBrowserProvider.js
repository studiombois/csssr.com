import React from 'react'

export const MsBrowserContext = React.createContext(false)

export default function MsBrowserProvider(props) {
  return (
    <MsBrowserContext.Provider value={props.value}>
      {props.children}
    </MsBrowserContext.Provider>
  )
}
