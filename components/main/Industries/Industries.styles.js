import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  .title,
  .subtitle {
    grid-column: 4 / span 6;
    text-align: center;
  }

  .title {
    margin-top: 200px;
  }

  .subtitle {
    margin-top: 53px;
    color: ${colors.secondary.darken100};
  }

  .card {
    margin-top: 76px;
    grid-column-end: span 4;
  }

  .card:nth-of-type(2n+1) {
    grid-column-start: 2;
  }

  .card:nth-of-type(2n) {
    grid-column-start: 8;
  }

  .card:nth-of-type(n + 3) {
    margin-top: 81px;
  }

  @media (pointer: fine) {
    .card:hover .icon {
      opacity: 1;
    }
  }

  ${desktop.s} {
    .subtitle {
      grid-column: 3 / span 8;
    }
  }

  ${tablet.all} {
    .card,
    .card:nth-of-type(n + 3) {
      margin-top: ${calcRem(56)};
    }

    .title {
      margin-top: ${calcRem(160)};
    }

    .subtitle {
      margin-top: ${calcRem(34)};
    }
  }

  ${mobile.all} {
    .card,
    .card:nth-of-type(2n+1),
    .card:nth-of-type(2n) {
      grid-column: 1 / span 6;
    }

    .card {
      margin-top: ${calcRem(31)};
    }

    .card:not(:first-of-type) {
      margin-top: ${calcRem(73)};
    }

    .title,
    .subtitle {
      grid-column: 1 / span 6;
    }

    .title {
      margin-top: ${calcRem(103)};
    }

    .subtitle {
      margin-top: ${calcRem(10)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, mobile }}) => css`
  .title,
  .subtitle {
    -ms-grid-column: ${getGridValueForMs(4)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  .card {
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  .card:nth-of-type(2n+1) {
    -ms-grid-column: ${getGridValueForMs(2)};
  }

  .card:nth-of-type(2n) {
    -ms-grid-column: ${getGridValueForMs(8)};
  }

  .title {
    -ms-grid-row: 1;
  }

  .subtitle {
    -ms-grid-row: 2;
  }

  .card:nth-of-type(1),
  .card:nth-of-type(2) {
    -ms-grid-row: 3;
  }

  .card:nth-of-type(3),
  .card:nth-of-type(4) {
    -ms-grid-row: 4;
  }

  ${desktop.s} {
    .subtitle {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }
  }

  ${mobile.all} {
    .title,
    .subtitle {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .card,
    .card:nth-of-type(2n+1),
    .card:nth-of-type(2n) {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .card:nth-of-type(1) {
      -ms-grid-row: 3;
    }

    .card:nth-of-type(2) {
      -ms-grid-row: 4;
    }

    .card:nth-of-type(3) {
      -ms-grid-row: 5;
    }

    .card:nth-of-type(4) {
      -ms-grid-row: 6;
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