import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const heroBg = require.context('../../../../../public/images/main/ab-test/Hero/v2/hero-bg?csssr-images')

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

  &.hero-wrap {
    background-repeat: no-repeat;
  }

  ${desktop.l} {
    & {
      padding-bottom: 152px;
    }

    &.hero-wrap {
      background-size: 1640px 840px;
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
      background-size: 992px 792px;
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
      background-size: 712px 528px;
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
      background-size: ${calcRem(328)} ${calcRem(272)};
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
