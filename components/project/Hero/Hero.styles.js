import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    overflow: hidden;
    padding-bottom: ${calcRem(135)};
  }

  .grid {
    grid-template-rows: max-content max-content max-content;
    padding-top: ${calcRem(135)};
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
    width: max-content;
    margin-top: ${calcRem(19)};
    font-family: "Roboto", sans-serif;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    color: ${colors.primary.origin};
    text-decoration: underline;
    
    &:before {
      top: 0;
      right: ${calcRem(-3)};
    }
  }

  .sub-heading {
    grid-column: 2 / span 5;
    grid-row: 3;
    z-index: 1;
    margin-top: ${calcRem(90)};
    font-weight: normal;
  }

  .text {
    grid-column: 2 / span 5;
    grid-row: 4;
    margin-top: ${calcRem(38)};
    color: ${colors.secondary.darken100};
    z-index: 1;
  }

  .pic-wrapper {
    position: relative;
    grid-column: 8 / span 5;
    grid-row: 1 / 5;
    max-width: ${calcRem(728)};
  }

  .image {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;

    &:before {
      content: '';
      position: absolute;
      z-index: 2;
      height: max-content;
      background-image: url(${require('../../../static/images/project/common-pics/desktop.l/hero-bg.png')});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  ${desktop.all} {
    .paragraph + .paragraph{
        margin-top: ${calcRem(24)};
    }
  }

  ${desktop.l} {
    & {
      padding-bottom: ${calcRem(260)};
    }

    .heading {
      grid-column: 2 / span 7;
    }

    .pic-wrapper {
      grid-row: 4;
      max-width: ${calcRem(728)};
      margin-top: ${calcRem(-77)};
    }

    .image {
      width: auto;
      height: auto;

      &:before {
        top: ${calcRem(-78)};
        left: ${calcRem(-185)};
        width: ${calcRem(298)};
        height: ${calcRem(799)};
      }
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: ${calcRem(281)};
    }

    .heading {
      grid-column: 2 / span 10;
    }

    .link {
      margin-top: ${calcRem(23)};
    }

    .text {
      margin-top: ${calcRem(39)};
    }

    .pic-wrapper {
      grid-column: 8 / span 5;
      grid-row: 2 / span 3;
      z-index: -1;
      width: ${calcRem(560)};
      margin-top: ${calcRem(72)};
    }

    .image {
      position: absolute;
      height: auto;
      top: 0;
      left: calc((100vw - 83rem) / 2 - 16px);

      &:before {
        top: ${calcRem(-68)};
        left: ${calcRem(-192)};
        width: ${calcRem(298)};
        height: ${calcRem(809)};
        background-image: url(${require('../../../static/images/project/common-pics/desktop.m/hero-bg.png')});
      }
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: ${calcRem(285)};
    }

    .heading {
      grid-column: 2 / span 10;
    }

    .text {
      margin-top: ${calcRem(39)};
    }

    .pic-wrapper {
      grid-row: 2 / span 3;
      z-index: -1;
      width: ${calcRem(528)};
      margin-top: ${calcRem(89)};
    }

    .image {
      position: absolute;
      height: auto;
      top: 0;
      left: calc((100vw - 77rem) / 2 - 24px);

      &:before {
        top: ${calcRem(-68)};
        left: ${calcRem(-192)};
        width: ${calcRem(278)};
        height: ${calcRem(810)};
        background-image: url(${require('../../../static/images/project/common-pics/desktop.m/hero-bg.png')});
      }
    }
  }

  ${tablet.all} {
    & {
      padding-bottom: ${calcRem(202)};
    }

    .grid {
      padding-top: ${calcRem(84)};
    }

    .heading {
      grid-column: 2 / span 8;
      margin-top: 1rem;
    }

    .link {
      margin-top: ${calcRem(10)};
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

    .paragraph + .paragraph{
      margin-top: ${calcRem(16)};
    }

    .pic-wrapper {
      grid-row: 2 / span 3;
      display: flex;
      z-index: -1;
      margin-top: ${calcRem(-4)};
      width: ${calcRem(424)};
    }

    .image {
      position: absolute;
      height: auto;
      top: 0;
      left: calc((100vw - 59rem) / 2 - 2.5rem);

      &:before {
        top: ${calcRem(-36)};
        left: ${calcRem(-144)};
        width: ${calcRem(200)};
        height: ${calcRem(543)};
        background-image: url(${require('../../../static/images/project/common-pics/tablet.all/hero-bg.png')});
      }
    }
  }

  ${mobile.all} {
    & {
      padding-bottom: ${calcRem(153)};
    }

    .grid {
      padding-top: ${calcRem(80)};
    }

    .heading,
    .link,
    .sub-heading,
    .text {
      grid-column: 1 / span 6;
    }

    .heading {
      & br {
        display: none;
      }
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

    .paragraph + .paragraph {
      margin-top: ${calcRem(16)};
    }

    .pic-wrapper {
      grid-row: 5;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(89)};
    }

    .image {
      &:before {
        top: ${calcRem(-43)};
        left: ${calcRem(16)};
        width: ${calcRem(252)};
        height: ${calcRem(386)};
        background-image: url(${require('../../../static/images/project/common-pics/mobile.all/hero-bg.png')});
      }
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  .grid {
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
