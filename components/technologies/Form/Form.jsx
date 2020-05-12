import React from 'react'
import styled from '@emotion/styled'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import fetch from 'isomorphic-unfetch'
import styles from './Form.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import ContactForm from '../../ContactForm'
import contactFormValidationRules from '../../../utils/validators/contactFormValidationRules'
import getGaCid from '../../../utils/client/getGaCid'

const ContactFormForIndustry = (props) => (
  <ContactForm
    imageName="letter"
    headerId="hire-us"
    fields={['name', 'phone', 'email', 'message']}
    feedbackEmail="sales@csssr.io"
    {...props}
  />
)

const onSubmit = (translations, language) => async (values) => {
  values.gacid = getGaCid()
  values.language = language
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

    return { [FORM_ERROR]: translations.common.form.errors.general }
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
      error = translations.common.form.errors.general
    }

    if (window.dataLayer) {
      window.dataLayer.push({ event: `form_fail` })
    }

    return { [FORM_ERROR]: error }
  }
}

const focusOnErrors = createDecorator()

const Form = ({ l10n: { translations, language }, pageName, className }) => (
  <ReactFinalForm
    onSubmit={onSubmit(translations, language)}
    validate={contactFormValidationRules(translations)}
    decorators={[focusOnErrors]}
    component={ContactFormForIndustry}
    className={className}
    pageName={pageName}
  />
)

export default L10nConsumer(
  styled(Form)`
    ${styles}
  `,
)
export { onSubmit }
