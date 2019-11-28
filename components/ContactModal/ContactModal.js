import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'
import { Form as ReactFinalForm } from 'react-final-form'
import createDecorator, { getFormInputs } from 'final-form-focus'
import { FORM_ERROR } from 'final-form'
import fetch from 'isomorphic-unfetch'
import getGaCid from '../../utils/client/getGaCid'
import translate from '../../utils/translate-wrapper'
import contactFormValidationRules from '../../utils/validators/contactFormValidationRules'
import Form from './Form'
import OutsideClickHandler from 'react-outside-click-handler'
import { generateDynamicContactModalStyles, contactModalStyles } from './styles'

const formName = 'contact-modal'
const focusOnErrors = createDecorator(getFormInputs(formName))
const fieldsIds = {
  name: 'ConctactModalForm_name',
  phone: 'ConctactModalForm_phone',
  email: 'ConctactModalForm_email',
  message: 'ConctactModalForm_message',
  privacyPolicy: 'ConctactModalForm_privacyPolicy',
  newsletter: 'ConctactModalForm_newsletter',
}

class ContactModal extends PureComponent {
  state = {
    submitStatus: '',
  }

  handleSubmit = (t, lng) => async values => {
    this.setState({ submitStatus: '' })

    values.pageName = this.props.pageName
    values.gacid = getGaCid()
    values.language = lng

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
      return { [FORM_ERROR]: t('common:form.errors.general') }
    }

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
        error = t('common:form.errors.general')
      }

      if (window.dataLayer) {
        window.dataLayer.push({ event: 'form_fail' })
      }

      return { [FORM_ERROR]: error }
    }
  }

  handleSubmitResolve = submitStatus => {
    this.setState({ submitStatus })
  }

  handleStatusButtonClick = () => {
    const { submitStatus } = this.state

    if (submitStatus === 'fail') {
      this.setState({ submitStatus: 'pending' })
    }

    if (submitStatus === 'success') {
      this.props.onClose()
    }
  }

  render() {
    const { t, lng, feedbackEmail, pageName, onClose } = this.props
    const { submitStatus } = this.state
    const hasFailOrSuccessStatus = submitStatus === 'success' || submitStatus === 'fail'
    const dynamicModalStyles = generateDynamicContactModalStyles(hasFailOrSuccessStatus)

    return (
      <div className='screen-shadow'>
        <OutsideClickHandler onOutsideClick={onClose}>
          <div
            data-scroll-lock-scrollable
            className={`modal-wrapper ${dynamicModalStyles.className}`}
          >
            <ReactFinalForm
              component={Form}
              pageName={pageName}
              formName={formName}
              decorators={[ focusOnErrors ]}
              feedbackEmail={feedbackEmail}
              submitStatus={submitStatus}
              hasFailOrSuccessStatus={hasFailOrSuccessStatus}
              onSubmit={this.handleSubmit(t, lng)}
              onSubmitResolve={this.handleSubmitResolve}
              onStatusButtonClick={this.handleStatusButtonClick}
              fieldsIds={fieldsIds}
              validate={contactFormValidationRules(t)}
            />

            <button aria-label='close modal' onClick={onClose} data-testid='modalForm:button:closeModal'/>
          </div>
        </OutsideClickHandler>

        <style jsx>{contactModalStyles}</style>
        {dynamicModalStyles.styles}
      </div>
    )
  }
}

Form.propTypes = {
  pageName: string,
  onClose: func,
}

export default translate()(ContactModal)
