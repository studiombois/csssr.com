import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  .title,
  .list,
  .link {
    grid-column: 3 / span 4;
  }

  .title {
    margin-top: 188px;
    color: ${colors.secondary.darken100};
    z-index: 1;
  }

  .list {
    margin-top: 51px;
  }

  .vacancy:not(:first-of-type) {
    margin-top: 16px
  }

  .link {
    max-width: 192px;
    margin-top: 56px;
  }

  .picture {
    margin-top: 249px;
    grid-row-end: span 4;
  }

  ${desktop.l} {
    .title,
    .list,
    .link {
      grid-column: 4 / span 3;
    }

    .picture {
      margin-left: -32px;
      grid-column: 7 / span 4;
      width: calc(100% + 32px)
    }
  }

  ${desktop.m} {
    .picture {
      margin-left: -112px;
      grid-column: 7 / span 5;
      width: 100%;
    }
  }

  ${desktop.s} {
    .picture {
      margin-left: -104px;
      grid-column: 7 / span 6;
      width: 100%;
    }
  }

  ${tablet.all} {
    .title {
      margin-top: ${calcRem(162)};
    }

    .list {
      margin-top: ${calcRem(38)};
    }

    .link {
      margin-top: ${calcRem(40)};
    }

    .picture {
      margin-top: ${calcRem(177)};
      margin-left: ${calcRem(-16)};
      grid-column: 7 / span 5;
      width: calc(100% + ${calcRem(32)});
    }
  }

  ${mobile.all} {
    .title,
    .list,
    .link {
      grid-column: 1 / span 6;
    }

    .title{
      margin-top: ${calcRem(129)};
      order: 1;
    }

    .list {
      margin-top: ${calcRem(38)};
      order: 2;
    }

    .link {
      margin-top: ${calcRem(40)};
      order: 3;
    }

    .picture {
      margin-top: ${calcRem(57)};
      grid-column: 2 / span 4;
      grid-row-end: auto;
      order: 4;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .title,
  .list,
  .link {
    -ms-grid-column: ${getGridValueForMs(3)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  .title {
    -ms-grid-row: 1;
  }

  .list {
    -ms-grid-row: 2;
  }

  .link {
    display: block;
    -ms-grid-row: 3;
  }

  .picture {
    -ms-grid-row: 1;
    -ms-grid-row-span: 4
  }

  ${desktop.l} {
    .title,
    .list,
    .link {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .picture {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.m} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.s} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${tablet.all} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${mobile.all} {
    .title,
    .list,
    .link {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .picture {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
      -ms-grid-row: 4;
      -ms-grid-row-span: 1;
    }

    .title {
      -ms-grid-row: 1;
    }

    .list {
      -ms-grid-row: 2;
    }

    .link {
      -ms-grid-row: 3;
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
