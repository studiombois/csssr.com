import React from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import { translate } from 'react-i18next'
import fetch from 'isomorphic-unfetch'
import ContactForm from '../ContactForm'
import contactFormValidationRules from '../../utils/validators/contactFormValidationRules'
import getGaCid from '../../utils/client/getGaCid'

const ContactFormForDev = props => <ContactForm
  imageName='letter'
  pageName='dev'
  headerId='hire-us'
  fields={['name', 'phone', 'email', 'message']}
  feedbackEmail='sales@csssr.io'
  {...props}
/>

const onSubmit = (t, lng) => async values => {
  values.gacid = getGaCid()
  values.language = lng

  let res
  try {
    res = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
  } catch {
    return { [FORM_ERROR]: t('common:formErrors.general') }
  }

  if (res.status === 201) {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'form_success' })
    }
  } else {
    let error
    try {
      const response = await res.json()
      error = response.error
    } catch {
      error = t('common:formErrors.general')
    }

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'form_fail' })
    }

    return { [FORM_ERROR]: error }
  }
}

const focusOnErrors = createDecorator()

const Form = ({ t, lng }) => <ReactFinalForm
  onSubmit={onSubmit(t, lng)}
  validate={contactFormValidationRules(t)}
  decorators={[ focusOnErrors ]}
  component={ContactFormForDev}
/>

export default translate()(Form)
