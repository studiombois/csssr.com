import React from 'react'
import { elementType, number, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Item.styles'
import { L10nConsumer } from '../../../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../../../utils/msBrowserProvider'

import Heading from '../../../../../ui-kit/core-design/Heading'
import Text from '../../../../../ui-kit/core-design/Text'

const Item = ({ className, index, icon: Icon, l10n: { translations } }) => (
  <li className={className}>
    <Heading
      className="title"
      as="h3"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.whatWeDo.list[index].title,
      }}
      type="regular"
      size="m"
    />

    <Text
      className="description"
      as="p"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.whatWeDo.list[index].description,
      }}
    />

    <Icon className="icon" />
  </li>
)

Item.propTypes = {
  className: string,
  index: number,
  icon: elementType,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Item)`
    ${styles}
  `),
)
