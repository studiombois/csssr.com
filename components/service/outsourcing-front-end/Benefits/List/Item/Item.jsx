import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Item.styles'
import translate from '../../../../../../utils/translate-wrapper'

import Heading from '../../../../../ui-kit/core-design/Heading'
import Text from '../../../../../ui-kit/core-design/Text'
import Picture from '../../../../../ui-kit/Picture'

const Item = ({ className, t, index, images }) => (
  <li className={className}>
    <Heading
      className="title"
      as="h3"
      dangerouslySetInnerHTML={{ __html: t(`outsourcingFrontEnd:benefits.list.${index}.title`) }}
      type="regular"
      size="m"
    />

    <Text
      className="description"
      as="p"
      size="m"
      dangerouslySetInnerHTML={{
        __html: t(`outsourcingFrontEnd:benefits.list.${index}.description`),
      }}
    />

    <Picture
      className="picture"
      images={images}
      fallback={images.png}
      alt={t(`outsourcingFrontEnd:imageAlt.benefits.${index}`)}
    />
  </li>
)

Item.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(Item)`
  ${styles}
`)
