import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(352)};
  }
  
  .heading {
    grid-column: 1 / span 12;
    grid-row: 1;
    text-align: center;
  }

  .sub-heading {
    grid-column: 3 / span 8;
    grid-row: 2;
    text-align: center;
    margin-top: ${calcRem(31)};
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(307)};
    }
    
    .heading {
      grid-column: 1 / span 12;
      text-align: center;
    }

    .sub-heading {
      grid-column: 3 / span 8;
      text-align: center;
      padding: 0 ${calcRem(12)};
      margin-top: ${calcRem(31)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(312)};
    }
    
    .heading {
      grid-column: 1 / span 12;
      grid-row: 1;
      text-align: center;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(215)};
    }

    .sub-heading {
      margin-top: ${calcRem(10)};
    }

    .image {
      margin-top: ${calcRem(71)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(143)};
    }

    .heading,
    .sub-heading {
      grid-column: 1 / span 6;
      text-align: start;
    }

    .sub-heading {
      margin-top: ${calcRem(10)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop }}) => css`
  .heading {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(12)};
    -ms-grid-row: 1;
  }

  .sub-heading {
    -ms-grid-column: ${getGridValueForMs(3)};
    -ms-grid-column-span: ${getGridValueForMs(8)};
    -ms-grid-row: 2;
  }

  ${desktop.m} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(12)};
    }

    .sub-heading {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(12)};
      -ms-grid-row: 1;
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
