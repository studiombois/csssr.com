import React from 'react'
import cn from 'classnames'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Solutions.styles'
import Link from '../../ui-kit/core-design/Link'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import solutions from '../../../data/projects/solutions'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Solutions = ({ className, l10n: { translations }, pageName = 'projects' }) => (
  <Grid className={className} as="section" data-testid={`${pageName}:block.solutions`}>
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: solutions.heading(translations) }}
      className="heading"
    />
    {solutions.solutionsContent.map(
      ({ externalLink, blockClass, images, imgAlt, heading, text, link }, index) => (
        <Link
          className={cn('solution', `solution_${blockClass} solution-link`, {
            external: externalLink,
          })}
          href={link(translations)}
          key={index}
          {...(externalLink && {
            target: '_blank',
            rel: 'nofollow noopener',
          })}
          data-testid={`${pageName}:block.solution.${blockClass}.link`}
        >
          <div className={`image-wrapper image-wrapper_${blockClass}`}>
            <PictureSmart
              className="image"
              requireImages={images}
              alt={imgAlt(translations)}
              testid="contactUs:picture:bookACall.avatar"
            />
          </div>

          <Heading.H3
            type="regular"
            size="l"
            dangerouslySetInnerHTML={{ __html: heading(translations) }}
            className="solution-heading"
            data-testid={`${pageName}:block.solution.${blockClass}.heading`}
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

Solutions.propTypes = {
  className: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Solutions)`
      ${styles}
    `),
  ),
)
