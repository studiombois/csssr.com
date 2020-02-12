import React from 'react'
import { string, object, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './Greeting.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import greeting from '../../../data/core-values/greeting'

const { heading, images, imgAlt } = greeting

const Greeting = ({ t, className, id }) => (
  <section className={className} id={id}>
    <Grid className="grid-heading">
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />
    </Grid>
    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.l'].png}
      alt={t(imgAlt)}
      className="image"
    />
  </section>
)

Greeting.propTypes = {
  t: func,
  className: string,
  id: string,
}

export default translate()(
  MsBrowserConsumer(styled(Greeting)`
    ${styles}
  `),
)
