import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  .image {
    grid-column: 2 / span 4;
    grid-row: 1 / span 3;
  }

  .heading {
    grid-column: 7 / span 3;
    grid-row: 2;
    white-space: nowrap;
  }

  .sub-heading {
    grid-column: 7 / span 5;
    grid-row: 3;
    margin-top: ${calcRem(31)};
    margin-bottom: ${calcRem(-9)};
    color: ${colors.secondary.darken100};
  }

  ${desktop.all} {
    &.ux .sub-heading {
      margin-bottom: ${calcRem(10)};
    }
  }

  ${desktop.s} {
    .sub-heading {
      margin-bottom: ${calcRem(0)};
    }

    &.ux .sub-heading {
      margin-bottom: ${calcRem(10)};
    }
  }

  ${tablet.all} {
    .sub-heading {
      margin-top: ${calcRem(31)};
    }
  }

  ${mobile.all} {
    .image,
    .heading,
    .sub-heading {
      grid-column: 1 / span 6;
    }

    .image {
      grid-row: 1;
    }

    &.reliability .image {
      height: ${calcRem(244)};
    }

    &.accessibility .image {
      height: ${calcRem(246)};
    }

    &.ux .image {
      height: ${calcRem(248)};
    }

    &.security .image {
      height: ${calcRem(248)};
    }

    .heading {
      grid-row: 2;
      margin-top: ${calcRem(47)};
    }

    .sub-heading {
      grid-row: 3;
      margin-top: ${calcRem(18)};
      margin-bottom: 0;
    }
  }
`

const ie11Styles = () => css`
  .image {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 3;
  }

  .heading {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
    -ms-grid-row: 2;
  }

  .sub-heading {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 3;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles()}
  `
}
