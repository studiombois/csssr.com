import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Solutions.styles'
import Link from '../../ui-kit/core-design/Link'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import solutions from '../../../data/our-cases/solutions'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Solutions = ({ className, l10n: { translations } }) => {
  return (
    <Grid className={className} as="section">
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: solutions.heading(translations) }}
        className="heading"
      />
      {solutions.solutionsContent.map(
        ({ blockClass, images, imgAlt, heading, text, link }, index) => (
          <Link
            className={`solution solution_${blockClass} solution-link`}
            href={link(translations)}
            key={index}
            data-testid={`ourCases:block.solutionLink.${blockClass}`}
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
              data-testid={`ourCases:text.heading.${blockClass}`}
            />

            <Text
              type="regular"
              size="m"
              dangerouslySetInnerHTML={{ __html: text(translations) }}
              className="text"
            />
          </Link>
        ),
      )}
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
