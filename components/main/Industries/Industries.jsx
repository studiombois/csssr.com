import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Industries.styles'

import Industry from './Industry'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Grid from '../../ui-kit/core-design/Grid'

import industries from '../../../data/main/industries'

import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Industries = ({ className, t }) => {
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

      {industries.map(({ id, href, images }) => (
        <Industry key={id} id={id} href={href} images={images} />
      ))}
    </Grid>
  )
}

Industries.propTypes = {
  className: string,
  t: func,
}

export default styled(translate()(MsBrowserConsumer(Industries)))`
  ${styles}
`
