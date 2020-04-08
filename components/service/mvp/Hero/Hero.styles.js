import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    padding-bottom: 437px;
    position: relative;
  }

  .picture {
    position: absolute;
  }

  ${desktop.all} {
    .title {
      margin-top: 199px;
    }

    .description {
      margin-top: 77px;
      grid-column: 2 / span 4;
    }

    .button {
      margin-top: 60px;
    }
  }

  ${desktop.l} {
    & {
      padding-bottom: 437px;
    }

    .title {
      grid-column: 2 / span 4;
    }

    .button {
      grid-column: 2 / span 2;
    }

    .picture {
      top: 224px;
      right: 152px;
      width: 728px;
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: 453px;
    }

    .title {
      grid-column: 2 / span 6;
    }

    .button {
      grid-column: 2 / span 3;
    }

    .picture {
      top: 232px;
      right: 0;
      width: 788px;
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: 453px;
    }

    .title {
      grid-column: 2 / span 6;
    }

    .button {
      grid-column: 2 / span 3;
    }

    .picture {
      top: 278px;
      right: -6px;
      width: 724px;
    }
  }

  ${tablet.all} {
    & {
      padding-bottom:  ${calcRem(255)};
    }

    .title {
      margin-top: ${calcRem(212)};
    }

    .description {
      margin-top: ${calcRem(27)};
    }

    .button {
      margin-top: ${calcRem(57)};
      grid-column: 2 / span 3;
    }

    .title,
    .description {
      grid-column: 2 / span 4;
    }

    .picture {
      top: ${calcRem(184)};
      right: 0;
      width: ${calcRem(544)};
    }
  }

  ${mobile.all} {
    .title {
      margin-top: ${calcRem(196)};
    }

    .description {
      margin-top: ${calcRem(27)};
    }

    .button {
      margin-top: ${calcRem(49)};
    }

    .title,
    .description,
    .button {
      grid-column: 1 / span 6;
    }

    .picture {
      top: ${calcRem(26)};
      right: ${calcRem(-22)};
      width: ${calcRem(126)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  -ms-grid-column: ${getGridValueForMs(2)};
  -ms-grid-column-span: ${getGridValueForMs(6)};

  ${desktop.all} {
    .description {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.l} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }
  }

  ${desktop.m} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.s} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${tablet.all} {
    .title,
    .description {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .button {
      grid-column: 2 / span 3;
    }
  }

  ${mobile.all} {
    .title,
    .description,
    .button {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
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
