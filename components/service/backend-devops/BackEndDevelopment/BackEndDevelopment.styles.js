import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    grid-template-rows: max-content max-content;
    margin-top: ${calcRem(168)};
  }

  .heading {
    grid-column: 7 / span 4;
    grid-row: 1;
    z-index: 1;
    margin-top: ${calcRem(13)};
  }

  .text {
    grid-column: 7 / span 3;
    grid-row: 2;
    margin-top: ${calcRem(31)};
    color: ${colors.secondary.darken100};
    z-index: 1;
  }

  .image {
    position: relative;
    grid-column: 2 / span 4;
    grid-row: 1 / 4;
  }

  .left-block {
    grid-column: 3 / span 3;
    grid-row: 4;
    margin-top: ${calcRem(220)};
  }

  .text-do {
    grid-column: 3 / span 3;
    grid-row: 5;
    margin-top: ${calcRem(22)};
  }

  .list {
    grid-row: 4;
    grid-column: 7 / span 3;
    margin-top: ${calcRem(238)};
  }

  .list-item {
    padding-left: ${calcRem(152)};

    &:not(:first-of-type) {
      margin-top: ${calcRem(97)};
    }

    &:before {
      content: '';
      position: absolute;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      border: none;
    }

    &:nth-of-type(1) {
      &:before {
        width: ${calcRem(65)};
        height: ${calcRem(63)};
        background-image: url(${require('../../../../static/icons/service/back-end-and-devops/full_stack.svg').default});
      }
    }

    &:nth-of-type(2) {
      &:before {
        width: ${calcRem(65)};
        height: ${calcRem(56)};
        background-image: url(${require('../../../../static/icons/service/back-end-and-devops/back_end.svg').default});
      }
    }

    &:nth-of-type(3) {
      &:before {
        width: ${calcRem(64)};
        height: ${calcRem(64)};
        background-image: url(${require('../../../../static/icons/service/back-end-and-devops/third_party.svg').default});
      }
    }
  }

  .item-text {
    margin-top: ${calcRem(15)};
  }

  ${desktop.m} {
    .image {
      grid-column: 2 / span 5;
    }

    .heading {
      grid-column: 7 / span 5;
    }

    .text {
      grid-column: 7 / span 5;
    }

    .list {
      grid-column: 7 / span 4;
    }
  }

  ${desktop.s} {
    .image {
      grid-column: 2 / span 5;
    }

    .heading {
      grid-column: 7 / span 5;
    }

    .text {
      grid-column: 7 / span 5;
    }

    .list {
      grid-column: 7 / span 4;
    }
  }

  ${tablet.all} {
    .image {
      grid-column: 2 / span 5;
    }

    .text,
    .heading {
      grid-column: 8 / span 5;
    }

    .heading {
      margin-top: ${calcRem(22)};
    }

    .text {
      margin-top: ${calcRem(26)};
    }
    
    .list {
      grid-column: 7 / span 5;
    }

    .list-item {
      padding-left: ${calcRem(81)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(63)};
      }

      &:nth-of-type(1) {
        &:before {
          width: ${calcRem(49)};
          height: ${calcRem(47)};
        }
      }
  
      &:nth-of-type(2) {
        &:before {
          width: ${calcRem(49)};
          height: ${calcRem(42)};
        }
      }
  
      &:nth-of-type(3) {
        &:before {
          width: ${calcRem(48)};
          height: ${calcRem(48)};
        }
      }
    }

    .text-do {
      margin-top: ${calcRem(14)};
    }

    .item-text {
      margin-top: ${calcRem(9)};
    }
  }

  ${mobile.all} {
    margin-top: ${calcRem(143)};

    .heading,
    .text,
    .button,
    .image {
      grid-column: 1 / span 6;
    }

    .heading {
      grid-row: 1;
    }

    .text {
      grid-row: 2;
      margin-top: ${calcRem(34)};
    }

    .image {
      grid-row: 3;
      margin-top: ${calcRem(39)};
    }
  }

  .left-block {
    grid-column: 1 / span 6;
    grid-row: 4;
    margin-top: ${calcRem(121)};
  }

  .list {
    grid-column: 1 / span 6;
    margin-top: ${calcRem(71)};
    grid-row: 5;
  }

  .list-item {
    padding-left: ${calcRem(64)};

    &:not(:first-of-type) {
      margin-top: ${calcRem(71)};
    }

    &:nth-of-type(1) {
      &:before {
        width: ${calcRem(48)};
        height: ${calcRem(48)};
      }
    }

    &:nth-of-type(2) {
      &:before {
        width: ${calcRem(48)};
        height: ${calcRem(48)};
      }
    }

    &:nth-of-type(3) {
      &:before {
        width: ${calcRem(40)};
        height: ${calcRem(40)};
      }
    }
  }

  .item-text {
    margin-top: ${calcRem(25)};
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
