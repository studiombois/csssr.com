import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Item.styles'
import { L10nConsumer } from '../../../../../../utils/l10nProvider'

import Heading from '../../../../../ui-kit/core-design/Heading'
import Text from '../../../../../ui-kit/core-design/Text'

const Item = ({ className, index, images, l10n: { translations } }) => (
  <li className={className}>
    <Heading
      className="title"
      as="h3"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.benefits.list[index].title,
      }}
      type="regular"
      size="m"
    />

    <Text
      className="description"
      as="p"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.benefits.list[index].description,
      }}
    />

    <PictureSmart
      className="picture"
      requireImages={images}
      alt={translations.outsourcingFrontEnd.imgAlt.benefits[index]}
      loading="lazy"
    />
  </li>
)

Item.propTypes = {
  className: string,
}

export default L10nConsumer(styled(Item)`
  ${styles}
`)
