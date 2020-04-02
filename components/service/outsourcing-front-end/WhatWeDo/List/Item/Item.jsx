import React from 'react'
import { string, func, number, object } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Item.styles'
import translate from '../../../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../../../utils/msBrowserProvider'

import Heading from '../../../../../ui-kit/core-design/Heading'
import Text from '../../../../../ui-kit/core-design/Text'

const Item = ({ className, t, index, icon: Icon }) => (
  <li className={className}>
    <Heading
      className="title"
      as="h3"
      dangerouslySetInnerHTML={{ __html: t(`outsourcingFrontEnd:whatWeDo.list.${index}.title`) }}
      type="regular"
      size="m"
    />

    <Text
      className="description"
      as="p"
      size="m"
      dangerouslySetInnerHTML={{
        __html: t(`outsourcingFrontEnd:whatWeDo.list.${index}.description`),
      }}
    />

    <Icon className="icon" />
  </li>
)

Item.propTypes = {
  className: string,
  t: func,
  index: number,
  icon: object,
}

export default translate(
  MsBrowserConsumer(styled(Item)`
    ${styles}
  `),
)
