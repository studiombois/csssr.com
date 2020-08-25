import React, { useContext, useEffect, useRef, useState } from 'react'
import { object, string } from 'prop-types'
import { Field, Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import styled from '@emotion/styled'
import styles from './ContactForm.styles'
import TextField from './TextField'
import Dropdown from './Dropdown'
import Textarea from './Textarea'
import Checkbox from '../../../../ui-kit/Checkbox'
import AnimatedButton from '../../../../ui-kit/core-design/AnimatedButton'
import FormStateMessage from '../../../../ui-kit/FormStateMessage'
import { TypeInquiryContext } from '../../../../../utils/typeInquiryContext'
import { MapContext } from '../../../../../utils/mapContext'
import { L10nConsumer } from '../../../../../utils/l10nProvider'
import contactUsFormValidationRules from '../../../../../utils/validators/contactUsFormValidationRules'
import getProfileId from '../../../../../utils/getProfileId'
import getGaCid from '../../../../../utils/client/getGaCid'
import testEmails from '../../../../../utils/testEmails'
import profiles from '../../../../../data/contact-us/profiles'

const Component = ({
  className,
  l10n: { translations, language },
  submitError,
  formName,
  submitting,
  submitFailed,
  submitSucceeded,
  onSubmitResolve,
  form: { reset },
  ...props
}) => {
  // В final-form есть submitFailed и submitSucceeded,
  // но они учитывают только была ли засабмичена форма на фронте.
  // Мы показываем изображения только при отправке формы на сервер.
  const [submittedToServer, setSubmittedToServerStatus] = useState(false)
  const { inquiryTypeId } = useContext(TypeInquiryContext)
  const { activeAddressId } = useContext(MapContext)
  const inquiryTypeIdRef = useRef(inquiryTypeId)

  useEffect(() => {
    if (inquiryTypeIdRef.current !== inquiryTypeId) {
      setSubmittedToServerStatus(false)
    }
  }, [setSubmittedToServerStatus, inquiryTypeId])

  const getStatus = () => {
    // dirtySinceLastSubmit к сожалению не подходит,
    // потому что не отслеживает первое изменение после сабмита,
    // а сравнивает значения формы во время сабмита с текущими.
    // Поэтому dirtySinceLastSubmit false, когда форму поменяли и вернули значения как на момент сабмита.
    if (submitting) {
      return 'submitting'
    }

    if (submittedToServer) {
      if (submitFailed) {
        return 'fail'
      }

      return 'success'
    }

    return 'pending'
  }
  const handleSubmit = (e) => {
    // Может быть undefined если были ошибки валидации
    // или Promise если запрос отправлен
    const submitResult = props.handleSubmit(e)

    if (submitResult) {
      setSubmittedToServerStatus(true)

      return submitResult.then(() => {
        if (onSubmitResolve) {
          onSubmitResolve(getStatus())
        }

        if (submitSucceeded) {
          reset()
        }
      })
    }
  }
  const handleTryToFillFormAgain = () => setSubmittedToServerStatus(false)
  const profileId = getProfileId(inquiryTypeId, activeAddressId, language)
  const feedbackEmail = profiles[profileId].email
  const status = getStatus()

  return (
    <div>
      <Dropdown />

      <form className={className} onSubmit={handleSubmit}>
        <Field
          name="email"
          render={({ input, meta }) => (
            <TextField
              input={input}
              meta={meta}
              label={translations.contactUs.form.email}
              testid={`${formName}:field:contacts.email`}
            />
          )}
        />

        <Field
          testid="Contacts:field:phone"
          name="phone"
          render={({ input, meta }) => (
            <TextField
              input={input}
              meta={meta}
              inputMode="tel"
              label={translations.contactUs.form.phone}
              testid={`${formName}:field:contacts.phone`}
            />
          )}
        />

        <Field
          testid="Contacts:field:message"
          name="message"
          render={({ input, meta }) => (
            <Textarea
              input={input}
              meta={meta}
              label={translations.contactUs.form.text}
              testid={`${formName}:field:contacts.message`}
            />
          )}
        />

        <div className="newsletter" testid={`${formName}:block:contacts.checkbox`}>
          <Field
            id="newsletter"
            name="newsletter"
            type="checkbox"
            component={Checkbox}
            testid={`${formName}:field:contacts.agree`}
          >
            <span
              className="newsletter-text"
              dangerouslySetInnerHTML={{ __html: translations.contactUs.form.agree }}
            />
          </Field>
        </div>

        <p
          className="policy"
          dangerouslySetInnerHTML={{ __html: translations.contactUs.form.policy }}
        />

        <AnimatedButton
          className="submit"
          type="submit"
          disabled={status === 'submitting' || status === 'fail'}
          status={status}
          data-testid={`${formName}:button.formSubmit`}
        >
          <span className="submit-text">{translations.contactUs.form.submitText}</span>
        </AnimatedButton>

        <div className="message">
          <FormStateMessage
            status={status}
            errorText={submitError}
            onTryAgain={handleTryToFillFormAgain}
            feedbackEmail={feedbackEmail}
            testid={`${formName}:text.${submittedToServer ? 'successMessage' : 'failMessage'}`}
            shouldShowPicture={false}
          />
        </div>
      </form>
    </div>
  )
}

Component.propTypes = {
  className: string,
  l10n: object,
}

const focusOnErrors = createDecorator()
const Form = ({ className, l10n, l10n: { translations, language } }) => {
  const { inquiryTypeId } = useContext(TypeInquiryContext)
  const onSubmit = async (values) => {
    // в этой форме нет name, поэтому ставим прочерк что бы пройти валидацию на сервере
    // чекбокса privacyPolicy тоже нет, но в тексте к форме говорится, что при сабмите
    // пользователь соглашается с нашей политикой, поэтому ставим privacyPolicy в true
    values.name = '—'
    values.privacyPolicy = true
    values.pageName = 'contactUs'
    values.language = language
    values.gacid = getGaCid()

    let res
    const isTestEmail = testEmails.includes(values.email)
    const shouldSendDataLayerEvent = window.dataLayer && !isTestEmail
    const dataLayerEventNamePrefix = inquiryTypeId === 'new-project' ? 'form' : 'form_jbs'
    const submitUrl = inquiryTypeId === 'new-project' ? '/api/submit-form' : '/api/send-email'

    try {
      res = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
    } catch {
      if (shouldSendDataLayerEvent) {
        window.dataLayer.push({ event: dataLayerEventNamePrefix + '_fail' })
      }

      return { [FORM_ERROR]: translations.common.form.errors.general }
    }

    if (res.status === 201) {
      if (shouldSendDataLayerEvent) {
        window.dataLayer.push({ event: dataLayerEventNamePrefix + '_success' })
      }
    } else {
      let error
      try {
        const response = await res.json()
        error = typeof response.error !== 'string' ? JSON.stringify(response.error) : response.error
      } catch {
        error = translations.common.form.errors.general
      }

      if (shouldSendDataLayerEvent) {
        window.dataLayer.push({ event: dataLayerEventNamePrefix + '_fail' })
      }

      return { [FORM_ERROR]: error }
    }
  }

  return (
    <ReactFinalForm
      formName="contactUs"
      onSubmit={onSubmit}
      validate={contactUsFormValidationRules(translations)}
      decorators={[focusOnErrors]}
      className={className}
      l10n={l10n}
      component={Component}
    />
  )
}

export default L10nConsumer(
  styled(Form)`
    ${styles}
  `,
)
