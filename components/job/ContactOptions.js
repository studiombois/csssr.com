import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { string } from 'prop-types'
import { Field } from 'react-final-form'
import Radio from '../ui-kit/Radio'
import TextField from '../ui-kit/TextField'

const options = [{
  id: 'telegram',
  radio: {
    text: 'Telegram',
  },
  input: {
    text: 'Логин или номер',
    type: 'text',
  },
}, {
  id: 'whatsapp',
  radio: {
    text: 'WhatsApp',
  },
  input: {
    text: 'Номер',
    type: 'text',
  },
}, {
  id: 'phone',
  radio: {
    text: 'Телефон',
  },
  input: {
    text: 'Номер',
    type: 'tel',
  },
}, {
  id: 'other',
  radio: {
    text: 'Указан в резюме',
  },
}]

const stylesForRadio = css.resolve`
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

const ContactOptions = ({ connection }) =>
  <fieldset>
    <legend className='font_h3-regular'>
      Дополнительный способ связи:
    </legend>

    {options.map(option =>
      <Fragment>
        <Field
          className={stylesForRadio.className}
          id={`${option.id}OptionalContactRadio`}
          name='connection'
          value={option.id}
          type='radio'
          component={Radio}
        >
          {option.radio.text}
        </Field>

        {option.input && connection === option.id &&
          <Field
            className={stylesForInput.className}
            id={`${option.id}OptionalContactField`}
            name={option.id}
            component={TextField}
            type={option.input.type}
            theme='regular'
            label={option.input.text}
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
    {stylesForRadio.styles}
    {stylesForInput.styles}
  </fieldset>

ContactOptions.propTypes = {
  connection: string,
}

export default ContactOptions
