import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import styles from './Development.styles'

import { review, scrumban } from '../../../data/way-of-work/development'

const Development = ({ className, id, t }) => {
  return (
    <section className={className} id={id}>
      <Grid>
        <Heading.H1
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: t('wayOfWork:development.title') }}
          className="heading"
        />

        <PictureForAllResolutions
          className="scrumbanImg"
          images={scrumban.img}
          fallback={scrumban.img['desktop.l']}
          alt={t(scrumban.imageAlt)}
        />

        <Heading.H2
          type="regular"
          size="l"
          dangerouslySetInnerHTML={{ __html: t(scrumban.title) }}
          className="scrumbanTitle"
        />

        <SubHeading
          type="slab"
          dangerouslySetInnerHTML={{
            __html: t(scrumban.description),
          }}
          className="scrumbanSubHeading"
        />

        <div className="scrumbanTextWrap">
          <Text
            className="scrumbanText"
            type="strong"
            size="m"
            dangerouslySetInnerHTML={{ __html: t(scrumban.text) }}
          />

          <Text
            className="scrumbanTextTwo"
            type="strong"
            size="m"
            dangerouslySetInnerHTML={{ __html: t(scrumban.textTwo) }}
          />
        </div>

        <PictureForAllResolutions
          className="reviewImg"
          images={review.img}
          fallback={review.img['desktop.l']}
          alt={t(review.imageAlt)}
        />

        <Heading.H2
          type="regular"
          size="l"
          dangerouslySetInnerHTML={{ __html: t(review.title) }}
          className="reviewTitle"
        />

        <SubHeading
          type="slab"
          dangerouslySetInnerHTML={{
            __html: t(review.description),
          }}
          className="reviewSubHeading"
        />

        <Text
          className="reviewText"
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(review.text) }}
        />
      </Grid>
    </section>
  )
}

Development.propTypes = {
  className: string,
  id: string,
}

export default translate(
  MsBrowserConsumer(styled(Development)`
    ${styles}
  `),
)
