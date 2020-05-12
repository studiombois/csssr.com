import React from 'react'
import { array, object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Facts.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import FactItem from '../FactItem'

const Facts = ({
  className,
  id,
  content: { heading, subHeading, images, imgAlt, factItems },
  l10n: { translations },
}) => (
  <Grid className={className} as="section" id={id}>
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: heading(translations) }}
      className="heading"
    />

    <SubHeading
      type="slab"
      dangerouslySetInnerHTML={{ __html: subHeading(translations) }}
      className="sub-heading"
    />

    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.l'].png}
      alt={imgAlt(translations)}
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
  content: object,
  factItems: array,
}

export default L10nConsumer(
  MsBrowserConsumer(
    styled(Facts)`
      ${styles}
    `,
  ),
)
