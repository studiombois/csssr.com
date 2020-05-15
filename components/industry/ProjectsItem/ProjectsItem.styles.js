import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const dynamicStyles = (direction, { breakpoints: { desktop, tablet, mobile }, lng }) => {
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

        .button {
          grid-column: 3 / span 3;
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

          .button {
            grid-column: 2 / span 3;
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

          .button {
            grid-column: 2 / span 3;
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

          .button {
            grid-column: 2 / span 3;
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
            grid-column: ${lng === 'ru' ? '4' : '3'} / span 2;
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

      .button {
        grid-column: 7 / span 3;
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
          grid-column: ${lng === 'ru' ? '4' : '3'} / span 2;
        }
      }
    `
  )
}

const base = ({ colors,  breakpoints: { desktop, tablet, mobile }}) => css`
  grid-template-rows: auto auto auto 1fr;

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
    white-space: nowrap;
  }

  .text {
    grid-row: 2;
    margin-top: ${calcRem(21)};
    color: ${colors.secondary.darken100};
  }

  .number-data {
    grid-row: 3;
    margin-top: ${calcRem(30)};
    font-weight: normal;
  }

  .text-data {
    grid-row: 4;
    color: ${colors.secondary.darken100};
  }

  .button {
    grid-row: 4;
    margin-top: ${calcRem(104)};
  }

  ${desktop.l} {
    .button {
      max-width: ${calcRem(272)};
    }
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

    .button {
      max-width: ${calcRem(272)};
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

    .button {
      max-width: ${calcRem(296)};
    }
  }

  ${tablet.all} {
    &.first-item .image {
      max-width: ${calcRem(338)};
      margin-left: ${calcRem(-33)};
    }

    &.second-item .image {
      max-width: ${calcRem(332)};
      margin-top: ${calcRem(2)};
      margin-right: ${calcRem(-35)};
    }

    &.third-item .image {
      max-width: ${calcRem(352)};
      margin-top: ${calcRem(-10)};
      margin-left: ${calcRem(-23)};
    }

    .text {
      margin-top: ${calcRem(17)};
    }

    .number-data {
      margin-top: ${calcRem(40)};
    }

    .text-data{
      margin-top: ${calcRem(9)};
    }

    .button {
      margin-top: ${calcRem(72)};
    }
  }

  ${mobile.all} {
    & {
      grid-template-rows: auto;
    }

    .image {
      grid-row: 1;
      width: ${calcRem(360)};
      margin-bottom: ${calcRem(14)};
    }

    .image {
      width: auto;
    }

    &.first-item .image {
      margin-left: 0;
    }

    &.second-item .image {
      margin-top: ${calcRem(2)};
      margin-right: 0;
    }

    &.third-item .image {
      margin-top: ${calcRem(-10)};
      margin-left: 0;
    }

    .item-heading {
      grid-row: 2;
      margin-top: ${calcRem(38)};
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
      margin-top: ${calcRem(-5)};
    }

    .button {
      grid-row: 6;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(32)};
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
          .image {
            -ms-grid-column: ${getGridValueForMs(8)};
            -ms-grid-column-span: ${getGridValueForMs(4)};
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

        ${desktop.s} {
          .image {
            -ms-grid-column: ${getGridValueForMs(8)};
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
        -ms-grid-column-span: ${getGridValueForMs(5)};
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
      }
    `
  )
}

const ie11BaseStyles = () => css`
  -ms-grid-rows: auto auto auto 1fr;

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
  const { lng } = props

  return css`
    ${dynamicStyles(props.direction, { breakpoints, lng })}
    ${base({ colors, breakpoints })}
    ${props.isIe11 && ie11DynamicStyles(props.direction, { breakpoints })}
    ${props.isIe11 && ie11BaseStyles()}
  `
}
