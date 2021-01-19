import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const heroBgImages = require.context('../../../public/images/project/common-pics/hero-bg?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile }, colors, language }) => css`
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
    margin-top: ${calcRem(72)};
    font-weight: normal;
  }

  .text {
    grid-column: 2 / span 5;
    grid-row: 4;
    margin-top: ${calcRem(32)};
    color: ${colors.secondary.darken100};
    z-index: 1;
  }

  .paragraph_1,
  .paragraph_2 {
    display: ${language === 'ru' ? 'none' : 'block'};
  }

  .pic-wrapper {
    position: relative;
    z-index: 1;
    height: 0;
    grid-column: 8 / span 5;
    grid-row: 1 / 5;
    max-width: ${calcRem(728)};

    &:before {
      content: '';
      position: absolute;
      z-index: 2;
      height: max-content;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${desktop.all} {
    & {
      padding-bottom: ${calcRem(315)};
    }

    .paragraph + .paragraph{
        margin-top: ${calcRem(24)};
    }

    .image {
       margin-top: 54px;
    }
  }

  ${desktop.l} {
    .heading {
      grid-column: 2 / span 7;
    }

    .pic-wrapper {
      grid-row: 4;
      max-width: ${calcRem(728)};
      margin-top: ${calcRem(-221)};
      padding-top: calc(1752 / 2184 * 100%);

      &:before {
        top: ${calcRem(-78)};
        left: ${calcRem(-185)};
        width: ${calcRem(298)};
        height: ${calcRem(799)};
      }
    }

    .pic-wrapper_mindbox {
      margin-top: ${calcRem(-77)};
    }
  }

  ${desktop.m} {
    .heading {
      grid-column: 2 / span 10;
    }

    .link {
      margin-top: ${calcRem(23)};
    }

    .pic-wrapper {
      z-index: -1;
      top: 0;
      left: calc((100vw - 83rem) / 2 - 16px);
      grid-column: 8 / span 5;
      grid-row: 2 / span 3;
      width: ${calcRem(560)};
      margin-top: ${calcRem(20)};
      padding-top: ${calcRem(560)};

      &:before {
        top: ${calcRem(-68)};
        left: ${calcRem(-192)};
        width: ${calcRem(298)};
        height: ${calcRem(809)};
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
      z-index: -1;
      top: 0;
      left: calc((100vw - 77rem) / 2 - 24px);
      grid-row: 2 / span 3;
      width: ${calcRem(528)};
      margin-top: ${calcRem(89)};
      padding-top: calc(1680 / 1584 * ${calcRem(528)});

      &:before {
        top: ${calcRem(-68)};
        left: ${calcRem(-192)};
        width: ${calcRem(278)};
        height: ${calcRem(810)};
      }
    }
  }

  ${tablet.all} {
    & {
      padding-bottom: ${calcRem(186)};
    }

    .grid {
      padding-top: ${calcRem(84)};
    }

    .heading {
      grid-column: 2 / span 8;
      margin-top: ${calcRem(92)};
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
      z-index: -1;
      top: 0;
      left: calc((100vw - 59rem) / 2 - 2.5rem);
      grid-row: 2 / span 3;
      display: flex;
      width: ${calcRem(424)};
      margin-top: ${calcRem(-4)};
      padding-top: calc(1224 / 1272 * ${calcRem(424)});

      &:before {
        top: ${calcRem(-36)};
        left: ${calcRem(-144)};
        width: ${calcRem(200)};
        height: ${calcRem(543)};
      }
    }
  }

  ${mobile.all} {
    & {
      padding-bottom: ${calcRem(167)};
    }

    .grid {
      padding-top: ${calcRem(120)};
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
      margin-top: ${calcRem(106)};
      padding-top: calc(792 / 984 * 100%);

      &:before {
        top: ${calcRem(-46)};
        left: ${calcRem(28)};
        width: ${calcRem(252)};
        height: ${calcRem(386)};
      }
    }
  }
`

export const backgroundImagesStyles = className =>
//  сlassName name приходит как две строки (css-57ijkk e52q0fl0)
//  без replace (.css-57ijkk e52q0fl0) не отработает
//  с replace (.css-57ijkk.e52q0fl0)
   css`
    ${backgroundCssSmart(`.${className.replace(' ', '.')} .pic-wrapper::before`, heroBgImages)}
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
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, colors, language })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
