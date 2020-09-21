import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Solutions.styles'
import Link from '../../ui-kit/core-design/Link'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Solutions = ({
  className,
  content: { heading, solutionsContent },
  l10n: { translations },
}) => {
  return (
    <Grid className={className} as="section">
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />
      {solutionsContent.map(({ blockClass, images, imgAlt, heading, text, link }, index) => (
        <Link
          className={`solution solution_${blockClass} solution-link`}
          href={link(translations)}
          key={index}
        >
          <div className={`image-wrapper image-wrapper_${blockClass}`}>
            <PictureSmart
              className="image"
              requireImages={images}
              alt={imgAlt}
              testid="contactUs:picture:bookACall.avatar"
            />
          </div>

          <Heading.H3
            type="regular"
            size="l"
            dangerouslySetInnerHTML={{ __html: heading(translations) }}
            className="solution-heading"
          />

          <Text
            type="regular"
            size="m"
            dangerouslySetInnerHTML={{ __html: text(translations) }}
            className="text"
          />
        </Link>
      ))}
    </Grid>
  )
}

Solutions.propTypes = {
  className: string,
  pageName: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Solutions)`
      ${styles}
    `),
  ),
)
