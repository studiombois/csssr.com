import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    grid-template-rows: max-content max-content;
    margin-top: ${calcRem(247)};
  }

  .title-block {
    grid-column: 2 / span 5;
    grid-row: 1;
  }
  
  .heading {
    z-index: 1;
    font-weight: 900;
  }

  .text {
    margin-top: ${calcRem(30)};
    color: ${colors.secondary.darken100};
    z-index: 1;
  }

  .mongodb-block {
    grid-row: 1;
    grid-column: 9 / span 3;
    margin-top: ${calcRem(98)};
  }

  .mongodb-image {
    position: relative;
    height: max-content;
  }

  .mongodb-text {
    margin-top: ${calcRem(46)};
  }

  .java-block {
    grid-row: 2;
    grid-column: 5 / span 3;
    margin-top: ${calcRem(-212)};
  }

  .java-image {
    position: relative;
    width: max-content;
    height: max-content;
  }

  .java-text {
    margin-top: ${calcRem(36)};
  }
  
  .experts-text {
    grid-column: 5 / span 4;
    grid-row: 5;
    margin-top: ${calcRem(88)};
  }

  .link-text {
    grid-column: 5 / span 4;
    grid-row: 6;
    margin-top: ${calcRem(36)};
  }

  ${desktop.m} {
    .heading {
      grid-column: 2 / span 7;
    }

    .java-block {
      grid-row: 2;
      grid-column: 4 / span 4;
      margin-top: ${calcRem(-84)};
    }

    .experts-text {
      grid-column: 4 / span 6;
    }
  
    .link-text {
      grid-column: 4 / span 6;
    }

    .mongodb-image {
      grid-column: 9 / span 3;
      width: max-content;
      height: max-content;
    }

    .mongodb-text {
      margin-top: ${calcRem(36)};
    }
  }

  ${desktop.s} {
    .heading {
      grid-column: 2 / span 7;
    }

    .java-block {
      grid-row: 2;
      grid-column: 4 / span 4;
      margin-top: ${calcRem(-124)};
    }

    .mongodb-image {
      grid-column: 7 / span 5;
    }

    .mongodb-text {
      margin-top: ${calcRem(36)};
    }

    .experts-text {
      grid-column: 4 / span 6;
    }
  
    .link-text {
      grid-column: 4 / span 6;
    }
  }

  ${tablet.all} {
    margin-top: ${calcRem(170)};

    .heading {
      grid-column: 2 / span 7;
    }

    .text {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(16)};
    }

    .mongodb-block {
      margin-top: ${calcRem(62)};
    }

    .mongodb-image {
      grid-column: 7 / span 6;
      margin-top: 0;
    }

    .mongodb-text {
      margin-top: ${calcRem(22)};
    }

    .java-block {
      grid-row: 2;
      grid-column: 4 / span 3;
      margin-top: ${calcRem(-87)};
    }

    .java-text {
      grid-column: 4 / span 4;
      margin-top: ${calcRem(23)};
    }

    .experts-text {
      grid-column: 4 / span 5;
      margin-top: ${calcRem(56)};
    }
  
    .link-text {
      grid-column: 4 / span 5;
      margin-top: ${calcRem(16)};
    }
  }

  ${mobile.all} {
    margin-top: ${calcRem(130)};

    .title-block,
    .mongodb-block,
    .java-block,
    .experts-text,
    .link-text {
      grid-column: 1 / span 6;
    }

    .text,
    .mongodb-text,
    .java-text {
      margin-top: ${calcRem(31)};
    }

    .mongodb-block {
      grid-row: 2;
      margin-top: ${calcRem(61)};
    }

    .mongodb-image {
      width: max-content;
    }

    .mongodb-text {
      margin-top: ${calcRem(31)};
    }

    .java-block {
      grid-row: 3;
      margin-top: ${calcRem(57)};
    }

    .experts-text {
      grid-row: 4;
      margin-top: ${calcRem(56)};
    }

    .link-text {
      grid-row: 5;
      margin-top: ${calcRem(24)};
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
