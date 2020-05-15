import React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Industries.styles'

import Card from '../Card'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Grid from '../../ui-kit/core-design/Grid'

import industries from '../../../data/main/industries'

import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Industries = ({ className, t, lng }) => {
  return (
    <Grid as="article" className={cn('industries', className)}>
      <Heading
        className="title"
        as="h2"
        dangerouslySetInnerHTML={{ __html: t('main:industries.title') }}
        type="slab"
        size="m"
      />

      <SubHeading
        className="subtitle"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: t('main:industries.subtitle') }}
      />

      {industries.map(({ id, title, description, href, images, imagesHovered, fallback }) => (
        <Card
          className="card"
          key={id}
          id={id}
          title={title}
          description={description}
          href={`/${lng}/industry/${href}`}
          images={images}
          imagesHovered={imagesHovered}
          fallback={fallback}
          isNextLink
        />
      ))}
    </Grid>
  )
}

Industries.propTypes = {
  className: string,
  t: func,
}

export default translate(
  MsBrowserConsumer(styled(Industries)`
    ${styles}
  `),
)
