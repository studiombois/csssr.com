import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-bottom: ${calcRem(352)};
  }

  .heading {
    grid-column: 1 / span 12;
    grid-row: 1;
    justify-self: center;
    margin-bottom: ${calcRem(119)};
  }

  .image {
    position: relative;
    grid-column: 2 / span 11;
    grid-row: 2;
    z-index: -1;
  }

  ${desktop.m} {
    margin-bottom: ${calcRem(278)};

    .heading {
      margin-bottom: ${calcRem(69)};
    }
  }

  ${desktop.s} {
    margin-bottom: ${calcRem(274)};

    .heading {
      margin-bottom: ${calcRem(82)};
    }
  }

  ${tablet.all} {
    margin-bottom: ${calcRem(212)};

    .heading {
      margin-bottom: ${calcRem(78)};
    }

    .image {
      margin-left: -3.5rem;
    }
  }

  ${mobile.all} {
    margin-bottom: ${calcRem(143)};

    .heading {
      justify-self: start;
      margin-bottom: ${calcRem(130)};
    }

    .image {
      grid-column: 1 / span 6;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  .heading {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
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
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${tablet.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
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
