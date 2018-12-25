import React, { Fragment } from 'react'
import { translate } from 'react-i18next'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import fetch from 'isomorphic-unfetch'
import ContactForm from './ContactForm'
import contactFormValidationRules from './contactFormValidationRules'

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

const Form = ({ t }) =>
  <Fragment>
    <section className='grid-container' id='sign'>
      <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:form.title') }} />
      <ReactFinalForm
        onSubmit={onSubmit}
        validate={contactFormValidationRules}
        component={ContactForm}
      />
    </section>
    <style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding-top: 10rem;
        width: 1792px;
      }

      h2 {
        grid-column: 5 / span 4;
        grid-row: 1;
        margin-bottom: 6.5rem;
        text-align: center;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1328px;
        }

        h2 {
          grid-column: 4 / span 6;
        }

      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 1232px;
        }

        h2 {
          grid-column: 4 / span 6;
        }

      }

      @media (min-width: 768px) and (max-width: 1279px) {
        section {
          padding-top: 7.5rem;
          width: 944px;
        }

        h2 {
          margin-bottom: 2.5rem;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
            margin-top: -0.8rem;
          }
        }
      }

      @media (max-width: 767px) {
        section {
          padding-top: 3rem;
          width: 20.5rem;
        }

        h2 {
          margin-bottom: 1.1875rem;
        }

       }
    `}</style>
  </Fragment>

export default translate()(Form)
