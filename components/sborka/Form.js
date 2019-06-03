import React from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import translate from '../../utils/translate-wrapper'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import fetch from 'isomorphic-unfetch'
import ContactForm from '../ContactForm'
import contactFormValidationRules from '../../utils/validators/contactFormValidationRules'
import getGaCid from '../../utils/client/getGaCid'

const pageName = 'sborka'
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
      window.dataLayer.push({ event: 'sborka_form_success' })
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
      window.dataLayer.push({ event: 'sborka_form_fail' })
    }

    return { [FORM_ERROR]: error }
  }
}
const ContactFormForSborka = props =>
  <div>
    <ContactForm
      pageName={pageName}
      headerId='hire-us'
      fields={['name', 'phone', 'email', 'message']}
      feedbackEmail='sales@csssr.io'
      {...props}
    />
    <style jsx>{`
      div {
        margin-bottom: -17.5rem;
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        div {
          margin-top: -0.375rem;
        }
      }

      @media (max-width: 767px) {
        div {
          margin-top: 2.8125rem;
          margin-bottom: -14rem;
        }
      }
    `}</style>
  </div>

const focusOnErrors = createDecorator()

const Form = ({ t, lng }) => <ReactFinalForm
  onSubmit={onSubmit(t, lng)}
  validate={contactFormValidationRules(t)}
  decorators={[ focusOnErrors ]}
  component={ContactFormForSborka}
/>

export default translate()(Form)
