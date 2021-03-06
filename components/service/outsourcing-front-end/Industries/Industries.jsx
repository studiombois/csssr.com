import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Industries.styles'

import Card from '../../../Card'
import Heading from '../../../ui-kit/core-design/Heading'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Grid from '../../../ui-kit/core-design/Grid'

import industries from '../../../../data/service/outsourcing-front-end/industries'

import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const Industries = ({ className, l10n: { translations, language } }) => {
  return (
    <Grid as="article" className={cn('industries', className)} data-testid="Home:block.industries">
      <Heading
        className="title"
        as="h2"
        dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.industries.title }}
        type="slab"
        size="m"
      />

      <SubHeading
        className="subtitle"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.industries.subtitle }}
      />

      {industries.map(({ id, testId, title, description, alt, href, images, imagesHovered }) => (
        <Card
          className="card"
          key={id}
          id={id}
          testId={testId}
          title={title}
          description={description}
          href={`/${language}/industry/${href}`}
          images={images}
          imagesHovered={imagesHovered}
          alt={alt}
          isNextLink
        />
      ))}
    </Grid>
  )
}

Industries.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Industries)`
    ${styles}
  `),
)
