import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PictureForAllResolutions from '../ui-kit/PictureForAllResolutions'
import Picture from '../ui-kit/Picture'

import ultramarine_desktop_all from '../../static/images/main/desktop.all/ultramarine.png?responsive'
import ultramarine_desktop_m from '../../static/images/main/desktop.m/ultramarine.png?responsive'
import ultramarine_desktop_s from '../../static/images/main/desktop.s/ultramarine.png?responsive'
import ultramarine_tablet_all from '../../static/images/main/tablet.all/ultramarine.png?responsive'
import ultramarine_mobile_all from '../../static/images/main/mobile.all/ultramarine.png?responsive'

import ultramarine_desktop_all_webp from '../../static/images/main/desktop.all/ultramarine.png?responsive_and_webp'
import ultramarine_desktop_m_webp from '../../static/images/main/desktop.m/ultramarine.png?responsive_and_webp'
import ultramarine_desktop_s_webp from '../../static/images/main/desktop.s/ultramarine.png?responsive_and_webp'
import ultramarine_tablet_all_webp from '../../static/images/main/tablet.all/ultramarine.png?responsive_and_webp'
import ultramarine_mobile_all_webp from '../../static/images/main/mobile.all/ultramarine.png?responsive_and_webp'

import ultramarine from '../../static/images/main/ultramarine.png?responsive'
import ultramarine_webp from '../../static/images/main/ultramarine.png?responsive_and_webp'

const MainPage = ({ className }) => (
  <div className={className}>
    <p>Это просто пустая страница.</p>
    <p>
      Мы можете начать изменять и заполнять компонентами из библиотеки{' '}
      <code>@csssr/core-design</code> эту страницу как вам угодно или создать новую. Документацию по
      существующим компонентам можно найти{' '}
      <a href="http://core-design.csssr.ru/" target="_blank" rel="noopener noreferrer">
        тут
      </a>
      .
    </p>
    <p>
      Для создания своих собственных компонентов воспользуйтесь командой{' '}
      <code>@csssr/core-design core-design create-component</code>.
    </p>
    <PictureForAllResolutions
      images={{
        'desktop.all': { png: ultramarine_desktop_all, webp: ultramarine_desktop_all_webp },
        'desktop.m': { png: ultramarine_desktop_m, webp: ultramarine_desktop_m_webp },
        'desktop.s': { png: ultramarine_desktop_s, webp: ultramarine_desktop_s_webp },
        'tablet.all': { png: ultramarine_tablet_all, webp: ultramarine_tablet_all_webp },
        'mobile.all': { png: ultramarine_mobile_all, webp: ultramarine_mobile_all_webp },
      }}
      fallback={ultramarine_desktop_all}
      alt="Сержант Ультрамаринов"
      css={css`
        width: 200px;
        background-color: grey;
      `}
    />

    <Picture
      images={{ png: ultramarine, webp: ultramarine_webp }}
      fallback={ultramarine}
      alt="Сержант Ультрамаринов"
      css={css`
        width: 200px;
        background-color: paleturquoise;
      `}
    />
  </div>
)

MainPage.propTypes = {
  className: string,
}

export default styled(MainPage)`
  code {
    background-color: ${props => props.theme.colors.secondary.origin};
  }
`
