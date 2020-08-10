import React, { useReducer } from 'react'
import reducer from '../reducers/inquiryType'

export const TypeInquiryContext = React.createContext()

export const TypeInquiryConsumer = (Component) => (props) => (
  <TypeInquiryContext.Consumer>
    {({ inquiryTypeId, setInquiryTypeId }) => {
      return (
        <Component {...props} inquiryTypeId={inquiryTypeId} setInquiryTypeId={setInquiryTypeId} />
      )
    }}
  </TypeInquiryContext.Consumer>
)

export const TypeInquiryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { id: 'new-project' })
  const inquiryTypeId = state.id
  const setInquiryTypeId = (id) => {
    dispatch({ type: 'CHANGE_INQUIRY_TYPE', payload: id })
  }

  return (
    <TypeInquiryContext.Provider value={{ inquiryTypeId, setInquiryTypeId }}>
      {children}
    </TypeInquiryContext.Provider>
  )
}
