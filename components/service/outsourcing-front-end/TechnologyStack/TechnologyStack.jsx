import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './TechnologyStack.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
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

const TechnologyStack = ({ className, l10n: { translations, language } }) => (
  <Grid as="article" className={className}>
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.technologyStack.title }}
      type="slab"
      size="m"
    />

    <SubHeading
      className="subtitle"
      type="slab"
      as="p"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.technologyStack.subtitle,
      }}
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.technologyStack.description[0],
      }}
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.technologyStack.description[1],
      }}
    />

    <Link
      className="link"
      href={`/${language}/tech-stack`}
      type="list"
      size="m"
      isNextLink
      dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.technologyStack.link }}
      data-testid="Outsourcing:link:techstack"
    />

    <PictureForAllResolutions
      className="picture"
      images={{
        'desktop.all': { png: technologyStack_desktop, webp: technologyStack_desktop_webp },
        'mobile.all': { png: technologyStack_mobile, webp: technologyStack_mobile_webp },
      }}
      fallback={technologyStack_desktop}
      alt={translations.outsourcingFrontEnd.imgAlt.technologyStack}
    />
  </Grid>
)

TechnologyStack.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(TechnologyStack)`
    ${styles}
  `),
)
