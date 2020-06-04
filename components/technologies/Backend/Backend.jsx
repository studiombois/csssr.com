import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Backend.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Picture from '../../ui-kit/Picture'
import Grid from '../../ui-kit/core-design/Grid'

import { dbsImages, kotlinImages, nodeImages } from '../../../data/technologies/backend'

const Backend = ({ className, l10n: { translations, language } }) => (
  <Grid as="section" className={className}>
    <Picture
      className={cn('picture', 'picture_dbs')}
      images={dbsImages}
      fallback={dbsImages.png}
      alt={translations.technologies.imgAlt.dbs}
    />

    <Heading className={cn('title', 'title_dbs')} as="h2" type="slab" size="m">
      {`MongoDB ${language === 'ru' ? 'и' : '&'} PostgreSQL`}
    </Heading>

    <SubHeading
      className={cn('text', 'text_dbs')}
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: translations.technologies.backend.dbs }}
    />

    <Picture
      className={cn('picture', 'picture_node')}
      images={nodeImages}
      fallback={nodeImages.png}
      alt={translations.technologies.imgAlt.node}
    />

    <Heading className={cn('title', 'title_node')} as="h2" type="regular" size="m">
      Node.js
    </Heading>

    <Text
      className={cn('text', 'text_node')}
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.technologies.backend.node }}
    />

    <Picture
      className={cn('picture', 'picture_kotlin')}
      images={kotlinImages}
      fallback={kotlinImages.png}
      alt={translations.technologies.imgAlt.kotlin}
    />

    <Heading className={cn('title', 'title_kotlin')} as="h2" type="regular" size="m">
      {language === 'ru' ? 'Бэкенд' : 'Back-end'}
    </Heading>

    <Text
      className={cn('text', 'text_kotlin')}
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.technologies.backend.kotlin }}
    />
  </Grid>
)

Backend.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Backend)`
    ${styles}
  `),
)
