import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(347)};
  }

  .heading {
    grid-column: 1 / span 12;
    grid-row: 1;
    text-align: center;
  }

  .image {
    position: relative;
    grid-column: 1 / span 12;
    justify-self: center;
    grid-row: 2;
    max-width: ${calcRem(1792)};
    margin-top: ${calcRem(119)};
    background-color: #ffffff;
  }

  ${desktop.m} {
    margin-top: ${calcRem(308)};

    .image {
      margin-top: ${calcRem(69)};
    }
  }

  ${desktop.s} {
    margin-top: ${calcRem(224)};

    .image {
      margin-top: ${calcRem(82)};
    }
  }

  ${tablet.all} {
    margin-top: ${calcRem(215)};

    .image {
      margin-top: ${calcRem(78)};
    }
  }

  ${mobile.all} {
    margin-top: ${calcRem(135)};

    .heading {
      grid-column: 1 / span 6;
      text-align: start;
    }

    .image {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(130)};
    }
  }
`

const ie11Styles = () => css`
  .heading {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(12)};
    -ms-grid-row: 1;
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(11)};
    -ms-grid-row: 2;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles()}
  `
}
