import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(352)};
  }

  .first-item {
    margin-top: ${calcRem(153)};
  }

  .second-item {
    margin-top: ${calcRem(197)};
  }

  .third-item {
    margin-top: ${calcRem(218)};
  }

  .first-item .image {
    margin-left: ${calcRem(-45)};
  }

  .third-item .image {
    margin-top: ${calcRem(-17)};
    margin-left: ${calcRem(-33)};
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

    .second-item {
      margin-top: ${calcRem(226)};
    }

    .third-item {
      margin-top: ${calcRem(226)};
    }

    .first-item .image {
      margin-left: ${calcRem(-12)};
    }

    .third-item .image {
      margin-top: ${calcRem(-17)};
      margin-left: 0;
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

    .first-item .image {
      margin-left: ${calcRem(-41)};
    }

    .second-item .image {
      margin-right: ${calcRem(-35)};
    }

    .third-item .image {
      margin-top: ${calcRem(-17)};
      margin-left: ${calcRem(-27)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(143)};
    }

    .heading {
      grid-column: 1 / span 6;
      text-align: start;
    }

    .sub-heading {
      display: none;
    }

    .first-item {
      margin-top: ${calcRem(90)};
    }

    .second-item {
      margin-top: ${calcRem(112)};
    }

    .third-item {
      margin-top: ${calcRem(106)};
    }

    .first-item .image {
      margin-left: ${calcRem(-9)};
    }

    .second-item .image {
      width: ${calcRem(339)};
    }

    .third-item .image {
      margin-top: 0;
      margin-left: ${calcRem(-12)};
      width: ${calcRem(350)};
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
