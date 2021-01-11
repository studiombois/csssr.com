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

  .grid.grid_gazpromNeft {
    padding-top: ${calcRem(206)};
  }

  .heading {
    grid-column: 2 / span 5;
    grid-row: 1;
    z-index: 1;
  }

  .p4-word {
    position: relative;
    display: inline-block;
    padding: ${calcRem(5)} ${calcRem(14)};
    margin-left: ${calcRem(-14)};
    animation-duration: 0.9s;
    animation-name: p4-color;
    animation-iteration-count: 1;
    animation-delay: 1.9s;
    animation-fill-mode: forwards;
    will-change: color;
  }

  @keyframes p4-color {
    to {
      color: #6490DF;
    }
  }

  .p4-outline {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(100, 144, 223, 0.1);
    border: 2px solid transparent;
    animation-duration: 0.5s;
    animation-name: p4-outline;
    animation-iteration-count: 1;
    animation-delay: 1.9s;
    animation-fill-mode: forwards;
    will-change: width, height;

    &::before {
      content: '';
      position: absolute;
      top: ${calcRem(-4.5)};
      right: ${calcRem(-4.5)};
      width: ${calcRem(8)};
      height: ${calcRem(8)};
      background-color: #6490DF;
      opacity: 0;
      animation-duration: 300ms;
      animation-name: p4-dot;
      animation-iteration-count: 2;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      will-change: opacity;
    }

    &::after {
      content: '';
      position: absolute;
      
      width: ${calcRem(12)};
      height: ${calcRem(18)};
      background-image: url('../../../static/icons/project/cursor.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      opacity: 0;
      animation-duration: 300ms;
      animation-name: p4-cursor;
      animation-iteration-count: 1;
      animation-delay: 1.2s;
      animation-fill-mode: forwards;
      will-change: opacity, top, right;
    }
  }

  @keyframes p4-cursor {
    from {
      top: ${calcRem(30)};
      right: ${calcRem(12)};
      opacity: 0;
    }

    to {
      top: ${calcRem(-1)};
      right: ${calcRem(-12)};
      opacity: 1;
    }
  }

  @keyframes p4-dot {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes p4-outline {
    from {
      width: 0;
      height: 0;
      border-color: #6490DF;
    }

    to {
      width: 100%;
      height: 100%;
      border-color: #6490DF;
    }
  }

  .after-p4 {
    display: inline-block;
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

  .text.text_gazpromNeft {
    grid-row: 2;
  }

  .gneft-icon {
    display: inline-block;
    width: ${calcRem(79)};
    height: ${calcRem(40)};
    background-image: url(${language === 'ru' ? '../../../static/icons/project/gneft_ru.svg' : '../../../static/icons/project/gneft_en.svg'});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    vertical-align: sub;
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

  .pic-wrapper.pic-wrapper_gazpromNeft {
    grid-row: 1 / span 2;
    grid-column: 8 / span 4;
    max-width: ${calcRem(576)};
    max-height: ${calcRem(406)};
    margin-top: 0;

    &::before {
      display: none;
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
    .paragraph + .paragraph{
      margin-top: ${calcRem(24)};
    }

    .heading_gazprom {
      max-width: 728px;
      font-size: 48px;
      line-height: 62px;
      font-weight: normal;
    }

    .p4-word {
      margin-right: 9px;
    }

    .gneft-icon {
      margin-right: 5px;
    }
  }

  ${desktop.l} {
    & {
      padding-bottom: ${calcRem(260)};
    }

    .heading {
      grid-column: 2 / span 7;
    }

    .heading_gazprom {
      grid-column: 2 / span 6;
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

    .text.text_gazpromNeft {
      margin-top: 28px;
    }

    .pic-wrapper.pic-wrapper_gazpromNeft {
      padding-top: 406px;
    }

    .pic-wrapper_mindbox {
      margin-top: ${calcRem(-77)};
    }
  }

  ${desktop.m} {
    & {
      padding-bottom: ${calcRem(281)};
    }

    .grid.grid_gazpromNeft {
      padding-top: ${calcRem(188)};
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
      z-index: -1;
      top: 0;
      left: calc((100vw - 83rem) / 2 - 16px);
      grid-column: 8 / span 5;
      grid-row: 2 / span 3;
      width: ${calcRem(560)};
      margin-top: ${calcRem(72)};
      padding-top: ${calcRem(560)};

      &:before {
        top: ${calcRem(-68)};
        left: ${calcRem(-192)};
        width: ${calcRem(298)};
        height: ${calcRem(809)};
      }
    }

    .pic-wrapper.pic-wrapper_gazpromNeft {
      top: 60px;
      grid-column: 8 / span 5;
      max-width: ${calcRem(544)};
      max-height: ${calcRem(350)};
      padding-top: ${calcRem(350)};
    }
  }

  ${desktop.s} {
    & {
      padding-bottom: ${calcRem(285)};
    }

    .grid.grid_gazpromNeft {
      padding-top: ${calcRem(195)};
    }

    .heading {
      grid-column: 2 / span 10;
    }

    .p4-word {
      padding-right: 11px;
    }

    .text {
      margin-top: ${calcRem(39)};
    }

    .text.text_gazpromNeft {
      margin-top: 36px;
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

    .pic-wrapper.pic-wrapper_gazpromNeft {
      top: 83px;
      max-width: ${calcRem(504)};
      max-height: ${calcRem(315)};
      padding-top: ${calcRem(315)};
    }
  }

  ${tablet.all} {
    & {
      padding-bottom: ${calcRem(202)};
    }

    .grid {
      padding-top: ${calcRem(84)};
    }

    .grid.grid_gazpromNeft {
      padding-top: ${calcRem(148)};
    }

    .heading {
      grid-column: 2 / span 8;
      margin-top: 1rem;
    }

    .heading.heading_gazprom {
      grid-column: 2 / span 6;
      line-height: ${calcRem(45)};
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

    .text.text_gazpromNeft {
      grid-column: 2 / span 5;
      margin-top: ${calcRem(30)};
    }

    .gneft-icon {
      width: ${calcRem(54)};
      height: ${calcRem(25)};
    }

    .p4-word {
      width: ${language === 'ru' ? calcRem(332) : calcRem(274)};
      height: ${calcRem(50)};
      margin-left: ${calcRem(-11)};
      margin-right: ${calcRem(5)};
      padding: 0;
      text-align: center;
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

    .pic-wrapper.pic-wrapper_gazpromNeft {
      top: ${calcRem(55)};
      max-width: ${calcRem(384)};
      max-height: ${calcRem(247)};
      padding-top: ${calcRem(247)};
    }
  }

  ${mobile.all} {
    & {
      padding-bottom: ${calcRem(153)};
    }

    .grid {
      padding-top: ${calcRem(80)};
    }

    .grid.grid_gazpromNeft {
      padding-top: ${calcRem(132)};
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

    .p4-word {
      width: ${language === 'ru' ? calcRem(332) : calcRem(274)};
      height: ${calcRem(50)};
      margin-left: ${calcRem(-8)};
      margin-right: ${calcRem(5)};
      padding: 0;
      text-align: center;
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

    .gneft-icon {
      width: ${calcRem(54)};
      height: ${calcRem(25)};
    }

    .paragraph + .paragraph {
      margin-top: ${calcRem(16)};
    }

    .pic-wrapper {
      grid-row: 5;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(89)};
      padding-top: calc(792 / 984 * 100%);

      &:before {
        top: ${calcRem(-43)};
        left: ${calcRem(16)};
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
