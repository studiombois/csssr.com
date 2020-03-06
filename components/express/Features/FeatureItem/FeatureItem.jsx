import * as React from 'react'
import { string, object } from 'prop-types'
import styled from '@emotion/styled'
import styles from './FeatureItem.styles'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'

const OriginFeatureItem = ({
  images,
  imageDescription,
  heading,
  textRegular,
  textBold,
  className,
}) => (
  <div className={className}>
    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.l']}
      alt={imageDescription}
    />

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
  images: object,
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
