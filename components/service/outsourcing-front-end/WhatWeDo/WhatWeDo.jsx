import React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './WhatWeDo.styles'
import translate from '../../../../utils/translate-wrapper'

import List from './List'
import ContactUs from './ContactUs'
import Heading from '../../../ui-kit/core-design/Heading'

const WhatWeDo = ({ className, t }) => (
  <section className={className}>
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:whatWeDo.title') }}
      type="slab"
      size="m"
    />
    <List />
    <ContactUs />
  </section>
)

WhatWeDo.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(WhatWeDo)`
  ${styles}
`)
