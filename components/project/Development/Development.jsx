import React from 'react'
import { array, string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Development.styles'

import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Development = ({
  className,
  content: { heading, features, description },
  l10n: { translations },
}) => (
  <Grid as="section" className={className}>
    <Heading
      className="heading"
      as="span"
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: heading(translations) }}
    />

    <div className="text-wrapper">
      {translations.project.gazpromNeft.development.text.map((item, index) => (
        <Text
          key={index}
          className="paragraph"
          as="p"
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </div>

    <Text
      className="description"
      as="p"
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{ __html: description(translations) }}
    />

    <div className="features-wrapper">
      {features.map(({ image, alt, id, text }) => (
        <div className={`feature-item feature-item_${id}`} key={id}>
          <PictureSmart requireImages={image} alt={alt(translations)} className="feature-icon" />

          <Text
            className={`feature-text feature-text_${id}`}
            as="p"
            type="strong"
            size="m"
            dangerouslySetInnerHTML={{ __html: text(translations) }}
          />
        </div>
      ))}
    </div>
  </Grid>
)

Development.propTypes = {
  className: string,
  projectId: string,
  paragraphsScheme: array,
  images: func,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Development)`
    ${styles}
  `),
)
