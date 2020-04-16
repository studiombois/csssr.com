import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Quote.styles'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'

const Quote = ({ className, porojectId, images, t }) => (
  <Grid as="section" className={className}>
    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.l'].png}
      alt={t(`project:${porojectId}.quote.imgAlt.quote`)}
    />

    <blockquote className="quote">
      <SubHeading
        className="text"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: t(`project:${porojectId}.quote.text`) }}
      />

      <footer className="author">
        <Heading
          className="author-name"
          as="span"
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(`project:${porojectId}.quote.author.name`) }}
        />

        <Text
          className="author-signature"
          as="span"
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(`project:${porojectId}.quote.author.signature`) }}
        />
      </footer>
    </blockquote>
  </Grid>
)

Quote.propTypes = {
  className: string,
  t: func,
}

export default translate(
  MsBrowserConsumer(styled(Quote)`
    ${styles}
  `),
)
