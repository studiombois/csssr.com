import React from 'react'
import { string, bool } from 'prop-types'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles from './PrivacyPolicyCheckbox.styles'
import { L10nConsumer } from '../../utils/l10nProvider'
import Checkbox from '../ui-kit/Checkbox/Checkbox'

const PrivacyPolicyCheckbox = ({
  id = 'privacyPolicyCheckbox',
  name = 'privacyPolicy',
  className,
  testId,
  linkTestId,
  l10n: { translations, language },
  tabIndex,
  required,
}) => (
  <Field
    id={id}
    name={name}
    className={className}
    type="checkbox"
    showValidationAsWarning
    component={Checkbox}
    testId={testId}
    tabIndex={tabIndex}
    required={required}
  >
    {translations.common.checkBoxesText.privacyPolicyText}
    <a
      href={`/${language}/privacy-policy`}
      target="_blank"
      rel="noopener"
      className="font_link-list_16"
      data-testid={linkTestId}
      tabIndex={tabIndex}
    >
      {translations.common.checkBoxesText.privacyPolicyLinkText}
    </a>
  </Field>
)

PrivacyPolicyCheckbox.propTypes = {
  id: string,
  name: string,
  required: bool,
  testId: string.isRequired,
}

export default styled(L10nConsumer(PrivacyPolicyCheckbox))`
  ${styles}
`
