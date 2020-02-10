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

  .image {
    grid-row: 3;
    align-self: end;
    margin-top: ${calcRem(148)};
    img {
      height: auto;
    }
  }

  .link {
    font-weight: 900;
    grid-row: 4;
    margin-top: ${calcRem(56)};
  }

  .text {
    grid-row: 5;
    margin-top: ${calcRem(22)};
  }

  .first-item {
    grid-column: 1 / span 3;
  }

  .second-item {
    grid-column: 5 / span 4;
  }

  .third-item {
    grid-column: 10 / span 3;
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

    .image {
      margin-top: ${calcRem(92)};
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

    .image {
      margin-top: ${calcRem(99)};
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

    .link {
      margin-top: ${calcRem(58)};
    }

    .text {
      margin-top: ${calcRem(13)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(143)};
    }

    .heading,
    .sub-heading,
    .image,
    .link,
    .text {
      grid-column: 1 / span 6;
    }
    
    .heading {
      text-align: start;
    }

    .sub-heading {
      text-align: start;
      margin-top: ${calcRem(10)};
    }

    .image {
      grid-row: auto;
      margin-top: ${calcRem(89)};
    }

    .link {
      grid-row: auto;
      margin-top: ${calcRem(24)};
    }

    .text {
      grid-row: auto;
      margin-top: ${calcRem(13)};
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

  .image {
    -ms-grid-row: 3;
  }

  .link {
    -ms-grid-row: 4;
  }

  .text {
    -ms-grid-row: 5;
  }

  .first-item {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
  }

  .second-item {
    -ms-grid-column: ${getGridValueForMs(5)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  .third-item {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
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
