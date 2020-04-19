import * as React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Features.styles'
import FeatureItem from './FeatureItem'
import Wrapper from '../Wrapper'
import Heading from '../../ui-kit/core-design/Heading'

import images from '../../../data/express/features'
import translate from '../../../utils/translate-wrapper'

const Features = ({ className, t }) => (
  <Wrapper className={className} id="features">
    <Heading
      as="h2"
      className="section_heading"
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('express:features.title') }}
    />

    <div className="wrapper">
      <FeatureItem
        className="feature"
        heading={t('express:features.feature1.title')}
        textRegular={t('express:features.feature1.text')}
        images={images['dsgn']}
        imageDescription={t('express:imageAlt.feature1')}
      />

      <FeatureItem
        className="feature feature_shift-7"
        heading={t('express:features.feature2.title')}
        textRegular={t('express:features.feature2.text1')}
        textBold={t('express:features.feature2.text2')}
        images={images['stack']}
        imageDescription={t('express:imageAlt.feature2')}
      />

      <FeatureItem
        className="feature feature_shift-14"
        heading={t('express:features.feature3.title')}
        textRegular={t('express:features.feature3.text')}
        images={images['accessibility']}
        imageDescription={t('express:imageAlt.feature3')}
      />

      <FeatureItem
        className="feature"
        heading={t('express:features.feature4.title')}
        textRegular={t('express:features.feature4.text')}
        images={images['control']}
        imageDescription={t('express:imageAlt.feature4')}
      />

      <FeatureItem
        className="feature feature_shift-7"
        heading={t('express:features.feature5.title')}
        textRegular={t('express:features.feature5.text')}
        images={images['guarantees']}
        imageDescription={t('express:imageAlt.feature5')}
      />
    </div>
  </Wrapper>
)

Features.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(Features)`
  ${styles.base}
`)
