import React from 'react'
import { string, object } from 'prop-types'

import Heading from '../../../ui-kit/core-design/Heading'
import TextField from './TextField'
import Dropdown from './Dropdown'
import Textarea from './Textarea'
import AnimatedButton from '../../../ui-kit/core-design/AnimatedButton'

import { L10nConsumer } from '../../../../utils/l10nProvider'

import styled from '@emotion/styled'
import styles from './ContactForm.styles'

const ContactForm = ({ className, l10n: { translations } }) => {
  const status = ''
  return (
    <section className={className}>
      <Heading
        as="h1"
        className="heading"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.contactUs.form.title }}
      />

      <h2 className="subheading">{translations.contactUs.form.subtitle}</h2>

      <form className="form">
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

        <div className="separator">
          <span className="separator-text">{translations.contactUs.form.separator}</span>
        </div>
      </form>
    </section>
  )
}

ContactForm.propTypes = {
  className: string,
  l10n: object,
}

export default L10nConsumer(styled(ContactForm)`
  ${styles}
`)
