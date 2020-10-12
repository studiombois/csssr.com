import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const heroBg = require.context('../../../public/images/main/hero?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  .title {
    font-weight: normal;
    color: ${colors.secondary.darken100};

    & > b {
      display: block;
      font-family: Roboto, sans-serif;
      font-weight: 900;
    }
  }

  &.hero-wrap {
    background-repeat: no-repeat;
  }

  ${desktop.all} {
    .title {
      font-weight: normal;
      font-size: 48px;
      line-height: 64px;

      & > b {
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
      background-size: 880px 528px;
      background-position: right 216px top 64px;
    }

    .title {
      grid-column: 2 / span 5;
      margin-top: 207px;

      & > b {
        margin-bottom: 9px;
      }
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: 170px;
    }

    &.hero-wrap {
      background-size: 768px 528px;
      background-position: right 16px top 64px;
    }

    .title {
      grid-column: 2 / span 6;
      margin-top: 207px;

      & > b {
        margin-bottom: 8px;
      }
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: 188px;
    }

    &.hero-wrap {
      background-size: 816px 448px;
      background-position: right 24px top 64px;
    }

    .title {
      grid-column: 2 / span 7;
      margin-top: 207px;

      & > b {
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
      background-size: ${calcRem(624)} ${calcRem(376)};
      background-position: right ${calcRem(40)} top ${calcRem(64)};
    }

    .title {
      grid-column: 2 / span 7;
      margin-top: ${calcRem(164)};
      padding-right: ${calcRem(64)};
      padding-left: ${calcRem(8)};

      & > b {
        font-size: ${calcRem(32)};
        line-height: ${calcRem(40)};
        margin-bottom: ${calcRem(4)};
      }
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

      & > b {
        line-height: ${calcRem(40)};
        margin-bottom: ${calcRem(4)};
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
