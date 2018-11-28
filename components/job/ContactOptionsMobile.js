import React from 'react'
import css from 'styled-jsx/css'
import { string } from 'prop-types'
import { Field } from 'react-final-form'
import SelectField from '../ui-kit/SelectField'
import TextField from '../ui-kit/TextField'

export const contactOptions = [{
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

const stylesForInput = css.resolve`
  div {
    margin-top: 2.5rem;
  }
`

const getSelectedConnectionData = connection =>
  contactOptions.find(contact => contact.id === connection)

const ContactOptionsMobile = ({ connection }) =>
  <fieldset>
    <legend className='font_h3-regular'>
      Дополнительные способы связи:
    </legend>

    <Field
      name='connection'
      placeholder='Дополнительный способ связи'
      options={contactOptions}
      component={SelectField}
    />

    {connection &&
      <Field
        className={stylesForInput.className}
        id={`${getSelectedConnectionData(connection).id}OptionalContactField`}
        name={getSelectedConnectionData(connection).id}
        component={TextField}
        type={getSelectedConnectionData(connection).inputType}
        theme='regular'
        label={getSelectedConnectionData(connection).inputText}
      />
    }


    <style jsx>{`
      fieldset {
        margin-top: 2.5rem;
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

ContactOptionsMobile.propTypes = {
  connection: string,
}

export default ContactOptionsMobile
