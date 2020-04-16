import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    grid-template-rows: max-content max-content;
    padding-top: ${calcRem(135)};
    background-image: url(${require('../../../static/icons/project/desktop.l/hero-bg.svg').default});
    background-repeat: no-repeat;
    background-position: 59% 100%;
  }

  .heading {
    grid-column: 2 / span 5;
    grid-row: 1;
    z-index: 1;
  }

  .link {
    grid-column: 2 / span 5;
    grid-row: 2;
    z-index: 1;
    margin-top: ${calcRem(17)};
    font-family: "Roboto", sans-serif;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(32)};
    font-weight: 300;
    color: ${colors.primary.origin};
    text-decoration: underline;
  }

  .sub-heading {
    grid-column: 2 / span 5;
    grid-row: 3;
    z-index: 1;
    margin-top: ${calcRem(85)};
    font-weight: normal;
  }

  .text {
    grid-column: 2 / span 5;
    grid-row: 4;
    margin-top: ${calcRem(39)};
    color: ${colors.secondary.darken100};
    z-index: 1;
  }

  .image {
    grid-column: 8 / span 5;
    grid-row: 1 / 5;
  }

  ${desktop.l} {
    & {
      padding-bottom: ${calcRem(80)};
    }

    .image {
      width: max-content;
      height: max-content;
      margin-top: ${calcRem(35)};
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: ${calcRem(80)};
      background-image: url(${require('../../../static/icons/project/desktop.m/hero-bg.svg').default});
      background-position: 56.5% 100%;
    }

    .heading {
      grid-column: 2 / span 7;
    }

    .text {
      margin-top: ${calcRem(39)};
    }

    .image {
      position: absolute;
      right: 0;
      z-index: -1;
      margin-top: ${calcRem(160)};
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: ${calcRem(32)};
      background-image: url(${require('../../../static/icons/project/desktop.m/hero-bg.svg').default});
      background-position: 56.5% 100%;
    }

    .heading {
      grid-column: 2 / span 7;
    }

    .text {
      margin-top: ${calcRem(39)};
    }

    .image {
      position: absolute;
      right: 0;
      z-index: -1;
      margin-top: ${calcRem(160)};
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(84)};
      padding-bottom: ${calcRem(64)};
      background-image: url(${require('../../../static/icons/project/desktop.m/hero-bg.svg').default});
      background-position: 54.5% 100%;
      background-size: auto 85%;
    }
    

    .heading {
      grid-column: 2 / span 7;
      margin-top: 1rem;
    }

    .link {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .sub-heading {
      margin-top: ${calcRem(64)};
    }

    .text {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(24)};
    }

    .image {
      position: absolute;
      right: 0;
      z-index: -1;
      margin-top: ${calcRem(48)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(80)};
      padding-bottom: ${calcRem(77)};
      background-image: url(${require('../../../static/icons/project/mobile.all/hero-bg.svg').default});
      background-position: 35% 100%;
    }

    .heading,
    .link,
    .sub-heading,
    .text {
      grid-column: 1 / span 6;
    }

    .link {
      margin-top: ${calcRem(11)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .sub-heading {
      margin-top: ${calcRem(64)};
    }

    .text {
      margin-top: ${calcRem(24)};
    }

    .image {
      grid-row: 5;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(89)};
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
