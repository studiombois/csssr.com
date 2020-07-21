import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

import styles from './ContactUs.styles'
import SubHeading from '../../../../ui-kit/core-design/SubHeading'
import Text from '../../../../ui-kit/core-design/Text'
import ContactButton from '../../../../ContactButton'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

const ContactUs = ({ className, pageName, l10n: { translations } }) => (
  <section className={className}>
    <SubHeading
      className="title"
      as="h3"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.whatWeDo.contactUs.title,
      }}
      type="slab"
    />

    <Text
      className="subtitle"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.whatWeDo.contactUs.subtitle,
      }}
    />

    <ContactButton
      className="button"
      pageName={pageName}
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.whatWeDo.contactUs.button,
      }}
      data-testid="Outsourcing:modal:contactUs"
    />
  </section>
)

ContactUs.propTypes = {
  className: string,
  pageName: string,
}

export default L10nConsumer(styled(ContactUs)`
  ${styles}
`)
