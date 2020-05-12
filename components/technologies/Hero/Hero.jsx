import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Hero.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'

import { javascriptImages, typescriptImages } from '../../../data/technologies/hero'

const Hero = ({ className, l10n: { translations } }) => (
  <article className={className}>
    <Grid as="div" className="grid">
      <Heading
        className="title"
        as="h1"
        dangerouslySetInnerHTML={{ __html: translations.technologies.hero.title }}
        type="slab"
        size="l"
      />

      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.technologies.hero.description }}
      />

      <PictureForAllResolutions
        className={cn('picture', 'picture_javascript')}
        images={javascriptImages}
        fallback={javascriptImages['desktop.l']}
        alt={translations.technologies.imgAlt.javascript}
      />

      <Text
        className="javascript"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.technologies.hero.javascript }}
      />

      <PictureForAllResolutions
        className={cn('picture', 'picture_typescript')}
        images={typescriptImages}
        fallback={typescriptImages['desktop.l']}
        alt={translations.technologies.imgAlt.typescript}
      />

      <SubHeading
        className="typescript"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: translations.technologies.hero.typescript }}
      />
    </Grid>
  </article>
)

Hero.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
