import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  & {
    outline: 1px solid red;
    margin-top: ${calcRem(212)};
  }

  .feature {
    color: ${colors.secondary.darken100};
  }

  .feature_1,
  .feature_1 + .link {
    grid-column: 2 / span 4;
  }

  .feature_2,
  .feature_2 + .link {
    grid-column: 5 / span 6;
  }

  .feature_2 {
    margin-top: 68px;
  }

  .link {
    margin-top: 28px;
  }

  .picture {
    width: 100%;
    z-index: -1;
  }

  ${desktop.l} {
    .picture {
      margin-top: -120px;
      margin-left: -32px;
      grid-column: 5 / span 5;
      width: calc(100% + 32px);
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(212)};
    }

    .picture {
      margin-top: -167px;
      grid-column: 4 / span 7;
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(188)};
    }

    .picture {
      margin-top: -216px;
      grid-column: 4 / span 8;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(162)};
    }

    .feature_2 {
      margin-top: ${calcRem(47)};
    }

    .link {
      margin-top: ${calcRem(22)};
    }

    .feature_2 + .link {
      margin-top: ${calcRem(24)};
    }

    .picture {
      margin-top: ${calcRem(-88)};
      grid-column: 4 / span 7;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(106)};
    }

    .feature_1,
    .feature_1 + .link {
      grid-column: 2 / span 5;
    }

    .feature_2,
    .feature_2 + .link,
    .picture {
      grid-column: 1 / span 6;
    }

    .link {
      margin-top: ${calcRem(14)};
    }

    .picture {
      margin-left: -1rem;
      margin-top: ${calcRem(33)};
      width: calc(100% + 2rem);
    }

    .feature_2 {
      margin-top: ${calcRem(25)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .feature_1,
  .feature_1 + .link {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    display: block;
  }

  .feature_2,
  .feature_2 + .link {
    -ms-grid-column: ${getGridValueForMs(5)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    display: block;
  }

  .feature_1 {
    -ms-grid-row: 3;
  }

  .feature_1 + .link {
    -ms-grid-row: 4;
  }

  .picture {
    -ms-grid-row: 5;
  }

  .feature_2 {
    -ms-grid-row: 6;
  }

  .feature_2 + .link {
    -ms-grid-row: 7;
  }

  ${desktop.l} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(5)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.m} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${desktop.s} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }
  }

  ${tablet.all} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${mobile.all} {
    .feature_1,
    .feature_1 + .link {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .feature_2,
    .feature_2 + .link,
    .picture {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
