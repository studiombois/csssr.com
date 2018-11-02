import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { arrayOf, string } from 'prop-types'
import { Field } from 'react-final-form'
import Checkbox from '../ui-kit/Checkbox'
import TextField from '../ui-kit/TextField'

const options = [{
  id: 'telegram',
  radioText: 'Telegram',
  inputText: 'Логин или номер',
  inputType: 'text',
}, {
  id: 'whatsapp',
  radioText: 'WhatsApp',
  inputText: 'Номер',
  inputType: 'text',
}, {
  id: 'skype',
  radioText: 'Skype',
  inputText: 'Логин',
  inputType: 'text',
}, {
  id: 'phone',
  radioText: 'Телефон',
  inputText: 'Номер',
  inputType: 'tel',
}]

const stylesForCheckbox = css.resolve`
  span {
    margin-bottom: 1rem;
    display: block;
  }
`

const stylesForInput = css.resolve`
  div {
    margin-top: 2.5rem;
    margin-bottom: 2.9375rem;
  }
`

const ContactOptions = ({ connection = [] }) =>
  <fieldset>
    <legend className='font_h3-regular'>
      Дополнительные способы связи:
    </legend>

    {options.map(option =>
      <Fragment key={option.id}>
        <Field
          className={stylesForCheckbox.className}
          id={`${option.id}OptionalContactRadio`}
          name='connection'
          value={option.id}
          type='checkbox'
          component={Checkbox}
        >
          {option.radioText}
        </Field>

        {connection.includes(option.id) &&
          <Field
            className={stylesForInput.className}
            id={`${option.id}OptionalContactField`}
            name={option.id}
            component={TextField}
            type={option.inputType}
            theme='regular'
            label={option.inputText}
          />
        }
      </Fragment>
    )}
    <style jsx>{`
      fieldset {
        margin-top: 6.9375rem;
        grid-column: 10 / span 3;
        white-space: nowrap;
        border: none;
      }

      legend {
        white-space: nowrap;
        margin-bottom: 1rem;
      }
    `}</style>
    {stylesForCheckbox.styles}
    {stylesForInput.styles}
  </fieldset>

ContactOptions.propTypes = {
  connection: arrayOf(string),
}

export default ContactOptions
