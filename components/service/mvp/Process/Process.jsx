import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Process.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import stages from '../../../../data/service/mvp/stages'

import Item from './Item'
import Heading from '../../../ui-kit/core-design/Heading'
import Grid from '../../../ui-kit/core-design/Grid'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'

import solar_system_desktop_l from '../../../../static/images/service/mvp/desktop.l/solar-system.png?responsive'
import solar_system_desktop_l_webp from '../../../../static/images/service/mvp/desktop.l/solar-system.png?responsive_and_webp'

import solar_system_desktop_m from '../../../../static/images/service/mvp/desktop.m/solar-system.png?responsive'
import solar_system_desktop_m_webp from '../../../../static/images/service/mvp/desktop.m/solar-system.png?responsive_and_webp'

import solar_system_desktop_s from '../../../../static/images/service/mvp/desktop.s/solar-system.png?responsive'
import solar_system_desktop_s_webp from '../../../../static/images/service/mvp/desktop.s/solar-system.png?responsive_and_webp'

import solar_system_tablet_all from '../../../../static/images/service/mvp/tablet.all/solar-system.png?responsive'
import solar_system_tablet_all_webp from '../../../../static/images/service/mvp/tablet.all/solar-system.png?responsive_and_webp'

import solar_system_mobile_all from '../../../../static/images/service/mvp/mobile.all/solar-system.png?responsive'
import solar_system_mobile_all_webp from '../../../../static/images/service/mvp/mobile.all/solar-system.png?responsive_and_webp'

const Process = ({ className, l10n: { translations } }) => (
  <section className={className}>
    <PictureForAllResolutions
      className="picture"
      images={{
        'desktop.l': { png: solar_system_desktop_l, webp: solar_system_desktop_l_webp },
        'desktop.m': { png: solar_system_desktop_m, webp: solar_system_desktop_m_webp },
        'desktop.s': { png: solar_system_desktop_s, webp: solar_system_desktop_s_webp },
        'tablet.all': { png: solar_system_tablet_all, webp: solar_system_tablet_all_webp },
        'mobile.all': { png: solar_system_mobile_all, webp: solar_system_mobile_all_webp },
      }}
      fallback={solar_system_desktop_l}
      alt={translations.mvp.imgAlt.solar_system}
    />

    <Grid as="div" className="content">
      <Heading
        as="h2"
        className="title"
        dangerouslySetInnerHTML={{ __html: translations.mvp.process.title }}
        type="slab"
        size="m"
      />

      {stages.map(({ id, link }) => (
        <Item className={cn('stage', `stage_${id}`)} key={id} id={id} link={link} />
      ))}
    </Grid>
  </section>
)

Process.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Process)`
    ${styles}
  `),
)
