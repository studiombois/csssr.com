import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'
import getBackgroundImageSrcSet from '../../../../../utils/style/getBackgroundImageSrcSet'

import bgDesktopL from '../../../../../static/images/ab-test/Hero/v2/desktop.l/hero-bg.png?responsive'
import bgDesktopL_webp from '../../../../../static/images/ab-test/Hero/v2/desktop.l/hero-bg.png?responsive_and_webp'

import bgDesktopM from '../../../../../static/images/ab-test/Hero/v2/desktop.m/hero-bg.png?responsive'
import bgDesktopM_webp from '../../../../../static/images/ab-test/Hero/v2/desktop.m/hero-bg.png?responsive_and_webp'

import bgDesktopS from '../../../../../static/images/ab-test/Hero/v2/desktop.s/hero-bg.png?responsive'
import bgDesktopS_webp from '../../../../../static/images/ab-test/Hero/v2/desktop.s/hero-bg.png?responsive_and_webp'

import bgTabletAll from '../../../../../static/images/ab-test/Hero/v2/tablet.all/hero-bg.png?responsive'
import bgTabletAll_webp from '../../../../../static/images/ab-test/Hero/v2/tablet.all/hero-bg.png?responsive_and_webp'

import bgMobileAll from '../../../../../static/images/ab-test/Hero/v2/mobile.all/hero-bg.png?responsive'
import bgMobileAll_webp from '../../../../../static/images/ab-test/Hero/v2/mobile.all/hero-bg.png?responsive_and_webp'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  .title {
    margin-top: 192px;
    color: ${colors.secondary.darken100};
  }

  .description {
    font-family: Roboto, sans-serif;
    font-weight: 200;
    position: relative;
    color: ${colors.secondary.darken100};
  }

  ${desktop.l} {
    & {
      padding-bottom: 152px;
    }

    &.hero-wrap {
      background-size: 1640px 840px !important;
      background-position: right 64px top 64px;
    }

    .title {
      grid-column: 2 / span 6;
      margin-top: 312px;
    }

    .description {
      grid-column: 2 / span 6;
      margin-top: 80px;
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: 124px;
    }

    &.hero-wrap {
      background-size: 992px 792px !important;
      background-position: right 16px top 64px;
    }

    .title {
      grid-column: 2 / span 7;
      margin-top: 312px;
      padding-right: 36px;
    }

    .description {
      grid-column: 2 / span 8;
      margin-top: 82px;
      padding-right: 86px;
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: 122px;
    }

    &.hero-wrap {
      background-size: 712px 528px !important;
      background-position: right 24px top 64px;
    }

    .title {
      grid-column: 2 / span 7;
      margin-top: 293px;
      padding-right: 36px;
    }

    .description {
      grid-column: 2 / span 8;
      margin-top: 82px;
    }
  }

  ${tablet.all} {
    & {
      padding-bottom: ${calcRem(50)};
      margin-bottom: ${calcRem(-16)};
    }

    &.hero-wrap {
      background-size: ${calcRem(544)} ${calcRem(440)} !important;
      background-position: right ${calcRem(40)} top ${calcRem(64)};
    }

    .title {
      grid-column: 2 / span 6;
      margin-top: ${calcRem(232)};
      padding-right: ${calcRem(36)};
    }

    .description {
      grid-column: 2 / span 6;
      margin-top: ${calcRem(32)};
    }
  }

  ${mobile.all} {
    &.hero-wrap {
      background-size: ${calcRem(328)} ${calcRem(272)} !important;
      background-position: center top;
    }

    .title,
    .description {
      grid-column: 1 / span 6;
    }

    .title {
      font-size: ${calcRem(32)};
      line-height: ${calcRem(48)};
      margin-top: ${calcRem(305)};
      margin-right: ${calcRem(-4)};
    }

    .description {
      margin-top: ${calcRem(23)};

      & > strong{
        white-space: nowrap;
      }
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
