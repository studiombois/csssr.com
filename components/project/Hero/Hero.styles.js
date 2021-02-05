import { css } from '@emotion/react'
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
  }

  .grid.grid_gazpromNeft {
    padding-top: ${calcRem(136)};
  }

  .project-case {
    grid-column: 2 / span 2;
    grid-row: 1;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    letter-spacing: ${calcRem(1)};
    text-transform: uppercase;
    color: #6490DF;
  }

  .heading {
    grid-column: 2 / span 5;
    grid-row: 1;
    z-index: 1;
  }

  &._gazpromNeft .heading {
    grid-row: 2;
  }


  .p4-word {
    position: relative;
    display: inline-block;
    padding: ${calcRem(5)} ${calcRem(14)};
    margin-left: ${calcRem(-14)};
    animation-duration: 0.7s;
    animation-name: p4-color;
    animation-iteration-count: 1;
    animation-delay: 0.9s;
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
    left: ${calcRem(4)};
    background-color: rgba(100, 144, 223, 0.1);
    border: 2px solid transparent;
    animation-duration: 0.5s;
    animation-name: p4-outline;
    animation-iteration-count: 1;
    animation-delay: .9s;
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
      animation-delay: 0.3s;
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
      animation-delay: .5s;
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
    font-weight: normal;
  }

  .text {
    grid-column: 2 / span 5;
    grid-row: 4;
    margin-top: ${calcRem(32)};
    color: ${colors.secondary.darken100};
    z-index: 1;
  }

  .text.text_gazpromNeft {
    grid-row: 3;
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
    grid-row: 1 / span 3;
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
    &._gazpromNeft {
      padding-bottom: ${calcRem(152)};
    }

    .project-case {
      font-size: 16px;
      line-height: 24px;
    }

    .heading_gazprom {
      margin-top: 24px;
      font-size: 48px;
      line-height: 62px;
      font-weight: normal;
    }

    .text.text_gazpromNeft {
      margin-top: 40px;
    }

    .p4-word {
      margin-right: 9px;
    }

    .gneft-icon {
      margin-right: 5px;
    }

    .pic-wrapper.pic-wrapper_gazpromNeft {
      transform: translateY(68px);
    }

    &._s7airlines._en {
      padding-bottom: 152px;
    }

    &._s7airlines._ru {
      padding-bottom: 267px;
    }

    &._qmarketing {
      padding-bottom: 376px;
    }

    &._brusnika {
      padding-bottom: 370px;
    }

    &._flant._en {
      padding-bottom: 420px;
    }

    &._flant._ru {
      padding-bottom: 370px;
    }

    &._mindbox._en {
      padding-bottom: 280px;
    }

    &._mindbox._ru {
      padding-bottom: 367px;
    }

    &._mosoblgaz._ru {
      padding-bottom: 347px;
    }
    
    &._mosoblgaz._en {
      padding-bottom: 418px;
    }
    
    .grid {
      padding-top: 216px;
    }

    .paragraph + .paragraph{
        margin-top: ${calcRem(24)};
    }

    .pic-wrapper {
      transform: translateY(-184px);
    }

    .sub-heading {
      margin-top: 78px;
    }
  }

  ${desktop.l} {
    &._mindbox,
    &._flant,
    &._qmarketing,
    &._brusnika,
    &._mosoblgaz {
      padding-bottom: 280px !important; // после удаления картинки с фигурами это удалится 
    }

    &._mindbox._en {
      .pic-wrapper_mindbox {
        margin-top: 80px;
      }
    }

    .heading {
      grid-column: 2 / span 7;
    }

    .heading_gazprom {
      grid-column: 2 / span 6;
      padding-right: ${calcRem(130)};

      &.heading_is_wider {
        padding-right: ${calcRem(70)};
      }
    }

    .pic-wrapper {
      grid-row: 4;
      max-width: ${calcRem(728)};
      padding-top: calc(1752 / 2184 * 100%);

      &:before {
        top: ${calcRem(-78)};
        left: ${calcRem(-185)};
        width: ${calcRem(298)};
        height: ${calcRem(799)};
      }
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
      padding-bottom: 265px;
    }

    .grid.grid_gazpromNeft {
      padding-top: ${calcRem(188)};
    }

    .heading {
      grid-column: 2 / span 10;
    }

    .heading_gazprom {
      grid-column: 2 / span 7;
      padding-right: ${calcRem(50)};

      &.heading_is_wider {
        grid-column: 2 / span 8;
        padding-right: ${calcRem(70)};
      }
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
      padding-top: ${calcRem(560)};
      transform: translateY(74px);

      &:before {
        top: ${calcRem(-60)};
        left: ${calcRem(-140)};
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
      padding-bottom: ${calcRem(206)};
    }

    .grid.grid_gazpromNeft {
      padding-top: ${calcRem(195)};
    }

    .heading {
      grid-column: 2 / span 10;
    }

    .heading_gazprom {
      grid-column: 2 / span 7;

      &.heading_is_wider {
        grid-column: 2 / span 8;
      }
    }

    .p4-word {
      padding-right: 11px;
    }

    .text {
      margin-top: ${calcRem(32)};
    }

    .pic-wrapper {
      z-index: -1;
      top: 0;
      left: calc((100vw - 77rem) / 2 - 24px);
      grid-row: 2 / span 3;
      width: ${calcRem(528)};
      padding-top: calc(1680 / 1584 * ${calcRem(528)});
      transform: translateY(90px);

      &:before {
        top: ${calcRem(-61)};
        left: ${calcRem(-112)};
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
      padding-bottom: ${calcRem(186)};
    }

    &._gazpromNeft {
      padding-bottom: ${calcRem(112)};
    }

    .grid {
      padding-top: ${calcRem(84)};
    }

    .grid.grid_gazpromNeft {
      padding-top: ${calcRem(104)};
    }

    .project-case {
      font-size: ${calcRem(14)};
      margin-top: ${calcRem(5)};
    }

    .heading {
      grid-column: 2 / span 8;
      margin-top: ${calcRem(92)};
    }

    .heading.heading_gazprom {
      grid-column: 2 / span 7;
      margin-top: ${calcRem(22)};
      padding-right: ${calcRem(50)};
      line-height: ${calcRem(45)};

      &.heading_is_wider {
        padding-right: ${calcRem(20)};
      }
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
      margin-top: ${calcRem(29)};
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
        left: ${calcRem(-88)};
        width: ${calcRem(200)};
        height: ${calcRem(543)};
      }
    }

    .pic-wrapper.pic-wrapper_gazpromNeft {
      top: ${calcRem(55)};
      max-width: ${calcRem(384)};
      max-height: ${calcRem(247)};
      padding-top: ${calcRem(247)};
      transform: translateY(${calcRem(28)});
    }
  }

  ${mobile.all} {
    & {
      padding-bottom: ${calcRem(167)};
    }

    &._gazpromNeft {
      padding-bottom: ${calcRem(64)};
    }

    .grid {
      padding-top: ${calcRem(120)};
    }

    .grid.grid_gazpromNeft {
      padding-top: ${calcRem(96)};
    }

    .project-case {
      grid-column: 1 / span 6;
      font-size: ${calcRem(14)};
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

    .heading.heading_gazprom {
      margin-top: ${calcRem(8)};
    }

    .p4-word {
      width: ${language === 'ru' ? calcRem(332) : calcRem(274)};
      height: ${calcRem(50)};
      margin-left: ${calcRem(-8)};
      margin-right: ${calcRem(5)};
      padding: 0;
      text-align: center;
    }

    .p4-outline {
      left: 0;
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
const StyledHero =  props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, colors, language })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
export default StyledHero
