import React, { useReducer } from 'react'
import { useRouter } from 'next/router'
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

const addressIdByCalendlyCallAssignee = {
  'Anastasia Ign': 'sg',
  'Anastasia Vnuchenko': 'ee',
}

export const MapProvider = ({ children }) => {
  const { query } = useRouter()
  const calendlyCallAssignee = query.assigned_to
  const defaultActiveAddressId =
    (calendlyCallAssignee && addressIdByCalendlyCallAssignee[calendlyCallAssignee]) || 'sg'

  const [state, dispatch] = useReducer(reducer, {
    id: defaultActiveAddressId,
  })
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
