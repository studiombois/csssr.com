import React, { Fragment } from 'react'
import { string, number, bool } from 'prop-types'
import css from 'styled-jsx/css'
import translate from '../../../utils/translate-wrapper'
import { Field } from 'react-final-form'
import TextareaField from '../../ui-kit/TextareaField'
import {
  composeValidators,
  maxLength as maxLengthValidator,
  required as requiredValidator,
} from '../../../utils/validators'

const { className, styles } = css.resolve`
  div {
    margin-top: 2.5rem;
  }
`

const JobSectionTextField = ({ title, maxLength, required, inputIndex, t }) => {
  const validate = composeValidators(
    required && requiredValidator(t),
    maxLengthValidator(maxLength, t)
  )
  return <Fragment>
    <Field
      className={className}
      name={`quests[${inputIndex}].text`}
      maxLength={maxLength}
      validate={validate}
      component={TextareaField}
      label={title}
      theme='regular'
    />
    <style jsx>{`
      p {
        margin-top: 0.5rem;
      }
    `}</style>
    {styles}
  </Fragment>
}

JobSectionTextField.propTypes = {
  index: number,
  title: string,
  maxLength: string,
  required: bool,
}

export default translate()(JobSectionTextField)
