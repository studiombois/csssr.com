import React from 'react'
import { string, object } from 'prop-types'

import styled from '@emotion/styled'
import styles from './ContactUs.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'

const ContactUs = ({ className, l10n: { translations } }) => {
  return (
    <section className={className}>
      <Heading
        as="h2"
        className="heading"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.contactUs.title }}
      />
    </section>
  )
}

ContactUs.propTypes = {
  className: string,
  l10n: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(ContactUs)`
    ${styles}
  `),
)
