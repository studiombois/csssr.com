import React from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import fetch from 'isomorphic-unfetch'
import ContactForm from '../dev/ContactForm'
import contactFormValidationRules from '../dev/contactFormValidationRules'

const pageName = 'sborka'
const onSubmit = async values => {
  values.pageName = pageName
  const res = await fetch('/api/submit-form', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })

  if (res.status === 201) {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'sborka-form_success' })
    }
  } else if (res.status === 400) {
    const error = await res.json()

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'sborka-form_fail' })
    }

    return { [FORM_ERROR]: error.error }
  }
}
const ContactFormForSborka = props =>
  <div>
    <ContactForm pageName={pageName} {...props} />
    <style jsx>{`
      div {
        margin-top: 0.5rem;
        margin-bottom: -31.5rem;
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        div {
          margin-top: 1.5rem;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        div {
          margin-top: 0.3125rem;
        }
      }

      @media (max-width: 767px) {
        div {
          margin-top: 2.5rem;
          margin-bottom: -14rem;
        }
      }
    `}</style>
  </div>

export default () => <ReactFinalForm
  onSubmit={onSubmit}
  validate={contactFormValidationRules}
  component={ContactFormForSborka}
/>
