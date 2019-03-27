import React from 'react'
import css from 'styled-jsx/css'
import { arrayOf, string } from 'prop-types'
import { Field } from 'react-final-form'
import SelectField from '../ui-kit/SelectField'
import TextField from '../ui-kit/TextField'
import contactOptions from '../../data/job/contactOptions'

const stylesForInput = css.resolve`
  div {
    margin-top: 2.5rem;
  }
`

const ContactOptionsMobile = ({ connection }) => {
  const connectionData = connection[0] && contactOptions.find(contact => contact.id === connection[0])

  return (
    <fieldset>
      <legend className='font_h3-regular'>
        Дополнительные способы связи:
      </legend>

      <Field
        name='connection[0]'
        placeholder='Дополнительный способ связи'
        options={contactOptions}
        id='phone'
        component={SelectField}
      />

      {connection[0] &&
        <Field
          className={stylesForInput.className}
          id={`${connectionData.id}OptionalContactField`}
          name={connectionData.id}
          type={connectionData.inputType}
          label={connectionData.inputText}
          component={TextField}
          theme='regular'
        />
      }


      <style jsx>{`
        fieldset {
          margin-top: 2.625rem;
          grid-column: 1 / span 6;
          white-space: nowrap;
          border: none;
        }

        legend {
          position: absolute;
          overflow: hidden;
          clip: rect(0 0 0 0);
          height: 1px; width: 1px;
          margin: -1px; padding: 0; border: 0;
        }
      `}</style>
      {stylesForInput.styles}
    </fieldset>
  )
}

ContactOptionsMobile.propTypes = {
  connection: arrayOf(string),
}

export default ContactOptionsMobile
