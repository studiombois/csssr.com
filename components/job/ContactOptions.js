import React from 'react'
import { string } from 'prop-types'
import { Field } from 'react-final-form'
import Radio from '../ui-kit/Radio'
import TextField from '../ui-kit/TextField'

const options = [{
  radio: {
    id: 'telegramRadio',
    value: 'telegram',
    text: 'Telegram',
  },
  input: {
    id: 'telegramField',
    value: 'telegram',
    text: 'Логин или номер',
    type: 'text',
  },
}, {
  radio: {
    id: 'whatsappRadio',
    value: 'whatsapp',
    text: 'WhatsApp',
  },
  input: {
    id: 'whatsappField',
    value: 'whatsapp',
    text: 'Номер',
    type: 'text',
  },
}, {
  radio: {
    id: 'emailRadio',
    value: 'email',
    text: 'E-mail',
  },
  input: {
    id: 'emailField',
    value: 'email',
    text: 'E-mail',
    type: 'email',
  },
}, {
  radio: {
    id: 'phoneRadio',
    value: 'phone',
    text: 'Телефон',
  },
  input: {
    id: 'phoneField',
    value: 'phone',
    text: 'Номер',
    type: 'tel',
  },
}, {
  radio: {
    id: 'otherRadio',
    value: 'other',
    text: 'Указан в резюме',
  },
}]

const ContactOptions = ({ connection }) =>
  <>
    <h3 className='font_h3-regular headline'>
      Желаемый способ связи:
    </h3>
    {options.map(option =>
      <>
        <div className='field field_type_radio'>
          <Field
            id={option.radio.id}
            name='connection'
            value={option.radio.value}
            type='radio'
            component={Radio}
          >
            {option.radio.text}
          </Field>
        </div>
        {option.input && connection === option.input.value && <div className='field field_type_connection'>
          <Field
            id={option.input.id}
            name={option.input.value}
            component={TextField}
            type={option.input.type}
            theme='regular'
            label={option.input.text}
          />
        </div>}
      </>
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
  </>

ContactOptions.propTypes = {
  connection: string,
}

export default ContactOptions
