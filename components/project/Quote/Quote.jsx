import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Quote.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'

const Quote = ({ className, projectId, images, l10n: { translations } }) => (
  <Grid as="section" className={className}>
    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.l'].png}
      alt={translations.project[projectId].imgAlt.quote}
    />

    <blockquote className="quote">
      <SubHeading
        className="text"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: translations.project[projectId].quote.text }}
      />

      <footer className="author">
        <Heading
          className="author-name"
          as="span"
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: translations.project[projectId].quote.author.name }}
        />

        <Text
          className="author-signature"
          as="span"
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{
            __html: translations.project[projectId].quote.author.signature,
          }}
        />
      </footer>
    </blockquote>
  </Grid>
)

Quote.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Quote)`
    ${styles}
  `),
)
