import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    grid-template-rows: max-content max-content;
    padding-top: ${calcRem(240)};
    margin-bottom: ${calcRem(347)};
  }

  .heading {
    grid-column: 2 / span 5;
    grid-row: 1;
    margin-bottom: ${calcRem(77)};
  }

  .text {
    grid-column: 2 / span 5;
    grid-row: 2;
    margin-bottom: ${calcRem(84)};
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
  }

  ${desktop.m} {
    padding-top: ${calcRem(197)};
    margin-bottom: ${calcRem(308)};

    .heading {
      grid-column: 2 / span 7;
      margin-bottom: ${calcRem(84)};
    }

    .text {
      margin-bottom: ${calcRem(59)};
    }

    .image {
      grid-column: 6 / span 7;
      margin-top: ${calcRem(42)};
    }

    .button {
      grid-column: 2 / span 3;
    }
  }

  ${desktop.s} {
    padding-top: ${calcRem(197)};
    margin-bottom: ${calcRem(224)};

    .heading {
      grid-column: 2 / span 7;
      margin-bottom: ${calcRem(84)};
    }

    .text {
      grid-column: 2 / span 5;
      margin-bottom: ${calcRem(57)};
    }

    .image {
      grid-column: 6 / span 7;
      margin-top: ${calcRem(83)};
    }

    .button {
      grid-column: 2 / span 3;
    }
  }

  ${tablet.all} {
    padding-top: ${calcRem(184)};
    margin-bottom: ${calcRem(240)};

    .heading {
      grid-column: 2 / span 7;
      margin-top: 1rem;
      margin-bottom: ${calcRem(27)};
    }

    .text {
      grid-column: 2 / span 5;
      margin-bottom: ${calcRem(74)};
    }

    .image {
      grid-column: 6 / span 7;
    }

    .button {
      grid-column: 2 / span 3;
    }
  }

  ${mobile.all} {
    padding-top: ${calcRem(78)};
    margin-bottom: ${calcRem(135)};

    .heading,
    .text,
    .button {
      grid-column: 1 / span 6;
    }

    .heading {
      margin-bottom: ${calcRem(27)};
    }

    .text {
      margin-bottom: ${calcRem(49)};
    }

    .image {
      display: none;
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

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
