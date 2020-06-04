import * as React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Features.styles'
import FeatureItem from './FeatureItem'
import Wrapper from '../Wrapper'
import Heading from '../../ui-kit/core-design/Heading'

import images from '../../../data/express/features'
import { L10nConsumer } from '../../../utils/l10nProvider'

const Features = ({ className, l10n: { translations } }) => (
  <Wrapper className={className} id="features">
    <Heading
      as="h2"
      className="section_heading"
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.express.features.title }}
    />

    <div className="wrapper">
      <FeatureItem
        className="feature"
        heading={translations.express.features.feature1.title}
        textRegular={translations.express.features.feature1.text}
        images={images['dsgn']}
        imageDescription={translations.express.imgAlt.feature1}
      />

      <FeatureItem
        className="feature feature_shift-7"
        heading={translations.express.features.feature2.title}
        textRegular={translations.express.features.feature2.text1}
        textBold={translations.express.features.feature2.text2}
        images={images['stack']}
        imageDescription={translations.express.imgAlt.feature2}
      />

      <FeatureItem
        className="feature feature_shift-14"
        heading={translations.express.features.feature3.title}
        textRegular={translations.express.features.feature3.text}
        images={images['accessibility']}
        imageDescription={translations.express.imgAlt.feature3}
      />

      <FeatureItem
        className="feature"
        heading={translations.express.features.feature4.title}
        textRegular={translations.express.features.feature4.text}
        images={images['control']}
        imageDescription={translations.express.imgAlt.feature4}
      />

      <FeatureItem
        className="feature feature_shift-7"
        heading={translations.express.features.feature5.title}
        textRegular={translations.express.features.feature5.text}
        images={images['guarantees']}
        imageDescription={translations.express.imgAlt.feature5}
      />
    </div>
  </Wrapper>
)

Features.propTypes = {
  className: string,
}

export default L10nConsumer(styled(Features)`
  ${styles.base}
`)
