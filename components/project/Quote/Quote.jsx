import React from 'react'
import { string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Quote.styles'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Quote = ({ className, projectId, images, l10n: { translations } }) => (
  <Grid as="section" className={cn(className, projectId)}>
    <PictureSmart
      className="picture"
      requireImages={images}
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
