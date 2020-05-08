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
  }

  ${tablet.all} {
    padding-top: ${calcRem(120)};

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
