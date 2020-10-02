import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const base = ({ breakpoints: { desktop, below, tablet, above, mobile }, colors}) => css`
  .description {
    margin-top: ${calcRem(24)};
    font-weight: 300;
  }

  .service {
    background-repeat: no-repeat;
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

  ${desktop.all} {
    & {
      margin-top: 144px;
    }

    &._has_two-rows {
      .services {
        margin-top: 20px;
      }

      .service:nth-of-type(n + 3) {
        margin-top: 92px;
      }
    }

    .service {
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
      margin-top: ${calcRem(100)};
    }

    &._has_two-rows {
      .service:nth-of-type(n + 3) {
        margin-top: ${calcRem(108)};
      }
    }

    .service {
      padding-top: ${calcRem(244)};
      width: ${calcRem(224)};
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
      grid-auto-rows: max-content auto;

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

    .service {
      background-size: ${calcRem(272)} ${calcRem(220)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(104)};
    }

    .title,
    .description,
    .services {
      grid-column: 1 / span 6;
    }

    .service {
      padding-top: ${calcRem(168)};
      background-size: ${calcRem(328)} ${calcRem(144)};
    }

    .service:first-of-type {
      margin-top: ${calcRem(54)};
    }

    .service:not(:first-of-type) {
      margin-top: ${calcRem(48)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .service:hover {
      cursor: pointer;

      .service-title {
        color: ${colors.primary.darken15};
      }
    }
  }
`

export const backgroundImagesStyles = (className, images) => () => css`
  ${backgroundCssSmart(className, images.default)}

  @media (hover: hover) and (pointer: fine) {
    ${backgroundCssSmart(`${className}:hover`, images.hovered)}
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
