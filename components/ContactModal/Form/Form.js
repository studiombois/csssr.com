import React, { Fragment } from 'react'
import { string, bool, func } from 'prop-types'
import ContactForm from '../../ContactForm'
import StatusMessage from './StatusMessage'
import cn from 'classnames'
import { formCSS, generateDynamicFormCSS } from './styles'

const Form = props => {
  const {
    pageName,
    fieldsIds,
    submitStatus,
    hasSubmitStatus,
    onSubmitResolve,
    submitError,
    onStatusButtonClick,
  } = props
  const dynamicFormCSS = generateDynamicFormCSS(hasSubmitStatus)

  return (
    <Fragment>
      <ContactForm
        pageName={pageName}
        headerId='hire-us-modal'
        fields={['name', 'phone', 'email', 'message']}
        fieldsIds={fieldsIds}
        className={cn(formCSS.className, dynamicFormCSS.className)}
        status={submitStatus || 'pending'}
        shouldScroll={false}
        shouldShowStatusMessage={false}
        onSubmitResolve={onSubmitResolve}
        {...props}
      />

      <StatusMessage
        status={submitStatus}
        hasSubmitStatus={hasSubmitStatus}
        feedbackEmail='sales@csssr.io'
        errorText={submitError}
        onClick={onStatusButtonClick}
      />

      {formCSS.styles}
      {dynamicFormCSS.styles}
    </Fragment>
  )
}

Form.propTypes = {
  submitStatus: string,
  hasSubmitStatus: bool,
  submitError: string,
  pageName: string,
  onSubmitResolve: func,
  onStatusButtonClick: func,
}

export default Form
