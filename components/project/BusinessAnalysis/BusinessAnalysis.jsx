import React from 'react'
import { object, string, func } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './BusinessAnalysis.styles'

import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'

const BusinessAnalysis = ({
  className,
  content: { heading, description, text, imagesBlocks },
  l10n: { translations },
}) => (
  <Grid as="section" className={className}>
    <div className="description-wrapper">
      <Heading.H2
        className="heading"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
      />

      <Text
        className="description"
        as="p"
        type="regular"
        size="m"
        dangerouslySetInnerHTML={{ __html: description(translations) }}
      />

      <div className="text-wrapper">
        {text.map((item, index) => (
          <Text
            key={index}
            className="paragraph"
            as="p"
            type="regular"
            size="m"
            dangerouslySetInnerHTML={{ __html: item(translations) }}
          />
        ))}
      </div>
    </div>

    {imagesBlocks.map(({ id, image, imgAlt, text }) => (
      <div className={`image-block image-block_${id}`} key={id}>
        <PictureSmart className="image" requireImages={image} alt={imgAlt} />

        <Text
          className="image-description"
          as="p"
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: text(translations) }}
        />
      </div>
    ))}
  </Grid>
)

BusinessAnalysis.propTypes = {
  className: string,
  content: object,
  images: func,
}

export default L10nConsumer(styled(BusinessAnalysis)`
  ${styles}
`)
