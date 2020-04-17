import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    grid-template-rows: max-content max-content max-content;
    padding-top: ${calcRem(135)};
  }

  .heading {
    grid-column: 8 / span 5;
    grid-row: 1;
  }

  .list {
    display: grid;
    grid-column: 8 / span 5;
    grid-row: 2 / 5;
    grid-template-columns: 20px 1fr;
    grid-template-rows: max-content max-content max-content max-content;
    grid-gap: 8px 22px;
    align-items: baseline;
    margin-top: ${calcRem(56)};
  }

  .number-item {
    &:nth-of-type(1) span {
      color: #41CE7F;
    }

    &:nth-of-type(3) span {
      color: #FFC045;
    }

    &:nth-of-type(5) span {
      color: #F45B53;
    }

    &:nth-of-type(7) span {
      color: #0254D8;
    }

    &:nth-of-type(9) span {
      color: #41CE7F;
    }

    & > span {
      font-family: 'Roboto Slab', serif;
      font-size: ${calcRem(48)};
      line-height: ${calcRem(64)};
    }
  }

  .image {
    grid-column: 2 / span 4;
    grid-row: 1 / 5;
  }

  ${desktop.all} {
    .number-item {
      & > span {
        font-size: ${calcRem(48)};
        line-height: ${calcRem(64)};
      }
    }
  }

  ${desktop.l} {
    & {
      padding-top: ${calcRem(217)};
    }
  }

  ${desktop.m} {
    & {
      padding-top: ${calcRem(217)};
    }

    .image {
      grid-row: 1 / 4;
      margin-top: ${calcRem(60)};
    }
  }

  ${desktop.s} {
    & {
      padding-top: ${calcRem(208)};
    }

    .image {
      grid-row: 2 / 4;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(118)};
    }

    .text-item {
      & > span {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }
    }

    .number-item {
      & > span {
        font-size: ${calcRem(24)};
        line-height: ${calcRem(32)};
      }
    }

    .image {
      grid-row: 2 / 4;
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(88)};
    }

    .heading,
    .list {
      grid-column: 1 / span 6;
    }

    .list {
      margin-top: ${calcRem(24)};
    }

    .number-item {
      & > span {
        font-size: ${calcRem(24)};
        line-height: ${calcRem(32)};
      }
    }

    .text-item {
      & > span {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }
    }

    .image {
      display: none;
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
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
  }

  .text {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 2;
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
  }

  ${desktop.m} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .text {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
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

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
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
