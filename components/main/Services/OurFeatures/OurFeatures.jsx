import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './OurFeatures.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Link from '../../../ui-kit/core-design/Link'
import Text from '../../../ui-kit/core-design/Text'
import images from '../../../../data/main/ourFeatures'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const OurFeatures = ({ className, l10n: { translations, language } }) => {
  return (
    <Grid
      as="section"
      className={cn('our-features', className)}
      data-testid="Home:block.our-features"
    >
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
        data-testid="Home:link.feature1"
      />

      <PictureForAllResolutions
        className="picture"
        images={images}
        fallback={images['desktop.l'].png}
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
        data-testid="Home:link.feature2"
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
