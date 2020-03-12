import React from 'react'
import { string, func } from 'prop-types'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles from './PrivacyPolicyCheckbox.styles'
import translate from '../../utils/translate-wrapper'
import Checkbox from '../ui-kit/Checkbox/Checkbox'
import privacyPolicyLinkClick from '../../utils/privacyPolicyLinkClick'

const PrivacyPolicyCheckbox = ({
  id = 'privacyPolicyCheckbox',
  lng,
  name = 'privacyPolicy',
  className,
  testid,
  linkTestId,
  t,
  tabIndex,
}) => (
  <Field
    id={id}
    name={name}
    className={className}
    type="checkbox"
    showValidationAsWarning
    component={Checkbox}
    testid={testid}
    tabIndex={tabIndex}
  >
    {t('common:checkBoxesText.privacyPolicyText')}
    <a
      href={`/${lng}/privacy-policy`}
      target="_blank"
      rel="noopener"
      onClick={privacyPolicyLinkClick}
      className="font_link-list_16"
      data-testid={linkTestId}
      tabIndex={tabIndex}
    >
      {t('common:checkBoxesText.privacyPolicyLinkText')}
    </a>
  </Field>
)

PrivacyPolicyCheckbox.propTypes = {
  id: string,
  name: string,
  t: func,
}

export default styled(translate(PrivacyPolicyCheckbox))`
  ${styles}
`
