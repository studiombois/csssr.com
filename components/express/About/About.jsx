import * as React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './About.styles'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Wrapper from '../Wrapper'

import aboutImagesData from '../../../data/express/about'

import translate from '../../../utils/translate-wrapper'

const About = ({ className, t }) => (
  <Wrapper className={className} id="about">
    <div className="wrapper">
      <div className="heading-for-picture">
        <Heading
          as="h2"
          className="heading"
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: t('express:aboutUs.title') }}
        />

        <PictureForAllResolutions
          className="picture"
          images={aboutImagesData.images}
          fallback={aboutImagesData.images['desktop.l']}
          alt={t('express:imgAlt.aboutUs')}
        />
      </div>

      <Text
        className="text"
        type="regular"
        size="m"
        dangerouslySetInnerHTML={{ __html: t('express:aboutUs.text1') }}
      />
    </div>

    <SubHeading
      className="subheading"
      type="regular"
      dangerouslySetInnerHTML={{ __html: t('express:aboutUs.text2') }}
    />
  </Wrapper>
)

About.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(About)`
  ${styles.base}
`)
