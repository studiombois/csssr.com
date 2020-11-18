import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, below, tablet, above, mobile }, colors}) => css`
  .description {
    margin-top: ${calcRem(24)};
    font-weight: 300;
  }

  .service {
    position: relative;
    background-repeat: no-repeat;
  }

  .service::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    opacity: 0;
    pointer-events: none;
  }

  .service-link {
    display: block;
  }

  .service-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    text-decoration: underline;
    color: ${colors.primary.origin};

    b {
      font-weight: 900;
    }
  }

  .service-description {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    color: ${colors.secondary.darken100};

    b {
      font-weight: 700;
    }
  }

  .service.disabled {
    .service-title {
      text-decoration: none;
      color: ${colors.secondary.gray};
    }

    &::after {
      display: none;
    }
  }

  ${desktop.all} {
    & {
      margin-top: 128px;
    }

    &._has_two-rows {
      .services {
        margin-top: 20px;
      }

      .service:nth-of-type(n + 3) {
        margin-top: 92px;
      }
    }

    .service-link {
      padding-top: ${calcRem(260)};
    }

    .service-wrapper {
      padding-top: ${calcRem(260)};
    }

    .service-title {
      font-size: 30px;
      line-height: 32px;
    }

    .service-description {
      margin-top: 22px;
      font-size: 18px;
      line-height: 28px;
    }
  }

  ${desktop.l} {
    .service {
      width: 424px;
    }
  }

  ${desktop.m} {
    .service {
      width: 320px;
    }
  }

  ${desktop.s} {
    .service {
      width: 296px;
    }
  }

  ${below.desktop} {
    .service-title {
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    .service-description {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(104)};
    }

    &._has_two-rows {
      .service:nth-of-type(n + 3) {
        margin-top: ${calcRem(108)};
      }
    }

    .service {
      width: ${calcRem(224)};
    }

    .service-link {
      padding-top: ${calcRem(244)};
    }

    .service-wrapper {
      padding-top: ${calcRem(244)};
    }
  }

  ${above.mobile} {
    &._has_one-row {
      .title,
      .description,
      .services {
        grid-column: 2 / span 10;
      }

      .title,
      .description {
        text-align: center;
      }

      .services {
        margin-top: ${calcRem(80)};
      }
    }

    &._has_two-rows {
      grid-auto-rows: minmax(min-content, ${calcRem(64)}) auto;

      .title,
      .description {
        grid-column: 2 / span 2;
      }

      .services {
        grid-column: 5 / span 7;
        grid-row: 1 / span 2;
      }
    }

    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .service,
    .service::after {
      background-size: ${calcRem(272)} ${calcRem(220)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(80)};
    }

    .title,
    .description,
    .services {
      grid-column: 1 / span 6;
    }

    .title br,
    .service-title br {
      display: none;
    }

    .service-link {
      padding-top: ${calcRem(168)};
    }

    .service-wrapper {
      padding-top: ${calcRem(168)};
    }

    .service,
    .service::after {
      background-size: ${calcRem(328)} ${calcRem(144)};
    }

    .service:first-of-type {
      margin-top: ${calcRem(56)};
    }

    .service:not(:first-of-type) {
      margin-top: ${calcRem(64)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .service:not(.disabled):hover {
      cursor: pointer;

      &::after {
        opacity: 1;
        transition: opacity 200ms;
      }

      .service-title {
        color: ${colors.primary.darken15};
        transition: color 200ms;
      }
    }
  }
`

const styles = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}


export default styles
