import React from 'react'
import { string, object, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import translate from '../../../utils/translate-wrapper'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Link from '../../ui-kit/core-design/Link'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Hero = ({
  t,
  className,
  id,
  content: { heading, link, subHeading, text, images, imgAlt },
}) => {
  return (
    <section className={className} id={id}>
      <Grid className="grid" as="div">
        <Heading.H2
          type="slab"
          size="l"
          dangerouslySetInnerHTML={{ __html: t(heading) }}
          className="heading"
        />

        <Link
          className="link"
          href={t(link)}
          type="list"
          target="_blank"
          rel="noreferrer noopener"
          dangerouslySetInnerHTML={{ __html: t(link) }}
        />

        <Heading.H3
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(subHeading) }}
          className="sub-heading"
        />

        <div className="text">
          {text.map((item, index) => (
            <Text
              key={`paragraph-${index}`}
              type="strong"
              size="m"
              as="p"
              dangerouslySetInnerHTML={{ __html: t(item) }}
              className="paragraph"
            />
          ))}
        </div>

        <div className="pic-wrapper">
          <PictureForAllResolutions
            images={images}
            fallback={images['desktop.l'].png}
            alt={t(imgAlt)}
            className="image"
          />
        </div>
      </Grid>
    </section>
  )
}

Hero.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
