import React from 'react'
import { translate } from 'react-i18next'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import fetch from 'isomorphic-unfetch'
import ContactForm from '../ContactForm'
import contactFormValidationRules from './contactFormValidationRules'

const ContactFormForSchool = props => <ContactForm
  pageName='school'
  headerId='sign'
  fields={['name', 'email', 'phone']}
  {...props}
/>

const onSubmit = async values => {
  const res = await fetch('/api/school-submit-form', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })

  if (res.status === 201) {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'school_form_success' })
    }
  } else if (res.status === 400) {
    const error = await res.json()

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'school_form_fail' })
    }

    return { [FORM_ERROR]: error.error }
  }
}

const Form = () => <ReactFinalForm
  onSubmit={onSubmit}
  validate={contactFormValidationRules}
  component={ContactFormForSchool}
/>

export default translate()(Form)
