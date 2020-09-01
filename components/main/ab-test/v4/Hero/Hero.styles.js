import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'
import getBackgroundImageSrcSet from '../../../../../utils/style/getBackgroundImageSrcSet'

import bgDesktopL from '../../../../../static/images/ab-test/Hero/v4/desktop.l/hero-bg.png?responsive'
import bgDesktopL_webp from '../../../../../static/images/ab-test/Hero/v4/desktop.l/hero-bg.png?responsive_and_webp'

import bgDesktopM from '../../../../../static/images/ab-test/Hero/v4/desktop.m/hero-bg.png?responsive'
import bgDesktopM_webp from '../../../../../static/images/ab-test/Hero/v4/desktop.m/hero-bg.png?responsive_and_webp'

import bgDesktopS from '../../../../../static/images/ab-test/Hero/v4/desktop.s/hero-bg.png?responsive'
import bgDesktopS_webp from '../../../../../static/images/ab-test/Hero/v4/desktop.s/hero-bg.png?responsive_and_webp'

import bgTabletAll from '../../../../../static/images/ab-test/Hero/v4/tablet.all/hero-bg.png?responsive'
import bgTabletAll_webp from '../../../../../static/images/ab-test/Hero/v4/tablet.all/hero-bg.png?responsive_and_webp'

import bgMobileAll from '../../../../../static/images/ab-test/Hero/v4/mobile.all/hero-bg.png?responsive'
import bgMobileAll_webp from '../../../../../static/images/ab-test/Hero/v4/mobile.all/hero-bg.png?responsive_and_webp'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  .title {
    font-family: Roboto Slab, sans-serif;
    font-weight: normal;
    font-size: 48px;
    line-height: 64px;
    color: ${colors.secondary.darken100};

    & > strong {
      font-family: Roboto, sans-serif;
    }
  }

  ${desktop.l} {
    & {
      padding-bottom: 154px;
    }

    &.hero-wrap {
      background-size: 1184px 656px !important;
      background-position: right 64px top 64px;
    }

    .title {
      grid-column: 2 / span 5;
      margin-top: 385px;
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: 121px;
    }

    &.hero-wrap {
      background-size: 880px 540px !important;
      background-position: right 16px top 64px;
    }

    .title {
      grid-column: 2 / span 6;
      margin-top: 297px;
      padding-left: 1px;
      padding-right: 36px;
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: 122px;
    }

    &.hero-wrap {
      background-size: 816px 544px !important;
      background-position: right 24px top 64px;
    }

    .title {
      grid-column: 2 / span 6;
      margin-top: 297px;
    }
  }

  ${tablet.all} {
    & {
      padding-bottom: ${calcRem(60)};
      margin-bottom: ${calcRem(-27)};
    }

    &.hero-wrap {
      background-size: ${calcRem(544)} ${calcRem(376)} !important;
      background-position: right ${calcRem(40)} top ${calcRem(64)};
    }

    .title {
      font-size: ${calcRem(32)};
      line-height: ${calcRem(48)};
      grid-column: 2 / span 6;
      margin-top: ${calcRem(232)};
      padding-left: ${calcRem(8)};
    }
  }

  ${mobile.all} {
    &.hero-wrap {
      background-size: ${calcRem(328)} ${calcRem(272)} !important;
      background-position: center top;
    }

    .title {
      grid-column: 1 / span 6;
      font-size: ${calcRem(32)};
      line-height: ${calcRem(48)};
      margin-top: ${calcRem(305)};
    }
  }
`
export const backgroundImagesStyles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.l} {
    ${getBackgroundImageSrcSet({png: bgDesktopL, webp: bgDesktopL_webp}, `.hero-wrap`)};
  }

  ${desktop.m} {
    ${getBackgroundImageSrcSet({png: bgDesktopM, webp: bgDesktopM_webp}, `.hero-wrap`)};
  }

  ${desktop.s} {
    ${getBackgroundImageSrcSet({png: bgDesktopS, webp: bgDesktopS_webp}, `.hero-wrap`)};
  }

  ${tablet.all} {
    ${getBackgroundImageSrcSet({png: bgTabletAll, webp: bgTabletAll_webp}, `.hero-wrap`)};
  }

  ${mobile.all} {
    ${getBackgroundImageSrcSet({png: bgMobileAll, webp: bgMobileAll_webp}, `.hero-wrap`)};
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}
