import React from 'react'
import { arrayOf, func, string } from 'prop-types'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles from './ContactOptionsMobile.styles'
import { css } from '@emotion/core'
import translate from '../../../utils/translate-wrapper'
import SelectField from '../../ui-kit/SelectField/SelectField'
import TextField from '../../ui-kit/TextField/TextField'
import getContactOptionsByI18N from '../../../data/job/getContactOptionsByI18N'

const ContactOptionsMobile = ({ className, connection, t }) => {
  const connectionData =
    connection[0] && getContactOptionsByI18N(t).find((contact) => contact.id === connection[0])

  return (
    <fieldset className={className}>
      <legend className="font_h3-regular">{t('job:additionalContactInfo')}:</legend>

      <Field
        name="connection[0]"
        placeholder={t('job:additionalContactInfo')}
        options={getContactOptionsByI18N(t)}
        id="phone"
        component={SelectField}
      />

      {connection[0] && (
        <Field
          css={css`
            div {
              margin-top: 2.5rem;
            }
          `}
          id={`${connectionData.id}OptionalContactField`}
          name={connectionData.id}
          type={connectionData.inputType}
          label={connectionData.inputText}
          component={TextField}
          kind="regular"
        />
      )}
    </fieldset>
  )
}

ContactOptionsMobile.propTypes = {
  connection: arrayOf(string),
  t: func,
}

export default styled(translate(ContactOptionsMobile))`
  ${styles}
`
