import React, { Fragment } from 'react'
import { arrayOf, string, func } from 'prop-types'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles from './ContactOptions.styles'
import { css } from '@emotion/core'
import withI18next from '../../../utils/withI18next'
import Checkbox from '../../ui-kit/Checkbox/Checkbox'
import TextField from '../../ui-kit/TextField/TextField'
import getContactOptionsByI18N from '../../../data/job/getContactOptionsByI18N'

const ContactOptions = ({ className, connection = [], t }) => (
  <fieldset className={className}>
    <legend className="font_h3-regular">{t('job:additionalContactInfo')}:</legend>

    {getContactOptionsByI18N(t).map(option => (
      <Fragment key={option.id}>
        <Field
          css={css`
            span {
              margin-bottom: 1rem;
              display: block;
            }
          `}
          id={`${option.id}OptionalContactCheckbox`}
          name="connection"
          value={option.id}
          type="checkbox"
          component={Checkbox}
        >
          {option.checkboxText}
        </Field>

        {connection.includes(option.id) && (
          <Field
            css={css`
              div {
                margin-top: 2rem;
                margin-bottom: 2.9375rem;
              }
            `}
            id={`${option.id}OptionalContactField`}
            name={option.id}
            component={TextField}
            type={option.inputType}
            kind="regular"
            label={option.inputText}
          />
        )}
      </Fragment>
    ))}
  </fieldset>
)

ContactOptions.propTypes = {
  connection: arrayOf(string),
  t: func,
}

export default styled(withI18next(['job'])(ContactOptions))`
  ${styles}
`