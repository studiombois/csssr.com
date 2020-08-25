import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import styles from './Organized.styles'

import { skydiverImages, skydiversImages } from '../../../data/way-of-work/organized'

const Organized = ({ className, id, l10n: { translations } }) => {
  return (
    <section className={className} id={id}>
      <Grid>
        <div className="header">
          <Heading.H2
            type="slab"
            size="m"
            dangerouslySetInnerHTML={{ __html: translations.wayOfWork.organized.title }}
            className="heading"
          />

          <SubHeading
            type="slab"
            dangerouslySetInnerHTML={{
              __html: translations.wayOfWork.organized.description,
            }}
            className="subHeading"
          />
        </div>

        <div className="skydiverWrap">
          <PictureForAllResolutions
            className="skydiver"
            images={skydiverImages}
            fallback={skydiverImages['desktop.l']}
            alt={translations.wayOfWork.organized.imgAlt.skydiver}
          />
        </div>

        <div className="textWrap">
          <Text
            className="firstParagraph"
            type="strong"
            size="m"
            dangerouslySetInnerHTML={{ __html: translations.wayOfWork.organized.firstParagraph }}
          />

          <Text
            className="secondParagraph"
            type="strong"
            size="m"
            dangerouslySetInnerHTML={{ __html: translations.wayOfWork.organized.secondParagraph }}
          />
        </div>

        <SubHeading
          type="slab"
          dangerouslySetInnerHTML={{ __html: translations.wayOfWork.organized.footer }}
          className="footer"
        />

        <div className="skydiversWrap">
          <PictureForAllResolutions
            className="skydivers"
            images={skydiversImages}
            fallback={skydiversImages['desktop.l']}
            alt={translations.wayOfWork.organized.imgAlt.skydivers}
          />
        </div>
      </Grid>
    </section>
  )
}

Organized.propTypes = {
  className: string,
  id: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Organized)`
    ${styles}
  `),
)
