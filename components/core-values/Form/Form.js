import React from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import translate from '../../../utils/translate-wrapper'
import fetch from 'isomorphic-unfetch'
import ContactForm from '../../ContactForm'
import contactFormValidationRules from '../../../utils/validators/contactFormValidationRules'
import getGaCid from '../../../utils/client/getGaCid'

const ContactFormForCoreValues = props => (
  <ContactForm
    imageName="letter"
    headerId="hire-us"
    fields={['name', 'email', 'message']}
    feedbackEmail="sales@csssr.io"
    shouldShowSubHeading
    {...props}
  />
)

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
    if (window.dataLayer) {
      window.dataLayer.push({ event: `form_fail` })
    }

    return { [FORM_ERROR]: t('common:form.errors.general') }
  }

  if (res.status === 201) {
    if (window.dataLayer) {
      window.dataLayer.push({ event: `form_success` })
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
      window.dataLayer.push({ event: `form_fail` })
    }

    return { [FORM_ERROR]: error }
  }
}

const focusOnErrors = createDecorator()

const Form = ({ t, lng, pageName }) => (
  <ReactFinalForm
    onSubmit={onSubmit(t, lng)}
    validate={contactFormValidationRules(t)}
    decorators={[focusOnErrors]}
    component={ContactFormForCoreValues}
    pageName={pageName}
  />
)

export default translate()(Form)
export { onSubmit }
