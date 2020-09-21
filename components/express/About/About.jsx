import * as React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './About.styles'

import Wrapper from '../Wrapper'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'

import aboutImagesData from '../../../data/express/about'

import { L10nConsumer } from '../../../utils/l10nProvider'

const About = ({ className, l10n: { translations } }) => (
  <Wrapper className={className} id="about">
    <div className="wrapper">
      <div className="heading-for-picture">
        <Heading
          as="h2"
          className="heading"
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: translations.express.aboutUs.title }}
        />

        <PictureSmart
          className="picture"
          requireImages={aboutImagesData.images}
          alt={translations.express.imgAlt.aboutUs}
        />
      </div>

      <Text
        className="text"
        type="regular"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.express.aboutUs.text1 }}
      />
    </div>

    <SubHeading
      className="subheading"
      type="regular"
      dangerouslySetInnerHTML={{ __html: translations.express.aboutUs.text2 }}
    />
  </Wrapper>
)

About.propTypes = {
  className: string,
}

export default L10nConsumer(styled(About)`
  ${styles.base}
`)
