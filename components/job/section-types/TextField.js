import React from 'react'
import { string, number, bool } from 'prop-types'
import { Field } from 'react-final-form'
import TextareaField from '../../ui-kit/TextareaField'

const JobSectionTextField = ({ index, title, maxLength, required }) =>
  <div>
    <h3 className='font_h3-regular' dangerouslySetInnerHTML={{ __html: `${required && '* '}${title}` }} />
    <Field
      name={'quests[].text'}
      maxLength={maxLength}
      required={required}
      component={TextareaField}
      label={title}
      theme='regular'
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
