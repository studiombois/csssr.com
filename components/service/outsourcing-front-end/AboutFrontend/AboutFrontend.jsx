import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './AboutFrontend.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
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

const AboutFrontend = ({ className, l10n: { translations } }) => (
  <Grid as="article" className={className}>
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.aboutFrontend.title }}
      type="slab"
      size="m"
    />

    <SubHeading
      className="subtitle"
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.aboutFrontend.subtitle }}
    />

    <Text
      className="description"
      as="p"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.aboutFrontend.description,
      }}
    />

    <PictureForAllResolutions
      className="picture"
      images={{
        'desktop.all': { png: aboutFrontend_desktop, webp: aboutFrontend_desktop_webp },
        'mobile.all': { png: aboutFrontend_mobile, webp: aboutFrontend_mobile_webp },
      }}
      fallback={aboutFrontend_desktop}
      alt={translations.outsourcingFrontEnd.imgAlt.aboutFrontend}
    />
  </Grid>
)

AboutFrontend.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(AboutFrontend)`
    ${styles}
  `),
)
