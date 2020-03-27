import React from 'react'
import { string, object, array, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './CoreValues.styles'
import translate from '../../../utils/translate-wrapper'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import CoreValuesItem from '../CoreValuesItem'

const CoreValues = ({ t, className, id, content: { heading, subHeading, coreValuesItems } }) => (
  <Grid className={className} as="section" id={id}>
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: t(heading) }}
      className="heading"
    />

    <SubHeading
      type="slab"
      dangerouslySetInnerHTML={{ __html: t(subHeading) }}
      className="sub-heading"
    />

    {coreValuesItems.map(({ images, href, imgAlt, title, text, className }) => (
      <CoreValuesItem
        images={images}
        href={href}
        imgAlt={imgAlt}
        title={title}
        text={text}
        itemClassName={className}
        key={title}
      />
    ))}
  </Grid>
)

CoreValues.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default translate(
  MsBrowserConsumer(styled(CoreValues)`
    ${styles}
  `),
)
