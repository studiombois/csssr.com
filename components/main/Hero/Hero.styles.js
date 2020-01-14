import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  .title {
    position: relative;
    z-index: 2;
    margin-top: 192px;
    grid-column: 2 / span 6;
  }

  .picture-wrapper  {
    position: relative;
    margin-top: -48px;
    margin-left: -24px;
    grid-column: 1 / span 12;
    width: calc(100% + 48px);
  }

  .picture-hover-area {
      position: absolute;
      z-index: 1;
      top: 116px;
      left: calc(128px / 2);
      display: block;
      width: calc(100% - 128px);
      height: 278px;

      :hover + .picture {
        background-color: black;
        transition: background-color 100ms ease-out;
      }
    }

  .picture {
    width: 100%;
  }

  .description {
    position: relative;
    margin-top: -292px;
    grid-column: 2 / span 6;
    color: ${colors.secondary.darken100};
  }

  ${desktop.l} {
    .title {
      grid-column: 3 / span 6;
    }

    .picture-wrapper  {
      grid-column: 3 / span 8;
    }

    .description {
      grid-column: 3 / span 5;
    }
  }

  ${desktop.m} {
    .picture-wrapper  {
      margin-left: 48px;
      grid-column: 1 / span 12;
      width:  calc(100% - 96px);
    }
  }

  ${desktop.s} {
    .picture-wrapper  {
      margin-left: 0;
      grid-column: 1 / span 12;
      width: 100%;
    }
  }

  ${tablet.all} {
    .title {
      margin-top: 12.25rem;
    }

    .picture-wrapper  {
      margin-top: -2.75rem;
      margin-left: -1rem;
      width: calc(100% + 2rem);
    }

    .picture-hover-area {
      top: 7.25rem;
      left: calc(8rem / 2);
      width: calc(100% - 8rem);
      height: 17.375rem;
    }

    .description {
      margin-top: -14.25rem;
    }
  }

  ${mobile.all} {
    .title,
    .picture-wrapper,
    .description {
      grid-column: 1 / span 6;
    }

    .title {
      margin-top: 6.5rem;
    }

    .picture-wrapper {
      margin-top: -0.5rem;
      margin-left: -1rem;
      width: calc(100% + 2rem);
    }

    .picture-hover-area {
      display: none;
    }

    .description {
      margin-top: 1.5rem;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop }}) => css`
  .title {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  .picture-wrapper  {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(11)};
  }

  .description {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  ${desktop.l} {
    .title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .picture-wrapper  {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }

    .description {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
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
