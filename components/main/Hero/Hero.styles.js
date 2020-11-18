import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
    & {
      width: 1792px;
      margin-left: auto;
      margin-right: auto;
    }

    .title {
      font-weight: 300;
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
        line-height: 80px;

        & > b {
          font-size: 40px;
          line-height: 56px;
        }
      }
    }

    ${desktop.m} {
      & {
        width: 1328px;
      }
    }

    ${desktop.s} {
      & {
        width: 1232px;
      }
    }

    ${tablet.all} {
      & {
        width: ${calcRem(944)};
      }

      .title {
        & > b {
          font-size: ${calcRem(32)};
          line-height: ${calcRem(40)};
          margin-bottom: ${calcRem(7)};
        }
      }
    }

    ${mobile.all} {
      & {
        width: ${calcRem(328)};
      }

      &.hero-wrap {
        background-size: ${calcRem(328)} ${calcRem(208)};
        background-position: center top ${calcRem(56)};
      }

      .title {
        font-size: ${calcRem(32)};
        line-height: ${calcRem(48)};
        margin-top: ${calcRem(296)};

        & > b {
          line-height: ${calcRem(40)};
          margin-bottom: ${calcRem(7)};
        }
      }
    }
  `

const locale = {
  en: ({ breakpoints: { desktop, tablet, mobile } }) => css`
    ${desktop.all} {
      .title {
        font-size: 64px;
      }
    }

    ${desktop.l} {
      & {
        min-height: 490px;
      }

      &.hero-wrap {
        background-size: 815px 421px;
        background-position: right 212px top 69px;
      }

      .title {
        grid-column: 2 / span 5;
        margin-top: 202px;

        & > b {
          margin-bottom: 9px;
        }
      }
    }

    ${desktop.m} {
      & {
        min-height: 489px;
      }

      &.hero-wrap {
        background-size: 707px 425px;
        background-position: right 98px top 64px;
      }

      .title {
        grid-column: 2 / span 6;
        margin-top: 202px;

        & > b {
          margin-bottom: 9px;
        }
      }
    }

    ${desktop.s} {
      & {
        min-height: 477px;
      }

      &.hero-wrap {
        background-size: 653px 399px;
        background-position: right 36px top 78px;
      }

      .title {
        grid-column: 2 / span 7;
        margin-top: 202px;

        & > b {
          margin-bottom: 7px;
        }
      }
    }

    ${tablet.all} {
      & {
        min-height: ${calcRem(340)};
      }

      &.hero-wrap {
        background-size: ${calcRem(503)} ${calcRem(263)};
        background-position: right ${calcRem(73)} top ${calcRem(77)};
      }

      .title {
        grid-column: 2 / span 5;
        margin-top: ${calcRem(169)};
      }
    }

    ${mobile.all} {
      .title {
        grid-column: 1 / span 6;
      }
    }
  `,
  ru: ({ breakpoints: { desktop, tablet, mobile } }) => css`
  ${desktop.all} {
    .title {
      font-size: 60px;
    }
  }

  ${desktop.l} {
    & {
      min-height: 535px;
    }

    &.hero-wrap {
      background-size: 940px 425px;
      background-position: right 212px top 110px;
    }

    .title {
      grid-column: 2 / span 4;
      margin-top: 172px;
      padding-right: 90px;

      & > b {
        margin-bottom: 3px;
      }
    }
  }

  ${desktop.m} {
    & {
      min-height: 533px;
    }

    &.hero-wrap {
      background-size: 749px 450px;
      background-position: right 113px top 83px;
    }

    .title {
      grid-column: 2 / span 5;
      margin-top: 172px;
      padding-right: 50px;

      & > b {
        margin-bottom: 3px;
      }
    }
  }

  ${desktop.s} {
    & {
      min-height: 516px;
    }

    &.hero-wrap {
      background-size: 657px 427px;
      background-position: right 108px top 89px;
    }

    .title {
      grid-column: 2 / span 5;
      margin-top: 172px;
      padding-right: 10px;

      & > b {
        margin-bottom: 3px;
      }
    }
  }

  ${tablet.all} {
    & {
      min-height: ${calcRem(388)};
    }

    &.hero-wrap {
      background-size: ${calcRem(557)} ${calcRem(316)};
      background-position: right ${calcRem(70)} top ${calcRem(72)};
    }

    .title {
      grid-column: 2 / span 4;
      margin-top: ${calcRem(145)};
      padding-right: ${calcRem(50)};
    }
  }

  ${mobile.all} {
    .title {
      grid-column: 1 / span 5;
      padding-right: ${calcRem(10)};
    }
  }
  `,
}

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const language = props.l10n.language

  return css`
    ${base({ breakpoints, colors })}
    ${locale[language]({ breakpoints, colors })}
  `
}
