import React from 'react'
import { string, object } from 'prop-types'

import TextField from './TextField'
import Dropdown from './Dropdown'
import Textarea from './Textarea'
import AnimatedButton from '../../../../ui-kit/core-design/AnimatedButton'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

import styled from '@emotion/styled'
import styles from './ContactForm.styles'

const ContactForm = ({ className, l10n: { translations } }) => {
  const status = ''

  return (
    <form className={className}>
      <Dropdown />

      <TextField label="Email" />

      <TextField label="Phone <span>(optional)</span>" />

      <Textarea label="Drop us a line" />

      <p
        className="policy"
        dangerouslySetInnerHTML={{ __html: translations.contactUs.form.policy }}
      />

      <AnimatedButton
        className="submit"
        type="submit"
        disabled={status === 'submitting' || status === 'fail'}
        status={status}
        testid=""
      >
        <span className="submit-text">{translations.contactUs.form.submitText}</span>
      </AnimatedButton>
    </form>
  )
}

ContactForm.propTypes = {
  className: string,
  l10n: object,
}

export default L10nConsumer(styled(ContactForm)`
  ${styles}
`)
