import React from 'react'
import { object, string } from 'prop-types'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import styles, { backgroundImagesStyles } from './Hero.styles'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Link from '../../ui-kit/core-design/Link'
import Text from '../../ui-kit/core-design/Text'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Hero = ({
  className,
  id,
  projectId,
  content: { heading, link, subHeading, text, images, imgAlt },
  l10n: { translations },
}) => {
  return (
    <section className={className} id={id}>
      <Grid className="grid" as="div">
        <Heading.H1
          type="slab"
          size="l"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="heading"
        />

        <Link
          className="link"
          href={link(translations)}
          type="list"
          target="_blank"
          rel="noreferrer noopener"
          dangerouslySetInnerHTML={{ __html: link(translations) }}
          data-testid="Project:link.project-site"
        />

        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: subHeading(translations) }}
          className="sub-heading"
        />

        <div className="text">
          {text.map((item, index) => (
            <Text
              key={`paragraph-${index}`}
              type="strong"
              size="m"
              as="p"
              dangerouslySetInnerHTML={{ __html: item(translations) }}
              className={`paragraph paragraph_${index}`}
            />
          ))}
        </div>

        <div className={cn('pic-wrapper', projectId === 'mindbox' && `pic-wrapper_${projectId}`)}>
          <PictureSmart requireImages={images} alt={imgAlt(translations)} className="image" />
        </div>
      </Grid>
      <Global styles={backgroundImagesStyles(className)} />
    </section>
  )
}

Hero.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
