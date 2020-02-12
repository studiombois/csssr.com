import React from 'react'
import { string, object, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './DetailValue.styles'
import Grid from '../../ui-kit/core-design/Grid'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Description from '../Description'

const DetailValue = ({
  t,
  className,
  content: { id, images, imgAlt, title, subTitle, description },
}) => (
  <article id={id}>
    <Grid className={className}>
      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.m'].png}
        alt={t(imgAlt)}
        className="image"
      />

      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(title) }}
        className="heading"
      />

      <SubHeading
        type="slab"
        dangerouslySetInnerHTML={{ __html: t(subTitle) }}
        className="sub-heading"
      />
    </Grid>

    <Description description={description} parentClassName={id} />
  </article>
)

DetailValue.propTypes = {
  t: func,
  className: string,
  content: object,
}

export default translate()(
  MsBrowserConsumer(styled(DetailValue)`
    ${styles}
  `),
)
