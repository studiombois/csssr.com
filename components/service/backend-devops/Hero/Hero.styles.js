import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    grid-template-rows: max-content max-content;
    padding-top: ${calcRem(192)};
  }

  .heading {
    grid-column: 2 / span 4;
    grid-row: 1;
    z-index: 1;
  }

  .heading > .br_hidden {
    display: none;
  }

  .text {
    grid-column: 2 / span 4;
    grid-row: 2;
    margin-top: ${calcRem(77)};
    color: ${colors.secondary.darken100};
    z-index: 1;
  }

  .picture-container {
    position: relative;
    height: 0;
    grid-column: 7 / span 4;
    grid-row: 1 / 4;
    margin-top: ${calcRem(7)};
    overflow: hidden;
  }

  .picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .button {
    grid-column: 2 / span 3;
    grid-row: 3;
    max-width: ${calcRem(328)};
    margin-top: ${calcRem(60)};
  }

  ${desktop.all} {
    .picture-container {
      max-height: 512px;
    }
  }

  ${desktop.l} {
    & {
      padding-top: ${calcRem(198)};
    }

    .button {
      margin-top: ${calcRem(59)};
      max-width: ${calcRem(320)};
    }

    .picture-container {
      margin-top: ${calcRem(-8)};
      padding-top: calc(1537 / 1728 * 100%);
    }
  }

  ${desktop.m} {
    padding-top: ${calcRem(198)};

    .heading {
      grid-column: 2 / span 4;
    }

    .text {
      margin-top: ${calcRem(78)};
    }

    .picture-container {
      grid-column: 7 / span 5;
      margin-top: ${calcRem(-6)};
      padding-top: calc(1537 / 1632 * 100%);
    }

    .button {
      grid-column: 2 / span 3;
      margin-top: ${calcRem(60)};
    }
  }

  ${desktop.s} {
    padding-top: ${calcRem(197)};

    .heading {
      grid-column: 2 / span 4;
    }

    .text {
      grid-column: 2 / span 4;
      margin-top: ${calcRem(78)};
    }

    .picture-container {
      grid-column: 7 / span 5;
      margin-top: ${calcRem(-6)};
      padding-top: calc(1537 / 1512 * 100%);
    }

    .button {
      grid-column: 2 / span 3;
      max-width: ${calcRem(296)};
      margin-top: ${calcRem(60)};
    }
  }

  ${tablet.all} {
    padding-top: ${calcRem(120)};

    .heading {
      grid-column: 2 / span 7;
      margin-top: ${calcRem(92)};
    }

    .heading > .br_hidden {
      display: block;
    }

    .heading > .br {
      display: none;
    }

    .text {
      grid-column: 2 / span 4 ;
      margin-top: ${calcRem(27)};
    }

    .picture-container {
      grid-column: 7 / span 6;
      margin-top: 0;
      padding-top: calc(1248 / 1392 * 100%);
    }

    .button {
      grid-column: 2 / span 4;
      margin-top: ${calcRem(57)};
      height: 3rem;
    }
  }

  ${mobile.all} {
    padding-top: ${calcRem(56)};

    .heading,
    .text,
    .button {
      grid-column: 1 / span 6;
    }

    .heading {
      margin-top: ${calcRem(140)};
    }

    .text {
      margin-top: ${calcRem(27)};
    }

    .picture-container {
      width: ${calcRem(232)};
      position: absolute;
      right: 0;
      margin-top: 0;
      padding-top: calc(552 / 696 * ${calcRem(232)});
    }

    .button {
      margin-top: ${calcRem(49)};
      height: 3rem;
      max-width: unset;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  & {
    -ms-grid-template-rows: max-content max-content;
  }

  .heading {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 1;
  }

  .text {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 2;
  }

  .picture-container {
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
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .picture-container {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .text {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .picture-container {
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

    .picture-container {
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
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
