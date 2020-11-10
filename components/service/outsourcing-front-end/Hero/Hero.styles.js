import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative;
  }

  .picture-container {
    position: absolute;
    height: 0;
    overflow: hidden;
  }

  .picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

    .picture-container {
      top: -68px;
    }
  }

  ${desktop.l} {
    .title {
      grid-column: 2 / span 4;
    }

    .button {
      grid-column: 2 / span 2;
    }

    .picture-container {
      right: 152px;
      width: 728px;
      padding-top: calc(2064 / 2184 * 728px);
    }
  }

  ${desktop.m} {
    .title {
      grid-column: 2 / span 6;
    }

    .button {
      grid-column: 2 / span 3;
    }

    .picture-container {
      right: 0;
      width: 728px;
      padding-top: calc(2064 / 2184 * 728px);
    }
  }

  ${desktop.s} {
    .title {
      grid-column: 2 / span 6;
    }

    .button {
      grid-column: 2 / span 3;
    }

    .picture-container {
      top: -56px;
      right: 0;
      width: 672px;
      padding-top: calc(2064 / 2184 * 672px);
    }
  }

  ${tablet.all} {
    .title {
      margin-top: ${calcRem(208)};
    }

    .description {
      margin-top: ${calcRem(27)};
    }

    .button {
      margin-top: ${calcRem(57)};
    }

    .title,
    .description,
    .button {
      grid-column: 2 / span 4;
    }

    .picture-container {
      top: ${calcRem(-42)};
      right: 0;
      width: ${calcRem(580)};
      padding-top: calc(2064 / 2184 * ${calcRem(580)});
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

    .picture-container {
      top: ${calcRem(40)};
      right: ${calcRem(-16)};
      width: ${calcRem(176)};
      padding-top: ${calcRem(176)};
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
    .description,
    .button {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
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
