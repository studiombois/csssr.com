import React, { useReducer } from 'react'
import reducer from '../reducers/typeInquiry'

export const TypeInquiryContext = React.createContext({ id: 'sg' })

export const TypeInquiryConsumer = (Component) => (props) => (
  <TypeInquiryContext.Consumer>
    {({ activeItemId, setActiveItemId }) => {
      return <Component {...props} activeItemId={activeItemId} setActiveItemId={setActiveItemId} />
    }}
  </TypeInquiryContext.Consumer>
)

export const TypeInquiryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { id: 'new-project' })

  const activeItemId = state.id

  const setActiveItemId = (id) => {
    dispatch({ type: 'CHANGE_TYPE', payload: id })
  }

  return (
    <TypeInquiryContext.Provider value={{ activeItemId, setActiveItemId }}>
      {children}
    </TypeInquiryContext.Provider>
  )
}
