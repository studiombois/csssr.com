import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet }}) => css`
  & {
    margin-top: ${calcRem(144)};
  }

  .title {
    grid-column: 1 / span 6;
    grid-row: 1;
  }

  .subtitle {
    grid-column: 1 / span 6;
    grid-row: 2;
    margin-top: ${calcRem(26)};
  }

  .description {
    grid-column: 1 / span 6;
    grid-row: 3;
    margin-top: ${calcRem(38)};
  }

  .img {
    grid-column: 1 / span 6;
    grid-row: 4;
    margin-top: ${calcRem(1)};
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(216)};
      grid-template-rows: max-content max-content;
    }

    .title {
      grid-column: 2 / span 5;
    }

    .subtitle {
      grid-column: 2 / span 5;
    }

    .description {
      grid-column: 2 / span 5;
    }

    .img {
      grid-column: 7 / span 6;
      grid-row: 1 / span 3;
      margin-top: ${calcRem(-31)};
    }
  }

  ${desktop.all} {
    & {
      margin-top: ${calcRem(305)};
      grid-template-rows: max-content max-content;
    }

    .img {
      grid-row: 1 / span 3;
    }
  }

  ${desktop.s} {
    .title {
      grid-column: 2 / span 5;
    }

    .subtitle {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(31)};
    }

    .description {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(43)};
    }

    .img {
      grid-column: 7 / span 6;
      margin-top: ${calcRem(-47)};
    }
  }

  ${desktop.m} {
    .title {
      grid-column: 2 / span 5;
    }

    .subtitle {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(31)};
    }

    .description {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(43)};
    }

    .img {
      grid-column: 7 / span 6;
      margin-top: ${calcRem(-46)};
      margin-left: ${calcRem(48)};
    }
  }

  ${desktop.l} {
    .title {
      grid-column: 2 / span 4;
    }

    .subtitle {
      grid-column: 2 / span 4;
      margin-top: ${calcRem(31)};
    }

    .description {
      grid-column: 2 / span 4;
      margin-top: ${calcRem(43)};
    }

    .img {
      grid-column: 7 / span 5;
      margin-top: ${calcRem(-46)};
    }
  }
`


const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  .title {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 1;
  }

  .subtitle {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 2;
  }

  .description {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 3;
  }

  .img {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 4;
  }

  ${tablet.all} {
    & {
      -ms-grid-template-rows: max-content max-content;
    }

    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .subtitle {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .description {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .img {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: ${getGridValueForMs(1)};
      -ms-grid-row-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.all} {
    & {
      -ms-grid-template-rows: max-content max-content;
    }

    .img {
      -ms-grid-row: ${getGridValueForMs(1)};
      -ms-grid-row-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.s} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .subtitle {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .description {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .img {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${desktop.m} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .subtitle {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .description {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .img {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${desktop.l} {
    .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .subtitle {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .description {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .img {
      -ms-grid-column: ${getGridValueForMs(7)};
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
