import * as React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './FeatureItem.styles'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

const OriginFeatureItem = ({
  images,
  imageDescription,
  heading,
  textRegular,
  textBold,
  className,
}) => (
  <div className={className}>
    <PictureSmart requireImages={images} alt={imageDescription} loading="lazy" />

    <Heading
      as="h2"
      className="heading"
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{ __html: heading }}
    />

    <Text
      className="textRegular"
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{ __html: textRegular }}
    />

    <Heading
      as="h3"
      className="textBold"
      type="regular"
      size="s"
      dangerouslySetInnerHTML={{ __html: textBold }}
    />
  </div>
)

OriginFeatureItem.propTypes = {
  images: func,
  imageDescription: string,
  heading: string,
  textRegular: string,
  textBold: string,
  className: string,
}

const FeatureItem = styled(OriginFeatureItem)`
  ${styles.base}
`

export { FeatureItem }
export default FeatureItem
