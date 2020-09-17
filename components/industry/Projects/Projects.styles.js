import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(150)};
  }

  .heading {
    grid-column: 1 / span 12;
    grid-row: 1;
    text-align: center;
  }

  .content-wrapper {
    margin-top: ${calcRem(72)};
  }

  .first-item {
    grid-column: 2 / span 3;
  }

  .second-item {
    grid-column: 5 / span 3;
  }

  .common-block {
    grid-column: 8 / span 4;
    max-width: ${calcRem(569)};
    padding-top: ${calcRem(56)};
  }

  .common-text {
    font-size: ${calcRem(18)};
    line-height: ${calcRem(28)};
  }

  .text-link {
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    white-space: nowrap;
  }

  .link {
    max-width: ${calcRem(320)};
    margin-top: ${calcRem(36)};
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
  }


  ${desktop.m} {
    .content-wrapper {
      margin-top: ${calcRem(38)};
    }

    .common-block {
      max-width: ${calcRem(430)};
      padding-top: ${calcRem(45)};
    }

    .link {
      margin-top: ${calcRem(32)};
    }
  }

  ${desktop.s} {
    .content-wrapper {
      margin-top: ${calcRem(38)};
    }

    .common-block {
      max-width: ${calcRem(395)};
      padding-top: ${calcRem(45)};
    }

    .link {
      margin-top: ${calcRem(32)};
    }
  }

  ${tablet.all} {
    .content-wrapper {
      margin-top: ${calcRem(24)};
    }

    .common-block {
      padding-top: ${calcRem(48)};
    }

    .common-text {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .link {
      margin-top: ${calcRem(32)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(120)};
    }

    .heading {
      grid-column: 1 / span 6;
      text-align: left;
    }

    .second-item {
      margin-top: ${calcRem(60)};
    }

    .first-item,
    .second-item,
    .common-block {
      grid-column: 1 / span 6;
    }

    .content-wrapper {
      margin-top: ${calcRem(32)};
    }

    .common-block {
      padding-top: ${calcRem(40)};
    }

    .common-text {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .link {
      max-width: none;
      margin-top: ${calcRem(24)};
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
