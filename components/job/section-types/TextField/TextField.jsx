import React from 'react'
import { string, number, bool } from 'prop-types'
import styled from '@emotion/styled'
import styles from './TextField.styles'
import translate from '../../../../utils/translate-wrapper'
import { Field } from 'react-final-form'
import TextareaField from '../../../ui-kit/TextareaField/TextareaField'
import {
  composeValidators,
  maxLength as maxLengthValidator,
  required as requiredValidator,
} from '../../../../utils/validators'

const JobSectionTextField = ({ className, title, maxLength, required, inputIndex, t }) => {
  const validate = composeValidators(
    required && requiredValidator(t),
    maxLengthValidator(maxLength, t),
  )
  return (
    <Field
      className={className}
      name={`quests[${inputIndex}].text`}
      maxLength={maxLength}
      validate={validate}
      component={TextareaField}
      label={title}
      kind="regular"
    />
  )
}

JobSectionTextField.propTypes = {
  index: number,
  title: string,
  maxLength: string,
  required: bool,
}

export default styled(translate()(JobSectionTextField))`
  ${styles}
`
