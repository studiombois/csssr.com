import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = {
  en: ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
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
        font-size: 40px;
        line-height: 64px;

        & > b {
          font-size: 40px;
          line-height: 56px;
        }
      }
    }

    ${desktop.l} {
      & {
        min-height: 592px;
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
        min-height: 592px;
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
        min-height: 512px;
      }

      &.hero-wrap {
        background-size: 816px 448px;
        background-position: right 24px top 64px;
      }

      .title {
        grid-column: 2 / span 6;
        margin-top: 207px;

        & > b {
          margin-bottom: 7px;
        }
      }
    }

    ${tablet.all} {
      & {
        min-height: ${calcRem(440)};
      }

      &.hero-wrap {
        background-size: ${calcRem(624)} ${calcRem(376)};
        background-position: right ${calcRem(40)} top ${calcRem(64)};
      }

      .title {
        grid-column: 2 / span 6;
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
        margin-top: ${calcRem(304)};

        & > b {
          line-height: ${calcRem(40)};
          margin-bottom: ${calcRem(4)};
        }
      }
    }
  `,
  ru: ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
    .title {
      position: relative;
      z-index: 2;
      margin-top: 192px;
      grid-column: 2 / span 6;
    }

    .picture-wrapper  {
      position: relative;
      margin-top: -48px;
      margin-left: -24px;
      grid-column: 1 / span 12;
      width: calc(100% + 48px);
    }

    .picture-hover-area {
        position: absolute;
        z-index: 1;
        top: 116px;
        left: calc(128px / 2);
        display: block;
        width: calc(100% - 128px);
        height: 278px;

        :hover + .picture {
          background-color: black;
        }
      }

    .picture {
      width: 100%;
      transition: background-color 100ms ease-out;
    }

    .description {
      position: relative;
      margin-top: -292px;
      grid-column: 2 / span 6;
      color: ${colors.secondary.darken100};
    }

    ${desktop.l} {
      .title {
        grid-column: 3 / span 6;
      }

      .picture-wrapper  {
        grid-column: 3 / span 8;
      }

      .description {
        grid-column: 3 / span 5;
      }
    }

    ${desktop.m} {
      .picture-wrapper  {
        margin-left: 48px;
        grid-column: 1 / span 12;
        width:  calc(100% - 96px);
      }
    }

    ${desktop.s} {
      .picture-wrapper  {
        margin-left: 0;
        grid-column: 1 / span 12;
        width: 100%;
      }
    }

    ${tablet.all} {
      .title {
        margin-top: 12.25rem;
      }

      .picture-wrapper  {
        margin-top: -2.75rem;
        margin-left: -1rem;
        width: calc(100% + 2rem);
      }

      .picture-hover-area {
        top: 7.25rem;
        left: calc(8rem / 2);
        width: calc(100% - 8rem);
        height: 17.375rem;
      }

      .description {
        margin-top: -14.25rem;
      }
    }

    ${tablet.s} {
      @media (pointer: coarse) {
        .picture {
          background-color: black;
        }

        .picture-hover-area {
          display: none;
        }
      }
    }

    ${mobile.all} {
      .title,
      .picture-wrapper,
      .description {
        grid-column: 1 / span 6;
      }

      .title {
        margin-top: 6.5rem;
      }

      .picture-wrapper {
        margin-top: -0.5rem;
        margin-left: -1rem;
        width: calc(100% + 2rem);
      }

      .picture-hover-area {
        display: none;
      }

      .description {
        margin-top: 1.5rem;
      }
    }
  `,
}

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const language = props.l10n.language

  return css`
    ${base[language]({ breakpoints, colors })}
  `
}
