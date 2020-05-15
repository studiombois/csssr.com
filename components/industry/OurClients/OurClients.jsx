import React from 'react'
import { object, string } from 'prop-types'
import { L10nConsumer } from '../../../utils/l10nProvider'
import styled from '@emotion/styled'
import styles from './OurClients.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const OurClients = ({
  l10n: { translations, language },
  className,
  id,
  page,
  content: { heading, images, altImg },
}) => (
  <Grid className={className} as="section" id={id}>
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: heading(translations) }}
      className="heading"
    />

    <PictureForAllResolutions
      images={images[language]}
      className={`image image_${page}`}
      alt={altImg(translations)}
      fallback={images[language]['desktop.l']}
    />
  </Grid>
)

OurClients.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(OurClients)`
    ${styles}
  `),
)
