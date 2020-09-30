import React from 'react'
import styled from '@emotion/styled'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import styles from './ContactFormWrapper.styles'
import { L10nConsumer } from '../../utils/l10nProvider'
import ContactForm from '../ContactForm'
import contactFormValidationRules from '../../utils/validators/contactFormValidationRules'
import getGaCid from '../../utils/client/getGaCid'
import testEmails from '../../utils/testEmails'

const Form = (props) => (
  <ContactForm
    headerId="hire-us"
    fields={['name', 'phone', 'email', 'message']}
    feedbackEmail="launch@csssr.com"
    {...props}
  />
)

const onSubmit = (translations, language, pageName) => async (values) => {
  values.pageName = pageName
  values.gacid = getGaCid()
  values.language = language
  let res

  const isTestEmail = testEmails.includes(values.email)

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
    if (window.dataLayer && !isTestEmail) {
      window.dataLayer.push({ event: 'form_fail' })
    }

    return { [FORM_ERROR]: translations.common.form.errors.general }
  }

  if (res.status === 201) {
    if (window.dataLayer && !isTestEmail) {
      window.dataLayer.push({ event: 'form_success' })
    }
  } else {
    let error
    try {
      const response = await res.json()
      error = response.error
    } catch {
      error = translations.common.form.errors.general
    }

    if (window.dataLayer && !isTestEmail) {
      window.dataLayer.push({ event: 'form_fail' })
    }

    return { [FORM_ERROR]: error }
  }
}

const focusOnErrors = createDecorator()

const ContactFormWrapper = ({ l10n: { translations, language }, pageName, className }) => (
  <div className={className}>
    <ReactFinalForm
      onSubmit={onSubmit(translations, language, pageName)}
      validate={contactFormValidationRules(translations)}
      decorators={[focusOnErrors]}
      component={Form}
      className="form"
      pageName={pageName}
    />
  </div>
)

export default L10nConsumer(
  styled(ContactFormWrapper)`
    ${styles}
  `,
)
