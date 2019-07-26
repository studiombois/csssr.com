import React from 'react'
import css from 'styled-jsx/css'
import { arrayOf, string, func } from 'prop-types'
import { Field } from 'react-final-form'
import withI18next from '../../utils/withI18next'
import SelectField from '../ui-kit/SelectField'
import TextField from '../ui-kit/TextField'
import getContactOptionsByI18N from '../../data/job/getContactOptionsByI18N'

const stylesForInput = css.resolve`
  div {
    margin-top: 2.5rem;
  }
`

const ContactOptionsMobile = ({ connection, t }) => {
  const connectionData = connection[0] && getContactOptionsByI18N(t).find(contact => contact.id === connection[0])

  return (
    <fieldset>
      <legend className='font_h3-regular'>
        {t('job:additionalContactInfo')}:
      </legend>

      <Field
        name='connection[0]'
        placeholder={t('job:additionalContactInfo')}
        options={getContactOptionsByI18N(t)}
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
  t: func,
}

export default withI18next(['job'])(ContactOptionsMobile)
