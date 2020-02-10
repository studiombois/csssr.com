import React from 'react'
import { string, object, array, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Facts.styles'
import translate from '../../../utils/translate-wrapper'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import FactItem from '../FactItem'

const Facts = ({
  className,
  id,
  t,
  content: { heading, subHeading, images, imgAlt, factItems },
}) => (
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

    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.l'].png}
      alt={t(imgAlt)}
      className="image"
    />

    {factItems.map(({ number, text, className }) => (
      <FactItem number={number} text={text} itemClassName={className} key={text} />
    ))}
  </Grid>
)

Facts.propTypes = {
  className: string,
  id: string,
  t: func,
  content: object,
  factItems: array,
}

export default translate()(
  MsBrowserConsumer(
    styled(Facts)`
      ${styles}
    `,
  ),
)
