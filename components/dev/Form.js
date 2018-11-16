import React from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import fetch from 'isomorphic-unfetch'
import ContactForm from './ContactForm'
import contactFormValidationRules from './contactFormValidationRules'

const onSubmit = async values => {
  const gaCookie = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)')
  const rawGaCookieInfo = gaCookie ? decodeURIComponent(gaCookie[1]) : null
  const gacid = rawGaCookieInfo ? rawGaCookieInfo.match(/(\d+\.\d+)$/)[1] : null

  values.gacid = gacid

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
      window.dataLayer.push({ event: 'form_success' })
    }
  } else if (res.status === 400) {
    const error = await res.json()

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'form_fail' })
    }

    return { [FORM_ERROR]: error.error }
  }
}

export default () => <ReactFinalForm
  onSubmit={onSubmit}
  validate={contactFormValidationRules}
  component={ContactForm}
/>
