import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    grid-template-rows: max-content max-content;
    padding-top: ${calcRem(240)};
  }

  .heading {
    grid-column: 2 / span 5;
    grid-row: 1;
  }

  .text {
    grid-column: 2 / span 5;
    grid-row: 2;
    margin-top: ${calcRem(77)};
    color: ${colors.secondary.darken100};
  }

  .image {
    position: relative;
    grid-column: 7 / span 5;
    grid-row: 1 / 4;
    z-index: -1;
  }

  .button {
    grid-column: 2 / span 2;
    grid-row: 3;
    margin-top: ${calcRem(84)};
  }

  ${desktop.m} {
    padding-top: ${calcRem(197)};

    .heading {
      grid-column: 2 / span 7;
    }

    .text {
      margin-top: ${calcRem(84)};
    }

    .image {
      grid-column: 6 / span 7;
      margin-top: ${calcRem(42)};
    }

    .button {
      grid-column: 2 / span 3;
      margin-top: ${calcRem(59)};
    }
  }

  ${desktop.s} {
    padding-top: ${calcRem(197)};

    .heading {
      grid-column: 2 / span 7;
    }

    .text {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(84)};
    }

    .image {
      grid-column: 6 / span 7;
      margin-top: ${calcRem(83)};
    }

    .button {
      grid-column: 2 / span 3;
      margin-top: ${calcRem(57)};
    }
  }

  ${tablet.all} {
    padding-top: ${calcRem(184)};

    .heading {
      grid-column: 2 / span 7;
      margin-top: 1rem;
    }

    .text {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(27)};
      font-size: ${calcRem(14)};
    }

    .image {
      grid-column: 6 / span 7;
    }

    .button {
      grid-column: 2 / span 4;
      margin-top: ${calcRem(74)};
      height: 3rem;
    }
  }

  ${mobile.all} {
    padding-top: ${calcRem(78)};

    .heading,
    .text,
    .button {
      grid-column: 1 / span 6;
    }

    .text {
      margin-top: ${calcRem(27)};
      font-size: ${calcRem(14)};
    }

    .image {
      display: none;
    }

    .button {
      margin-top: ${calcRem(49)};
      height: 3rem;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  & {
    -ms-grid-template-rows: max-content max-content;
  }

  .heading {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
  }

  .text {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 2;
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
  }

  .button {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
    -ms-grid-row: 3;
  }

  ${desktop.m} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .text {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${tablet.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .text {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
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
