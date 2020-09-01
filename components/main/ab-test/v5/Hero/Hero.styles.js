import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'
import getBackgroundImageSrcSet from '../../../../../utils/style/getBackgroundImageSrcSet'

import bgDesktopL from '../../../../../static/images/ab-test/Hero/v5/desktop.l/hero-bg.png?responsive'
import bgDesktopL_webp from '../../../../../static/images/ab-test/Hero/v5/desktop.l/hero-bg.png?responsive_and_webp'

import bgDesktopM from '../../../../../static/images/ab-test/Hero/v5/desktop.m/hero-bg.png?responsive'
import bgDesktopM_webp from '../../../../../static/images/ab-test/Hero/v5/desktop.m/hero-bg.png?responsive_and_webp'

import bgDesktopS from '../../../../../static/images/ab-test/Hero/v5/desktop.s/hero-bg.png?responsive'
import bgDesktopS_webp from '../../../../../static/images/ab-test/Hero/v5/desktop.s/hero-bg.png?responsive_and_webp'

import bgTabletAll from '../../../../../static/images/ab-test/Hero/v5/tablet.all/hero-bg.png?responsive'
import bgTabletAll_webp from '../../../../../static/images/ab-test/Hero/v5/tablet.all/hero-bg.png?responsive_and_webp'

import bgMobileAll from '../../../../../static/images/ab-test/Hero/v5/mobile.all/hero-bg.png?responsive'
import bgMobileAll_webp from '../../../../../static/images/ab-test/Hero/v5/mobile.all/hero-bg.png?responsive_and_webp'

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

  .description {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    position: relative;
    color: ${colors.secondary.darken100};
  }

  ${desktop.all} {
    .title {
      & > span {
        font-size: 40px;
        line-height: 56px;
      }
    }
  }

  ${desktop.l} {
    & {
      padding-bottom: 150px;
    }

    &.hero-wrap {
      background-size: 1184px 800px !important;
      background-position: right 64px top 64px;
    }

    .title {
      grid-column: 2 / span 5;
      margin-top: 298px;

      & > span {
        margin-bottom: 7px;
      }
    }

    .description {
      grid-column: 2 / span 5;
      margin-top: 79px;

      .firstLine {
        display: block;
        margin-bottom: 24px;
      }
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: 123px;
    }

    &.hero-wrap {
      background-size: 655px 728px !important;
      background-position: right 16px top 64px;
    }

    .title {
      grid-column: 2 / span 6;
      margin-top: 257px;

      & > span {
        margin-bottom: 7px;
      }
    }

    .description {
      grid-column: 2 / span 6;
      margin-top: 80px;

      .firstLine {
        display: block;
        margin-bottom: 24px;
      }
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: 124px;
    }

    &.hero-wrap {
      background-size: 608px 736px !important;
      background-position: right 24px top 64px;
    }

    .title {
      grid-column: 2 / span 7;
      margin-top: 257px;

      & > span {
        margin-bottom: 7px;
      }
    }

    .description {
      grid-column: 2 / span 7;
      margin-top: 80px;

      .firstLine {
        display: block;
        margin-bottom: 24px;
      }
    }
  }

  ${tablet.all} {
    & {
      padding-bottom: ${calcRem(33)};
    }

    &.hero-wrap {
      background-size: ${calcRem(544)} ${calcRem(392)} !important;
      background-position: right ${calcRem(40)} top ${calcRem(64)};
    }

    .title {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(232)};
      padding-right: ${calcRem(36)};
      padding-left: ${calcRem(8)};

      & > span {
        font-size: ${calcRem(32)};
        line-height: ${calcRem(40)};
        margin-bottom: ${calcRem(4)};
      }
    }

    .description {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(32)};
      padding-left: ${calcRem(8)};

      .firstLine {
        display: block;
        margin-bottom: ${calcRem(24)};
      }

      .wrap {
        white-space: nowrap;
      }
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

      & > span {
        line-height: ${calcRem(40)};
        margin-bottom: ${calcRem(4)};
      }
    }

    .description {
      margin-top: ${calcRem(31)};
      padding-right: ${calcRem(30)};

      .firstLine {
        display: block;
        margin-bottom: ${calcRem(24)};
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
