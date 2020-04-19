import React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'

import styles from './ContactUs.styles'
import SubHeading from '../../../../ui-kit/core-design/SubHeading'
import Text from '../../../../ui-kit/core-design/Text'
import ContactButton from '../../../../ContactButton'
import translate from '../../../../../utils/translate-wrapper'

const ContactUs = ({ className, t }) => (
  <section className={className}>
    <SubHeading
      className="title"
      as="h3"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:whatWeDo.contactUs.title') }}
      type="slab"
    />

    <Text
      className="subtitle"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:whatWeDo.contactUs.subtitle') }}
    />

    <ContactButton
      className="button"
      pageName="outsourcingFrontEnd"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:whatWeDo.contactUs.button') }}
    />
  </section>
)

ContactUs.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(ContactUs)`
  ${styles}
`)
