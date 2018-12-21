import React from 'react'
import { string } from 'prop-types'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import fetch from 'isomorphic-unfetch'
import ContactForm from './ContactForm'
import contactFormValidationRules from './contactFormValidationRules'

const onSubmit = language => async values => {
  const gacid = window.ga.getAll()[0].get('clientId')

  values.gacid = gacid
  values.language = language

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
  } else {
    let error
    try {
      const response = await res.json()
      error = response.error
    } catch {
      error = 'Something went wrong. Please try again later.'
    }

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'form_fail' })
    }

    return { [FORM_ERROR]: error }
  }
}

const Form = ({ language }) => <ReactFinalForm
  onSubmit={onSubmit(language)}
  validate={contactFormValidationRules}
  component={ContactForm}
/>

Form.propTypes = {
  language: string,
}

export default Form
