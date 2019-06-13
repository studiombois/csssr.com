import React, { Fragment } from 'react'
import { string, bool, func } from 'prop-types'
import ContactForm from '../../ContactForm'
import StatusMessage from './StatusMessage'
import cn from 'classnames'
import { formCSS, generateDynamicFormCSS } from './styles'

const Form = props => {
  const {
    pageName,
    formName,
    fieldsIds,
    submitStatus,
    hasFailOrSuccessStatus,
    onSubmitResolve,
    submitError,
    onStatusButtonClick,
  } = props
  const dynamicFormCSS = generateDynamicFormCSS(hasFailOrSuccessStatus)

  return (
    <Fragment>
      <ContactForm
        formName={formName}
        pageName={pageName}
        headerId='hire-us-modal'
        fields={['name', 'phone', 'email', 'message']}
        fieldsIds={fieldsIds}
        className={cn(formCSS.className, dynamicFormCSS.className)}
        status={submitStatus}
        shouldScroll={false}
        shouldShowStatusMessage={false}
        onSubmitResolve={onSubmitResolve}
        {...props}
      />

      <StatusMessage
        status={submitStatus}
        hasFailOrSuccessStatus={hasFailOrSuccessStatus}
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
  hasFailOrSuccessStatus: bool,
  submitError: string,
  pageName: string,
  onSubmitResolve: func,
  onStatusButtonClick: func,
}

export default Form
