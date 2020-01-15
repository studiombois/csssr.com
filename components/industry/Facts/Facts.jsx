import React from 'react'
import { string, object, array } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Facts.styles'
import cn from 'classnames'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const FactItem = ({ number, text, itemClassName }) => (
  <div className={cn('fact-item', itemClassName)}>
    <Heading
      as="p"
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: number }}
      className="fact-number"
    />

    <Text type="strong" dangerouslySetInnerHTML={{ __html: text }} className="fact-text" />
  </div>
)

const Facts = ({ className, id, content: { heading, subHeading, images, imgAlt, factItems } }) => (
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

    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.all'].png}
      alt={imgAlt}
      className="image"
    />

    {factItems.map(({ number, text, className }) => (
      <FactItem number={number} text={text} itemClassName={className} key={className} />
    ))}
  </Grid>
)

Facts.propTypes = {
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default styled(MsBrowserConsumer(Facts))`
  ${styles}
`
