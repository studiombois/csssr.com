import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Backend.styles'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Picture from '../../ui-kit/Picture'
import Grid from '../../ui-kit/core-design/Grid'

import { nodeImages, dbsImages, kotlinImages } from '../../../data/technologies/backend'

const Backend = ({ className, t, lng }) => (
  <Grid as="section" className={className}>
    <Picture
      className={cn('picture', 'picture_dbs')}
      images={dbsImages}
      fallback={dbsImages.png}
      alt={t('technologies:imageAlt.dbs')}
    />

    <Heading className={cn('title', 'title_dbs')} as="h2" type="slab" size="m">
      {`MongoDB ${lng === 'ru' ? 'или' : 'or'} PostgreSQL`}
    </Heading>

    <SubHeading
      className={cn('text', 'text_dbs')}
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: t('technologies:backend.dbs') }}
    />

    <Picture
      className={cn('picture', 'picture_node')}
      images={nodeImages}
      fallback={nodeImages.png}
      alt={t('technologies:imageAlt.node')}
    />

    <Heading className={cn('title', 'title_node')} as="h2" type="regular" size="m">
      Node.js
    </Heading>

    <Text
            className={cn('text', 'text_node')}
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('technologies:backend.node') }}
    />

    <Picture
      className={cn('picture', 'picture_kotlin')}
      images={kotlinImages}
      fallback={kotlinImages.png}
      alt={t('technologies:imageAlt.kotlin')}
    />

    <Heading className={cn('title', 'title_kotlin')} as="h2" type="regular" size="m">
      Бэкенд
    </Heading>

    <Text
      className={cn('text', 'text_kotlin')}
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('technologies:backend.kotlin') }}
    />
  </Grid>
)

Backend.propTypes = {
  className: string,
  t: func,
  lng: string,
}

export default translate()(
  MsBrowserConsumer(styled(Backend)`
    ${styles}
  `),
)
