import React, { PureComponent } from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import fetch from 'isomorphic-unfetch'
import ContactForm from './ContactForm'
import contactFormValidationRules from '../utils/contactFormValidationRules'

const onSubmit = async values => {
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
    return { [FORM_ERROR]: error.error };
  }
}

export default class Form extends PureComponent {

  renderForm = props => <ContactForm {...props} />

  render() {
    return (
      <ReactFinalForm
        onSubmit={onSubmit}
        validate={contactFormValidationRules}
        render={this.renderForm}
      />
    )
  }
}
