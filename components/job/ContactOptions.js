import React, { Fragment } from 'react'
import { string } from 'prop-types'
import { Field } from 'react-final-form'
import Radio from '../ui-kit/Radio'
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
  id: 'phone',
  radioText: 'Телефон',
  inputText: 'Номер',
  inputType: 'tel',
}, {
  id: 'other',
  radioText: 'Указан в резюме',
}]

const ContactOptions = ({ connection }) =>
  <Fragment>
    <h3 className='font_h3-regular headline'>
      Дополнительный способ связи:
    </h3>
    {options.map(option =>
      <Fragment key={option.id}>
        <div className='field field_type_radio'>
          <Field
            id={`${option.id}Radio`}
            name='connection'
            value={option.id}
            type='radio'
            component={Radio}
          >
            {option.radioText}
          </Field>
        </div>
        {option.inputText && connection === option.id && <div className='field field_type_connection'>
          <Field
            id={`${option.id}Input`}
            name={option.id}
            component={TextField}
            type={option.inputType}
            theme='regular'
            label={option.inputText}
          />
        </div>}
      </Fragment>
    )}<style jsx>{`
      .headline {
        margin-bottom: 6rem;
        text-align: center;
      }

      .field {
        margin-bottom: 2.0625rem;
      }

      .field_type_radio {
        margin-bottom: 1rem;
      }

      .field_type_connection {
        margin-top: 2rem;
        margin-bottom: 3rem;
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        .headline {
          margin-bottom: 2.3125rem;
        }

        .field {
          grid-column: 4 / span 6;
          margin-bottom: 1.875rem;
        }
      }
    `}</style>
  </Fragment>

ContactOptions.propTypes = {
  connection: string,
}

export default ContactOptions
