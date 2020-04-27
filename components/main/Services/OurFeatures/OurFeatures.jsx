import React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './OurFeatures.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Link from '../../../ui-kit/core-design/Link'
import Text from '../../../ui-kit/core-design/Text'
import images from '../../../../data/main/ourFeatures'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const OurFeatures = ({ className, t, lng }) => {
  return (
    <Grid as="section" className={cn('our-features', className)}>
      <SubHeading
        className={cn('feature', 'feature_1')}
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: t('main:services.ourFeatures.feature1.text') }}
      />
      <Link
        className="link"
        href={`${lng}/way-of-work`}
        type="list"
        size="m"
        dangerouslySetInnerHTML={{ __html: t('main:services.ourFeatures.feature1.link') }}
      />

      <PictureForAllResolutions
        className="picture"
        images={images}
        fallback={images['desktop.l'].png}
        alt={t('main:imageAlt.ourFeatures')}
      />

      <Text
        className={cn('feature', 'feature_2')}
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: t('main:services.ourFeatures.feature2.text') }}
      />
      <Link
        className="link"
        href={`${lng}/tech-stack`}
        type="list"
        size="m"
        dangerouslySetInnerHTML={{ __html: t('main:services.ourFeatures.feature2.link') }}
      />
    </Grid>
  )
}

OurFeatures.propTypes = {
  className: string,
  t: func,
}

export default translate(
  MsBrowserConsumer(styled(OurFeatures)`
    ${styles}
  `),
)
