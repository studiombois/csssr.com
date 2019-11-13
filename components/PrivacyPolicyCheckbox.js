import React, { Fragment } from 'react'
import { string, func } from 'prop-types'
import { Field } from 'react-final-form'
import translate from '../utils/translate-wrapper'
import Checkbox from '../components/ui-kit/Checkbox'
import privacyPolicyLinkClick from '../utils/privacyPolicyLinkClick'


const PrivacyPolicyCheckbox = ({
  id = 'privacyPolicyCheckbox',
  lng,
  name = 'privacyPolicy',
  className,
  testid,
  linkTestId,
  t,
}) =>
  <Fragment>
    <Field
      id={id}
      name={name}
      className={className}
      type='checkbox'
      showValidationAsWarning
      component={Checkbox}
      testid={testid}
    >
      {t('common:checkBoxesText.privacyPolicyText')}
      <a
        href={`/${lng}/privacy-policy`}
        target='_blank'
        rel='noopener'
        onClick={privacyPolicyLinkClick}
        className='font_link-list_16'
        data-testid={linkTestId}
      >
        {t('common:checkBoxesText.privacyPolicyLinkText')}
      </a>
    </Field><style jsx>{`
      a[target='_blank']::after {
        display: none;
      }

      @media (max-width: 1279px) {
        .font_link-list_16 {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }

      @media (max-width: 767px) {
        .font_link-list_16 {
          padding-bottom: 0;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }
    `}</style>
  </Fragment>

PrivacyPolicyCheckbox.propTypes = {
  id: string,
  name: string,
  t: func,
}

export default translate()(PrivacyPolicyCheckbox)
