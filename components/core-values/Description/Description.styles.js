import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const dynamicStyles = description => css`
  ${description.length < 2 ?
    `
      .icon-column-1 {
        grid-column: 4 / span 1;
      }

      .text-column-1 {
        grid-column: 5 / span 5;
      }
    `
    :
    `
      .icon-column-1 {
        grid-column: 2 / span 1;
      }

      .icon-column-2 {
        grid-column: 7 / span 1;
      }

      .text-column-1 {
        grid-column: 3 / span 3;
      }

      .text-column-2 {
        grid-column: 8 / span 3;
      }
    `
  }
`

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & svg {
    width: ${calcRem(64)};
    height: ${calcRem(64)};
  }

  &.code {
    margin-top: ${calcRem(95)};
  }

  &.reliability {
    margin-top: ${calcRem(95)};
  }

  &.accessibility {
    margin-top: ${calcRem(95)};
  }

  &.ux {
    margin-top: ${calcRem(95)};
  }

  &.security {
    margin-top: ${calcRem(95)};
  }

  ${desktop.l} {
    &.code {
      margin-top: ${calcRem(140)};
    }

    &.reliability {
      margin-top: ${calcRem(140)};
    }

    &.accessibility {
      margin-top: ${calcRem(140)};
    }

    &.ux {
      margin-top: ${calcRem(140)};
    }

    &.security {
      margin-top: ${calcRem(140)};
    }
  }

  ${desktop.m} {
    &.code {
      margin-top: ${calcRem(140)};
    }

    &.reliability {
      margin-top: ${calcRem(140)};
    }

    &.accessibility {
      margin-top: ${calcRem(140)};
    }

    &.ux {
      margin-top: ${calcRem(140)};
    }

    &.security {
      margin-top: ${calcRem(140)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(116)};
    }

    &.code {
      margin-top: ${calcRem(116)};
    }

    &.reliability {
      margin-top: ${calcRem(116)};
    }

    &.accessibility {
      margin-top: ${calcRem(116)};
    }

    &.ux {
      margin-top: ${calcRem(116)};
    }

    &.security {
      margin-top: ${calcRem(116)}
    }
  }

  .text {
    color: ${colors.secondary.darken100};
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(95)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: 0;
    }

    & svg {
      width: ${calcRem(48)};
      height: ${calcRem(48)};
    }

    &.code,
    &.reliability,
    &.accessibility,
    &.ux,
    &.security {
      margin-top: ${calcRem(0)};
    }

    .icon-column-1,
    .icon-column-2,
    .text-column-1,
    .text-column-2 {
      grid-column: 1 / span 6;
      grid-row: auto;
    }

    .icon-column-1,
    .icon-column-2 {
      margin-top: ${calcRem(64)};
    }

    .text-column-1,
    .text-column-2 {
      margin-top: ${calcRem(15)};
    }
  }
`

const ie11Styles = ({ description }) => css`
  ${description.length < 2 ?
    `
      .icon-column-1 {
        -ms-grid-column: ${getGridValueForMs(4)};
        -ms-grid-column-span: ${getGridValueForMs(1)};
      }

      .text-column-1 {
        -ms-grid-column: ${getGridValueForMs(5)};
        -ms-grid-column-span: ${getGridValueForMs(5)};
      }
    `
    :
    `
      .icon-column-1 {
        -ms-grid-column: ${getGridValueForMs(2)};
        -ms-grid-column-span: ${getGridValueForMs(1)};
      }

      .icon-column-2 {
        -ms-grid-column: ${getGridValueForMs(7)};
        -ms-grid-column-span: ${getGridValueForMs(1)};
      }

      .text-column-1 {
        -ms-grid-column: ${getGridValueForMs(3)};
        -ms-grid-column-span: ${getGridValueForMs(3)};
      }

      .text-column-2 {
        -ms-grid-column: ${getGridValueForMs(8)};
        -ms-grid-column-span: ${getGridValueForMs(3)};
      }
    `
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const description = props.description

  return css`
    ${dynamicStyles(description)}
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints, description })}
  `
}
