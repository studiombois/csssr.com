import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Link from '../../ui-kit/core-design/Link'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Hero = ({
  className,
  id,
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
        />

        <Heading.H3
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
              className="paragraph"
            />
          ))}
        </div>

        <div className="pic-wrapper">
          <PictureForAllResolutions
            images={images}
            fallback={images['desktop.l'].png}
            alt={imgAlt(translations)}
            className="image"
          />
        </div>
      </Grid>
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
