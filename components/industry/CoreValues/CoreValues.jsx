import React from 'react'
import { string, object, array } from 'prop-types'
import styled from '@emotion/styled'
import styles from './CoreValues.styles'
import cn from 'classnames'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Link from '../../ui-kit/core-design/Link'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const CoreValuesItem = ({ images, imgAlt, link, text, itemClassName }) => (
  <>
    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.all'].png}
      alt={imgAlt}
      className={cn(itemClassName, 'image')}
    />

    <Link
      size="m"
      dangerouslySetInnerHTML={{ __html: link }}
      className={cn(itemClassName, 'link')}
    />

    <Text
      type="regular"
      dangerouslySetInnerHTML={{ __html: text }}
      className={cn(itemClassName, 'text')}
    />
  </>
)

const CoreValues = ({ className, id, content: { heading, subHeading, coreValuesItems } }) => (
  <Grid className={className} as="section" id={id}>
    <Heading.H2
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: heading }}
      className="heading"
    />

    <SubHeading
      type="slab"
      dangerouslySetInnerHTML={{ __html: subHeading }}
      className="sub-heading"
    />

    {coreValuesItems.map(({ images, imgAlt, link, text, className }) => (
      <CoreValuesItem
        images={images}
        imgAlt={imgAlt}
        link={link}
        text={text}
        itemClassName={className}
        key={link}
      />
    ))}
  </Grid>
)

CoreValues.propTypes = {
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default styled(MsBrowserConsumer(CoreValues))`
  ${styles}
`
