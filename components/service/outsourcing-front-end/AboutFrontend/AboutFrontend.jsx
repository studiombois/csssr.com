import React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './AboutFrontend.styles'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import Heading from '../../../ui-kit/core-design/Heading'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Text from '../../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import Grid from '../../../ui-kit/core-design/Grid'

import aboutFrontend_desktop from '../../../../static/images/service/outsourcing-front-end/desktop.all/aboutFrontend.png?responsive'
import aboutFrontend_desktop_webp from '../../../../static/images/service/outsourcing-front-end/desktop.all/aboutFrontend.png?responsive_and_webp'

import aboutFrontend_mobile from '../../../../static/images/service/outsourcing-front-end/mobile.all/aboutFrontend.png?responsive'
import aboutFrontend_mobile_webp from '../../../../static/images/service/outsourcing-front-end/mobile.all/aboutFrontend.png?responsive_and_webp'

const AboutFrontend = ({ className, t }) => (
  <Grid as="article" className={className}>
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:aboutFrontend.title') }}
      type="slab"
      size="m"
    />

    <SubHeading
      className="subtitle"
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:aboutFrontend.subtitle') }}
    />

    <Text
      className="description"
      as="p"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:aboutFrontend.description') }}
    />

    <PictureForAllResolutions
      className="picture"
      images={{
        'desktop.all': { png: aboutFrontend_desktop, webp: aboutFrontend_desktop_webp },
        'mobile.all': { png: aboutFrontend_mobile, webp: aboutFrontend_mobile_webp },
      }}
      fallback={aboutFrontend_desktop}
      alt={t('outsourcingFrontEnd:imageAlt.aboutFrontend')}
    />
  </Grid>
)

AboutFrontend.propTypes = {
  className: string,
  t: func,
}

export default translate(
  MsBrowserConsumer(styled(AboutFrontend)`
    ${styles}
  `),
)
