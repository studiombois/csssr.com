import React, { useReducer, useContext } from 'react'
import { useRouter } from 'next/router'
import { L10nContext } from './l10nProvider'
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
  'Sonya Kiseleva': 'ee',
}

const adressByLanguage = {
  ru: 'ru',
  en: 'sg',
}

export const MapProvider = ({ children }) => {
  const { query } = useRouter()
  const { language } = useContext(L10nContext)

  const calendlyCallAssignee = query.assigned_to
  const defaultActiveAddressId =
    (calendlyCallAssignee && addressIdByCalendlyCallAssignee[calendlyCallAssignee]) ||
    adressByLanguage[language] ||
    'sg'

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
