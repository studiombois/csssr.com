import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './TechnologyStack.styles'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import Heading from '../../../ui-kit/core-design/Heading'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Text from '../../../ui-kit/core-design/Text'
import Link from '../../../ui-kit/core-design/Link'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import Grid from '../../../ui-kit/core-design/Grid'

import technologyStack_desktop from '../../../../static/images/service/outsourcing-front-end/desktop.all/technologyStack.png?responsive'
import technologyStack_desktop_webp from '../../../../static/images/service/outsourcing-front-end/desktop.all/technologyStack.png?responsive_and_webp'

import technologyStack_mobile from '../../../../static/images/service/outsourcing-front-end/mobile.all/technologyStack.png?responsive'
import technologyStack_mobile_webp from '../../../../static/images/service/outsourcing-front-end/mobile.all/technologyStack.png?responsive_and_webp'

const TechnologyStack = ({ className, t, lng }) => (
  <Grid as="article" className={className}>
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:technologyStack.title') }}
      type="slab"
      size="m"
    />

    <SubHeading
      className="subtitle"
      as="p"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:technologyStack.subtitle') }}
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:technologyStack.description.0') }}
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:technologyStack.description.1') }}
    />

    <Link
      className="link"
      href={`/${lng}/tech-stack`}
      type="list"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:technologyStack.link') }}
    />

    <PictureForAllResolutions
      className="picture"
      images={{
        'desktop.all': { png: technologyStack_desktop, webp: technologyStack_desktop_webp },
        'mobile.all': { png: technologyStack_mobile, webp: technologyStack_mobile_webp },
      }}
      fallback={technologyStack_desktop}
      alt={t('outsourcingFrontEnd:imageAlt.technologyStack')}
    />
  </Grid>
)

TechnologyStack.propTypes = {
  className: string,
  t: func,
  lng: string,
}

export default translate(
  MsBrowserConsumer(styled(TechnologyStack)`
    ${styles}
  `),
)
