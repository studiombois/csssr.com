import React, { Fragment } from 'react'
import { arrayOf, string } from 'prop-types'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles from './ContactOptions.styles'
import { css } from '@emotion/core'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Checkbox from '../../ui-kit/Checkbox/Checkbox'
import TextField from '../../ui-kit/TextField/TextField'
import getContactOptions from '../../../data/job/getContactOptions'

const ContactOptions = ({ className, connection = [], l10n: { translations } }) => (
  <fieldset className={className}>
    <legend className="font_h3-regular">{translations.job.additionalContactInfo}:</legend>

    {getContactOptions(translations).map((option) => (
      <Fragment key={option.id}>
        <Field
          css={css`
            margin-bottom: 1rem;
            display: block;
          `}
          id={`${option.id}OptionalContactCheckbox`}
          name="connection"
          value={option.id}
          type="checkbox"
          component={Checkbox}
        >
          {option.checkboxText}
        </Field>

        {connection.indexOf(option.id) !== -1 && (
          <Field
            css={css`
              margin-top: 2rem;
              margin-bottom: 2.9375rem;
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
}

export default L10nConsumer(
  MsBrowserConsumer(styled(ContactOptions)`
    ${styles}
  `),
)
