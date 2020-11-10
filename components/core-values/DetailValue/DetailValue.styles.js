import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  .picture-container {
    position: relative;
    height: 0;
    grid-column: 2 / span 4;
    grid-row: 1 / span 3;
    overflow: hidden;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  ${desktop.l} {
    .picture-container {
      padding-top: calc(1320 / 1728 * 100%);
    }
  }

  ${desktop.m} {
    .picture-container {
      padding-top: calc(1008 / 1296 * 100%);
    }
  }

  ${desktop.s} {
    .picture-container {
      padding-top: calc(912 / 1200 * 100%);
    }
  }

  ${tablet.all} {
    .picture-container {
      padding-top: calc(696 / 912 * 100%);
    }

    .sub-heading {
      margin-top: ${calcRem(18)};
    }

    &.ux .heading {
      margin-top: ${calcRem(96)};
    }
  }

  ${mobile.all} {
    .picture-container {
      grid-row: 1;
      grid-column: 1 / span 6;
      padding-top: calc(744 / 984 * 100%);
    }

    .heading,
    .sub-heading {
      grid-column: 1 / span 6;
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
