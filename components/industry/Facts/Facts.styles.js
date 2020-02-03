import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'


// хак для grid-template-rows обеспечивает рамер по контенту для всех строк кроме последней
// после этого приема можно использовать положительный margin-top для отступов
// firefox применяет max-content только внутри функции minmax
const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    grid-template-rows: minmax(0, max-content) minmax(0, max-content);
    margin-top: ${calcRem(352)};
  }

  .heading {
    grid-column: 2 / span 5;
    grid-row: 1;
  }

  .sub-heading {
    grid-column: 8 / span 4;
    grid-row: 1;
    color: ${colors.secondary.darken100};
    margin-top: ${calcRem(14)};
  }

  .image {
    grid-column: 2 / span 4;
    grid-row: 2 / span 2;
    margin-top: ${calcRem(44)};
  }

  .first-item,
  .third-item {
    grid-column: 8 / span 2;
  }

  .second-item,
  .fourth-item {
    grid-column: 10 / span 2;
  }

  .first-item,
  .second-item {
    grid-row: 2;
    margin-top: ${calcRem(113)};
  }

  .third-item,
  .fourth-item {
    grid-row: 3;
    margin-top: ${calcRem(49)};
  }

  .fact-number {
    white-space: nowrap;
  }

  .fact-text {
    color: ${colors.secondary.darken100};
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(278)};
    }

    .heading {
      grid-column: 2 / span 5;
    }

    .sub-heading {
      grid-column: 7 / span 5;
    }

    .image {
      grid-column: 1 / span 5;
      margin-top: ${calcRem(46 )};
    }

    .first-item,
    .third-item  {
      grid-column: 7 / span 2;
    }

    .second-item,
    .fourth-item {
      grid-column: 9 / span 2;
    }

    .first-item,
    .second-item {
      margin-top: ${calcRem(81)};
    }

    .third-item,
    .fourth-item {
      margin-top: ${calcRem(40)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(274)};
    }

    .heading {
      grid-column: 2 / span 5;
      max-width: ${calcRem(420)};
      line-height: 4rem;
    }

    .sub-heading {
      grid-column: 7 / span 5;
      margin-top: ${calcRem(2)};
    }

    .image {
      grid-column: 1 / span 5;
      margin-top: ${calcRem(48)};
    }

    .first-item,
    .third-item  {
      grid-column: 7 / span 2;
    }

    .second-item,
    .fourth-item {
      grid-column: 9 / span 2;
    }

    .first-item,
    .second-item {
      margin-top: ${calcRem(129)};
    }

    .third-item,
    .fourth-item {
      margin-top: ${calcRem(31)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(212)};
    }

    .heading {
      grid-column: 2 / span 4;
    }

    .sub-heading {
      grid-column: 7 / span 5;
      margin-top: ${calcRem(2)};
    }

    .image {
      grid-column: 1 / span 5;
      margin-top: ${calcRem(23)};
    }

    .first-item,
    .third-item  {
      grid-column: 7 / span 2;
    }

    .second-item,
    .fourth-item {
      grid-column: 9 / span 2;
    }

    .first-item,
    .second-item {
      margin-top: ${calcRem(107)};
    }

    .third-item,
    .fourth-item {
      margin-top: ${calcRem(37)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(143)};
    }

    .heading {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .sub-heading {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: ${calcRem(10)};
    }

    .image {
      grid-column: 1 / span 6;
      grid-row: 5;
      margin-top: ${calcRem(64)};
    }

    .first-item,
    .third-item  {
      grid-column: 1 / span 3;
    }

    .second-item,
    .fourth-item {
      grid-column: 4 / span 3;
    }

    .first-item,
    .second-item {
      grid-row: 3;
      margin-top: ${calcRem(35)};
    }

    .third-item,
    .fourth-item {
      grid-row: 4;
      margin-top: ${calcRem(23)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  & {
    -ms-grid-template-rows: minmax(0, max-content) minmax(0, max-content);
  }

  .heading {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
  }

  .sub-heading {
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 1;
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 2;
    -ms-grid-row-span: 2;
  }

  .first-item,
  .third-item  {
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
  }

  .second-item,
  .fourth-item {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
  }

  .first-item,
  .second-item {
    -ms-grid-row: 2;
  }

  .third-item,
  .fourth-item {
    -ms-grid-row: 3;
  }

  ${desktop.m} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .sub-heading {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .first-item,
    .third-item  {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }

    .second-item,
    .fourth-item {
      -ms-grid-column: ${getGridValueForMs(9)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .sub-heading {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .first-item,
    .third-item  {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }

    .second-item,
    .fourth-item {
      -ms-grid-column: ${getGridValueForMs(9)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }
  }

  ${tablet.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .sub-heading {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .first-item,
    .third-item {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }

    .second-item,
    .fourth-item {
      -ms-grid-column: ${getGridValueForMs(9)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
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
