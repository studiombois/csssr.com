import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import ContactButton from '../../../ContactButton'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import Grid from '../../../ui-kit/core-design/Grid'

import hero_desktop from '../../../../static/images/service/mvp/desktop.all/hero.png?responsive'
import hero_desktop_webp from '../../../../static/images/service/mvp/desktop.all/hero.png?responsive_and_webp'

import hero_mobile from '../../../../static/images/service/mvp/mobile.all/hero.png?responsive'
import hero_mobile_webp from '../../../../static/images/service/mvp/mobile.all/hero.png?responsive_and_webp'

const Hero = ({ className, pageName, l10n: { translations } }) => (
  <article className={className}>
    <Grid as="div">
      <Heading
        className="title"
        as="h1"
        dangerouslySetInnerHTML={{ __html: translations.mvp.hero.title }}
        type="slab"
        size="l"
      />

      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.mvp.hero.description }}
      />

      <ContactButton
        className="button"
        pageName={pageName}
        dangerouslySetInnerHTML={{ __html: translations.mvp.hero.button }}
        testId="MVP:button:contactUs"
      />

      <PictureForAllResolutions
        className="picture"
        images={{
          'desktop.all': { png: hero_desktop, webp: hero_desktop_webp },
          'mobile.all': { png: hero_mobile, webp: hero_mobile_webp },
        }}
        fallback={hero_desktop}
        alt={translations.mvp.imgAlt.hero}
      />
    </Grid>
  </article>
)

Hero.propTypes = {
  className: string,
  pageName: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
