import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    margin-top: ${calcRem(352)};
    margin-bottom: ${calcRem(210)};
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
    color: ${colors.secondary.darken100};
  }


  ${desktop.m} {
    & {
      margin-top: ${calcRem(307)};
      margin-bottom: ${calcRem(173)};
    }

    .second-item {
      margin-top: ${calcRem(226)};
    }

    .third-item {
      margin-top: ${calcRem(226)};
    }

    .heading {
      grid-column: 1 / span 12;
      text-align: center;
    }

    .sub-heading {
      grid-column: 2 / span 10;
      text-align: center;
      padding: 0 ${calcRem(12)};
      margin-top: ${calcRem(31)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(312)};
      margin-bottom: ${calcRem(173)};
    }

    .second-item {
      margin-top: ${calcRem(226)};
    }

    .third-item {
      margin-top: ${calcRem(237)};
    }

    .sub-heading {
      grid-column: 2 / span 10;
    }

    .heading {
      grid-column: 1 / span 12;
      grid-row: 1;
      text-align: center;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(236)};
      margin-bottom: ${calcRem(117)};
    }

    .first-item {
      margin-top: ${calcRem(70)};
    }

    .second-item {
      margin-top: ${calcRem(84)};
    }

    .third-item {
      margin-top: ${calcRem(99)};
    }

    .sub-heading {
      margin-top: ${calcRem(10)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(131)};
      margin-bottom: ${calcRem(93)};
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
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
