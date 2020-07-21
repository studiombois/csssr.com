import React, { useReducer } from 'react'
import reducer from '../reducers/map'

export const MapContext = React.createContext({ id: 'sg' })

export const MapConsumer = (Component) => (props) => (
  <MapContext.Consumer>
    {({ activePinId, setActivePinId }) => {
      return <Component {...props} activePinId={activePinId} setActivePinId={setActivePinId} />
    }}
  </MapContext.Consumer>
)

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { id: 'sg' })

  const activePinId = state.id

  const setActivePinId = (id) => {
    dispatch({ type: 'CHANGE_PIN', payload: id })
  }

  return (
    <MapContext.Provider value={{ activePinId, setActivePinId }}>{children}</MapContext.Provider>
  )
}
