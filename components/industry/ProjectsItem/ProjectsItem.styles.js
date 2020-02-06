import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const dynamicStyles = (direction, { breakpoints: { desktop, tablet, mobile } }) => {
  if (direction === 'reverse') {
    return (
      css`
        .image {
          grid-column: 8 / span 4;
        }

        .item-heading {
          grid-column: 3 / span 2;
        }

        .text {
          grid-column: 3 / span 3;
        }

        .column-1 {
          grid-column: 3 / span 2;
        }

        .column-2 {
          grid-column: 5 / span 2;
        }

        ${desktop.m} {
          .image {
            grid-column: 8 / span 4;
          }

          .item-heading {
            grid-column: 2 / span 2;
          }

          .text {
            grid-column: 2 / span 4;
          }

          .column-1 {
            grid-column: 2 / span 2;
          }

          .column-2 {
            grid-column: 4 / span 2;
          }
        }

        ${desktop.s} {
          .image {
            grid-column: 8 / span 5;
          }

          .item-heading {
            grid-column: 2 / span 2;
          }

          .text {
            grid-column: 2 / span 5;
          }

          .column-1 {
            grid-column: 2 / span 2;
          }

          .column-2 {
            grid-column: 4 / span 2;
          }
        }

        ${tablet.all} {
          .image {
            grid-column: 8 / span 5;
          }

          .item-heading {
            grid-column: 2 / span 2;
          }

          .text {
            grid-column: 2 / span 4;
          }

          .column-1 {
            grid-column: 2 / span 2;
          }

          .column-2 {
            grid-column: 4 / span 2;
          }
        }

        ${mobile.all} {
          .image,
          .item-heading,
          .text {
            grid-column: 1 / span 6;
          }

          .column-1 {
            grid-column: 1 / span 2;
          }

          .column-2 {
            grid-column: 3 / span 2;
          }
        }
      `
    )
  }

  return (
    css`
      .image {
        grid-column: 3 / span 5;
      }

      .item-heading {
        grid-column: 7 / span 2;
      }

      .text {
        grid-column: 7 / span 4;
      }

      .column-1 {
        grid-column: 7 / span 2;
      }

      .column-2 {
        grid-column: 9 / span 2;
      }

      ${desktop.m} {
        .text {
          grid-column: 7 / span 5;
        }

        .image {
          grid-column: 2 / span 5;
        }
      }

      ${desktop.s} {
        .image {
          grid-column: 2 / span 5;
        }

        .item-heading {
          grid-column: 7 / span 2;
        }

        .text {
          grid-column: 7 / span 5;
        }

        .column-1 {
          grid-column: 7 / span 2;
        }

        .column-2 {
          grid-column: 9 / span 2;
        }
      }

      ${tablet.all} {
        .image {
          grid-column: 2 / span 5;
        }

        .item-heading {
          grid-column: 8 / span 2;
        }

        .text {
          grid-column: 8 / span 4;
        }

        .column-1 {
          grid-column: 8 / span 2;
        }

        .column-2 {
          grid-column: 10 / span 2;
        }
      }

      ${mobile.all} {
        .image,
        .item-heading,
        .text {
          grid-column: 1 / span 6;
        }

        .column-1 {
          grid-column: 1 / span 2;
        }

        .column-2 {
          grid-column: 3 / span 2;
        }
      }
    `
  )
}

// хак для grid-template-rows обеспечивает рамер по контенту для всех строк кроме последней
// после этого приема можно использовать положительный margin-top для отступов
// firefox применяет max-content только внутри функции minmax
const base = ({ colors,  breakpoints: { desktop, tablet, mobile }}) => css`
  grid-template-rows: minmax(0,max-content) minmax(0,max-content) minmax(0,max-content) 1fr;

  .image {
    img {
      height: auto;
    }
  }

  .image {
    grid-row: 1 / span 4;
  }

  &.first-item .image {
    max-width: ${calcRem(467)};
    margin-left: ${calcRem(-45)};
  }

  &.second-item .image {
    max-width: ${calcRem(456)};
  }

  &.third-item .image {
    max-width: ${calcRem(491)};
    margin-top: ${calcRem(-17)};
    margin-left: ${calcRem(-33)};
  }

  .item-heading {
    grid-row: 1;
    color: ${colors.secondary.darken100};
  }

  .text {
    grid-row: 2;
    margin-top: ${calcRem(21)};
    color: ${colors.secondary.darken100};
  }

  .number-data {
    grid-row: 3;
    margin-top: ${calcRem(30)};
  }

  .text-data {
    grid-row: 4;
    color: ${colors.secondary.darken100};
  }

  ${desktop.m} {
    &.first-item .image {
      max-width: ${calcRem(445)};
      margin-left: ${calcRem(-12)};
    }

    &.second-item .image {
      max-width: none;
    }

    &.third-item .image {
      max-width: ${calcRem(470)};
      margin-top: ${calcRem(-17)};
      margin-left: 0;
    }

    &.third-item .text {
      grid-column: 7 / span 4;
    }
  }

  ${desktop.s} {
    &.first-item .image {
      max-width: ${calcRem(446)};
    }

    &.second-item .image {
      max-width: ${calcRem(435)};
    }

    &.third-item .image {
      max-width: ${calcRem(470)};
    }
  }

  ${tablet.all} {
    &.first-item .image {
      max-width: ${calcRem(346)};
      margin-left: ${calcRem(-41)};
    }

    &.second-item .image {
      max-width: ${calcRem(332)};
      margin-right: ${calcRem(-35)};
    }

    &.third-item .image {
      max-width: ${calcRem(360)};
      margin-top: ${calcRem(-17)};
      margin-left: ${calcRem(-27)};
    }
  }

  ${mobile.all} {
    .image {
      grid-row: 1;
    }

    &.first-item .image {
      width: ${calcRem(336)};
      margin-left: ${calcRem(-9)};
    }

    &.second-item .image {
      width: ${calcRem(340)};
    }

    &.third-item .image {
      margin-top: 0;
      margin-left: ${calcRem(-12)};
      width: ${calcRem(350)};
    }

    .item-heading {
      grid-row: 2;
      margin-top: ${calcRem(19)};
    }

    .text {
      grid-row: 3;
      margin-top: ${calcRem(16)};
    }

    .number-data {
      grid-row: 4;
      margin-top: ${calcRem(14)};
    }

    .text-data {
      grid-row: 5;
    }
  }
`

