import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'
import { Form as ReactFinalForm } from 'react-final-form'
import createDecorator from 'final-form-focus'
import translate from '../../utils/translate-wrapper'
import contactFormValidationRules from '../../utils/validators/contactFormValidationRules'
import { onSubmit } from '../dev/Form'
import Form from './Form'
import ClickOutside from '../ui-kit/ClickOutside'
import { generateDynamicContactModalStyles, contactModalStyles } from './styles'

const focusOnErrors = createDecorator()

class ContactModal extends PureComponent {
  state = {
    submitStatus: '',
  }

  handleSubmitResolve = submitStatus => {
    if (submitStatus === 'success' || submitStatus === 'fail') {
      this.setState({ submitStatus })
    }
  }

  handleStatusButtonClick = () => {
    const { submitStatus } = this.state

    if (submitStatus === 'fail') {
      this.setState({ submitStatus: '' })
    }

    if (submitStatus === 'success') {
      this.props.onClose()
    }
  }

  render() {
    const { t, lng, feedbackEmail, pageName, onClose } = this.props
    const { submitStatus } = this.state
    const hasSubmitStatus = !!submitStatus
    const dynamicModalStyles = generateDynamicContactModalStyles(hasSubmitStatus)
    const fieldsIds = {
      name: 'ConctactModalForm_name',
      phone: 'ConctactModalForm_phone',
      email: 'ConctactModalForm_email',
      message: 'ConctactModalForm_message',
      privacyPolicy: 'ConctactModalForm_privacyPolicy',
      newsletter: 'ConctactModalForm_newsletter',
    }

    return (
      <div className='screen-shadow'>
        <ClickOutside onOutsideClick={onClose}>
          <div className={`modal-wrapper ${dynamicModalStyles.className}`}>
            <ReactFinalForm
              component={Form}
              pageName={pageName}
              decorators={[ focusOnErrors ]}
              feedbackEmail={feedbackEmail}
              submitStatus={submitStatus}
              hasSubmitStatus={hasSubmitStatus}
              onSubmit={onSubmit(t, lng)}
              onSubmitResolve={this.handleSubmitResolve}
              onStatusButtonClick={this.handleStatusButtonClick}
              fieldsIds={fieldsIds}
              validate={contactFormValidationRules(t, fieldsIds)}
            />

            <button aria-label='close modal' onClick={onClose} />
          </div>
        </ClickOutside>

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
