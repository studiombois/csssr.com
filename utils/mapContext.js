import React, { useReducer } from 'react'
import reducer from '../reducers/map'

export const MapContext = React.createContext()

export const MapConsumer = (Component) => (props) => (
  <MapContext.Consumer>
    {({ activeAddressId, setActiveAddressId }) => {
      return (
        <Component
          {...props}
          activeAddressId={activeAddressId}
          setActiveAddressId={setActiveAddressId}
        />
      )
    }}
  </MapContext.Consumer>
)

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { id: 'sg' })
  const activeAddressId = state.id
  const setActiveAddressId = (id) => {
    dispatch({ type: 'CHANGE_ACTIVE_ADDRESS', payload: id })
  }

  return (
    <MapContext.Provider value={{ activeAddressId, setActiveAddressId }}>
      {children}
    </MapContext.Provider>
  )
}