const ie11DynamicStyles = (direction, { breakpoints: { desktop, tablet }}) => {
  if (direction === 'reverse') {
    return (
      css`
        .image {
          -ms-grid-column: ${getGridValueForMs(8)};
          -ms-grid-column-span: ${getGridValueForMs(5)};
        }

        .item-heading {
          -ms-grid-column: ${getGridValueForMs(3)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }

        .text {
          -ms-grid-column: ${getGridValueForMs(3)};
          -ms-grid-column-span: ${getGridValueForMs(4)};
        }

        .column-1 {
          -ms-grid-column: ${getGridValueForMs(3)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }

        .column-2 {
          -ms-grid-column: ${getGridValueForMs(5)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }

        ${desktop.m} {
          .item-heading {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }

          .text {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(4)};
          }

          .column-1 {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }

          .column-2 {
            -ms-grid-column: ${getGridValueForMs(4)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }
        }

        ${desktop.s} {
          .item-heading {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }

          .text {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(4)};
          }

          .column-1 {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }

          .column-2 {
            -ms-grid-column: ${getGridValueForMs(4)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }
        }

        ${desktop.s} {
          .image {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }

          .text {
            -ms-grid-column: ${getGridValueForMs(4)};
            -ms-grid-column-span: ${getGridValueForMs(4)};
          }

          .column-1 {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }

          .column-2 {
            -ms-grid-column: ${getGridValueForMs(4)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }
        }

        ${tablet.all} {
          .image {
            -ms-grid-column: ${getGridValueForMs(7)};
            -ms-grid-column-span: ${getGridValueForMs(5)};
          }

          .item-heading {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }

          .text {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(4)};
          }

          .column-1 {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }

          .column-2 {
            -ms-grid-column: ${getGridValueForMs(4)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
          }
        }
      `
    )
  }

  return (
    css`
      .image {
        -ms-grid-column: ${getGridValueForMs(3)};
        -ms-grid-column-span: ${getGridValueForMs(5)};
      }

      .item-heading {
        -ms-grid-column: ${getGridValueForMs(7)};
        -ms-grid-column-span: ${getGridValueForMs(2)};
      }

      .text {
        -ms-grid-column: ${getGridValueForMs(7)};
        -ms-grid-column-span: ${getGridValueForMs(4)};
      }

      .column-1 {
        -ms-grid-column: ${getGridValueForMs(7)};
        -ms-grid-column-span: ${getGridValueForMs(2)};
      }

      .column-2 {
        -ms-grid-column: ${getGridValueForMs(9)};
        -ms-grid-column-span: ${getGridValueForMs(2)};
      }

      ${desktop.m} {
        .image {
          -ms-grid-column: ${getGridValueForMs(2)};
          -ms-grid-column-span: ${getGridValueForMs(5)};
        }
      }

      ${desktop.s} {
        .image {
          -ms-grid-column: ${getGridValueForMs(2)};
          -ms-grid-column-span: ${getGridValueForMs(5)};
        }

        .item-heading {
          -ms-grid-column: ${getGridValueForMs(8)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }

        .text {
          -ms-grid-column: ${getGridValueForMs(8)};
          -ms-grid-column-span: ${getGridValueForMs(4)};
        }

        .column-1 {
          -ms-grid-column: ${getGridValueForMs(8)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }

        .column-2 {
          -ms-grid-column: ${getGridValueForMs(10)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }
      }

      ${tablet.all} {
        .image {
          -ms-grid-column: ${getGridValueForMs(2)};
          -ms-grid-column-span: ${getGridValueForMs(5)};
        }

        .item-heading {
          -ms-grid-column: ${getGridValueForMs(8)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }

        .text {
          -ms-grid-column: ${getGridValueForMs(8)};
          -ms-grid-column-span: ${getGridValueForMs(4)};
        }

        .column-1 {
          -ms-grid-column: ${getGridValueForMs(8)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }

        .column-2 {
          -ms-grid-column: ${getGridValueForMs(10)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
        }
      }
    `
  )
}

const ie11BaseStyles = () => css`
  -ms-grid-rows: minmax(10px, max-content) minmax(10px, max-content) minmax(10px, max-content);

  .image {
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
  }

  .item-heading {
    -ms-grid-row: 1;
  }

  .text {
    -ms-grid-row: 2;
  }

  .number-data {
    -ms-grid-row: 3;
  }

  .text-data {
    -ms-grid-row: 4;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${dynamicStyles(props.direction, { breakpoints })}
    ${base({ colors, breakpoints })}
    ${props.isIe11 && ie11DynamicStyles(props.direction, { breakpoints })}
    ${props.isIe11 && ie11BaseStyles()}
  `
}
