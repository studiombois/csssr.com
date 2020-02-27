import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Hero.styles'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'

import { javascriptImages, typescriptImages } from '../../../data/technologies/hero'

const Hero = ({ className, t }) => (
  <article className={className}>
    <Grid as="div" className="grid">
      <Heading
        className="title"
        as="h1"
        dangerouslySetInnerHTML={{ __html: t('technologies:hero.title') }}
        type="slab"
        size="l"
      />

      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: t('technologies:hero.description') }}
      />

      <PictureForAllResolutions
        className={cn('picture', 'picture_javascript')}
        images={javascriptImages}
        fallback={javascriptImages['desktop.l']}
        alt={t('technologies:imageAlt.javascript')}
      />

      <Text
        className="javascript"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: t('technologies:hero.javascript') }}
      />

      <PictureForAllResolutions
        className={cn('picture', 'picture_typescript')}
        images={typescriptImages}
        fallback={typescriptImages['desktop.l']}
        alt={t('technologies:imageAlt.typescript')}
      />

      <SubHeading
        className="typescript"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: t('technologies:hero.typescript') }}
      />
    </Grid>
  </article>
)

Hero.propTypes = {
  className: string,
  t: func,
}

export default translate()(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
