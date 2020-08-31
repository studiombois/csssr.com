import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const heroBg = require.context('../../../../../public/images/main/ab-test/Hero/v4/hero-bg?csssr-images')

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

  &.hero-wrap {
    background-repeat: no-repeat;
  }

  ${desktop.l} {
    & {
      padding-bottom: 154px;
    }

    &.hero-wrap {
      background-size: 1184px 656px;
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
      background-size: 880px 540px;
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
      background-size: 816px 544px;
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
      background-size: ${calcRem(544)} ${calcRem(376)};
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
      background-size: ${calcRem(328)} ${calcRem(272)};
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
export const backgroundImagesStyles = () => css`
  ${backgroundCssSmart('.hero-wrap', heroBg)}
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}
