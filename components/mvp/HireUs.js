import React from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import translate from '../../utils/translate-wrapper'
import fetch from 'isomorphic-unfetch'
import ContactForm from '../ContactForm'
import contactFormValidationRules from '../../utils/validators/contactFormValidationRules'
import getGaCid from '../../utils/client/getGaCid'

const pageName = 'mvp'

const ContactFormForMVP = props => <ContactForm
  imageName='letter'
  pageName={pageName}
  headerId='hire-us'
  fields={['name', 'phone', 'email', 'message']}
  feedbackEmail='sales@csssr.io'
  {...props}
/>

const onSubmit = (t, lng) => async values => {
  values.pageName = pageName
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
    return { [FORM_ERROR]: t('common:form.errors.general') }
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
      error = t('common:form.errors.general')
    }

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'form_fail' })
    }

    return { [FORM_ERROR]: error }
  }
}

const focusOnErrors = createDecorator()

const HireUs = ({ t, lng }) => <ReactFinalForm
  onSubmit={onSubmit(t, lng)}
  validate={contactFormValidationRules(t)}
  decorators={[ focusOnErrors ]}
  component={ContactFormForMVP}
/>

export default translate()(HireUs)
