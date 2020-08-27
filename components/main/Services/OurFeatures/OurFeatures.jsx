import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import styles from './OurFeatures.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Link from '../../../ui-kit/core-design/Link'
import Text from '../../../ui-kit/core-design/Text'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const ourFeaturesImages = require.context('../../../../public/images/main/perfect?csssr-images')

const OurFeatures = ({ className, l10n: { translations, language } }) => {
  return (
    <Grid as="section" className={cn('our-features', className)}>
      <SubHeading
        className={cn('feature', 'feature_1')}
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: translations.main.services.ourFeatures.feature1.text }}
      />
      <Link
        className="link"
        href={`${language}/way-of-work`}
        type="list"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.main.services.ourFeatures.feature1.link }}
      />

      <PictureSmart
        className="picture"
        requireImages={ourFeaturesImages}
        alt={translations.main.imgAlt.ourFeatures}
      />

      <Text
        className={cn('feature', 'feature_2')}
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.main.services.ourFeatures.feature2.text }}
      />
      <Link
        className="link"
        href={`${language}/tech-stack`}
        type="list"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.main.services.ourFeatures.feature2.link }}
      />
    </Grid>
  )
}

OurFeatures.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(OurFeatures)`
    ${styles}
  `),
)
