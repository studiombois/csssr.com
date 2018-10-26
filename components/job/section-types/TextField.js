import React from 'react'
import { string, number, bool } from 'prop-types'
import { Field } from 'react-final-form'
import TextareaField from '../../ui-kit/TextareaField'

const JobSectionTextField = ({ index, title, maxLength, required }) =>
  <div>
    {required && '*'} {title}
    <Field
      name={'quests[].text'}
      maxLength={maxLength}
      required={required}
      component={TextareaField}
      placeholder={title}
      label={title}
    />
    <style jsx>{`
    	div:before {
    	  content: 'field '
    	}
    `}</style>
  </div>

JobSectionTextField.propTypes = {
  index: number,
  title: string,
  maxLength: number,
  required: bool,
}

export default JobSectionTextField
