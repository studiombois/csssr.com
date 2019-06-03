import React from 'react'
import translate from '../../utils/translate-wrapper'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import fetch from 'isomorphic-unfetch'
import ContactForm from '../ContactForm'
import contactFormValidationRules from '../../utils/validators/contactFormValidationRules'
import createDecorator from 'final-form-focus'

const focusOnErrors = createDecorator()
const ContactFormForSchool = props =>
  <div>
    <ContactForm
      pageName='school'
      headerId='sign'
      fields={['name', 'email', 'phone']}
      feedbackEmail='info@csssr.school'
      {...props}
    /><style jsx>{`
      @media (min-width: 768px) and (max-width: 1279px) {
        div {
          margin-top: -0.375rem;
          margin-bottom: 0.375rem;
        }
      }
    `}</style>
  </div>

const Form = ({ t, chosenCourse }) => {
  const onSubmit = async values => {
    values.course = chosenCourse
    // TODO надо добавить
    // values.gacid = getGaCid()

    let res
    try {
      res = await fetch('/api/school-submit-form', {
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
        window.dataLayer.push({ event: 'school_form_success' })
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
        window.dataLayer.push({ event: 'school_form_fail' })
      }

      return { [FORM_ERROR]: error }
    }
  }

  return (
    <ReactFinalForm
      onSubmit={onSubmit}
      decorators={[ focusOnErrors ]}
      validate={contactFormValidationRules(t)}
      component={ContactFormForSchool}
    />
  )
}

export default translate()(Form)
