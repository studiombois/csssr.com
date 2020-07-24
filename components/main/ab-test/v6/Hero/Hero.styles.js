import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'
import getBackgroundImageSrcSet from '../../../../../utils/style/getBackgroundImageSrcSet'

import bgDesktopL from '../../../../../static/images/ab-test/Hero/v6/desktop.l/hero-bg.png?responsive'
import bgDesktopL_webp from '../../../../../static/images/ab-test/Hero/v6/desktop.l/hero-bg.png?responsive_and_webp'

import bgDesktopM from '../../../../../static/images/ab-test/Hero/v6/desktop.m/hero-bg.png?responsive'
import bgDesktopM_webp from '../../../../../static/images/ab-test/Hero/v6/desktop.m/hero-bg.png?responsive_and_webp'

import bgDesktopS from '../../../../../static/images/ab-test/Hero/v6/desktop.s/hero-bg.png?responsive'
import bgDesktopS_webp from '../../../../../static/images/ab-test/Hero/v6/desktop.s/hero-bg.png?responsive_and_webp'

import bgTabletAll from '../../../../../static/images/ab-test/Hero/v6/tablet.all/hero-bg.png?responsive'
import bgTabletAll_webp from '../../../../../static/images/ab-test/Hero/v6/tablet.all/hero-bg.png?responsive_and_webp'

import bgMobileAll from '../../../../../static/images/ab-test/Hero/v6/mobile.all/hero-bg.png?responsive'
import bgMobileAll_webp from '../../../../../static/images/ab-test/Hero/v6/mobile.all/hero-bg.png?responsive_and_webp'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  .title {
    font-weight: normal;
    color: ${colors.secondary.darken100};

    & > span {
      display: block;
      font-family: Roboto, sans-serif;
      font-weight: 900;
    }
  }

  ${desktop.all} {
    .title {
      font-weight: normal;
      font-size: 48px;
      line-height: 64px;

      & > span {
        font-size: 40px;
        line-height: 56px;
      }
    }
  }

  ${desktop.l} {
    & {
      padding-bottom: 169px;
    }

    &.hero-wrap {
      background-size: 880px 528px !important;
      background-position: right 216px top 64px;
    }

    .title {
      grid-column: 2 / span 5;
      margin-top: 207px;

      & > span {
        margin-bottom: 9px;
      }
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: 170px;
    }

    &.hero-wrap {
      background-size: 768px 528px !important;
      background-position: right 16px top 64px;
    }

    .title {
      grid-column: 2 / span 6;
      margin-top: 207px;

      & > span {
        margin-bottom: 8px;
      }
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: 188px;
    }

    &.hero-wrap {
      background-size: 816px 448px !important;
      background-position: right 24px top 64px;
    }

    .title {
      grid-column: 2 / span 7;
      margin-top: 207px;

      & > span {
        margin-bottom: 7px;
      }
    }
  }

  ${tablet.all} {
    & {
      padding-bottom: ${calcRem(90)};
      margin-bottom: ${calcRem(-57)};
    }

    &.hero-wrap {
      background-size: ${calcRem(624)} ${calcRem(376)} !important;
      background-position: right ${calcRem(40)} top ${calcRem(64)};
    }

    .title {
      grid-column: 2 / span 7;
      margin-top: ${calcRem(164)};
      padding-right: ${calcRem(64)};
      padding-left: ${calcRem(8)};

      & > span {
        font-size: ${calcRem(32)};
        line-height: ${calcRem(40)};
        margin-bottom: ${calcRem(4)};
      }
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

      & > span {
        line-height: ${calcRem(40)};
        margin-bottom: ${calcRem(4)};
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
