import { css } from '@emotion/core'
import getGridValueForMs from '../../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const circle = require.context('../../../../../public/images/main/figures/circle?csssr-images')
const square = require.context('../../../../../public/images/main/figures/square?csssr-images')
const triangle = require.context('../../../../../public/images/main/figures/triangle?csssr-images')
const arc = require.context('../../../../../public/images/main/figures/arc?csssr-images')
const arc_ru = require.context('../../../../../public/images/main/figures/arc-ru?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile }, colors, language }) => css`
  align-items: start;

  .title_main {
    font-family: Roboto, sans-serif;
    font-weight: 900;
    text-align: left;
    color: ${colors.secondary.darken100};
  }

  .navigation {
    margin-top: 114px;
    grid-column: 2 / span 5;
  }

  .service {
    position: relative;

    &:not(:first-of-type) {
      margin-top: 119px;
    }
  }

  .service-title a,
  .service-subtitle {
    color: ${colors.secondary.darken100};
  }

  .service-title a {
    transition: color 200ms;
  }

  .service-title a {
    &:hover {
      color: ${colors.primary.origin};
    }
  }

  .service-subtitle {
    margin-top: 21px;
  }

  .service-icon {
    position: absolute;
    top: 30px;
    fill: transparent;
    transition: fill 100ms ease-out;

    & path {
      transition: stroke 100ms ease-out;
    }
  }

  .service-link {
    display: block;
    margin-top: 28px;
    cursor: pointer;
  }

  @media (pointer: fine) {
    .service:hover .service-icon_circle {
      fill: #F5565F;

      & path {
        stroke: #F5565F;
      }
    }

    .service:hover .service-icon_triangle {
      fill: #FECF76;

      & path {
        stroke: #FECF76;
      }
    }

    .service:hover .service-icon_square {
      fill: #8BD9B9;

      & path {
        stroke: #8BD9B9;
      }
    }

    .service:hover .service-icon_arc {
      fill: #0054D7;

      & path {
        stroke: #0054D7;
      }
    }
  }

  ${desktop.l} {
    .title_main {
      font-size: 40px;
      line-height: 56px;
      grid-column: 3 / span 4;
      margin-top: 42px;
    }

    .navigation {
      margin-top: 95px;
    }

    .service {
      padding-left: 152px;
    }

    .service-icon {
      left: 76px;
    }

    .service_backend {
      padding-right: ${calcRem(160)};
    }
  }

  ${desktop.m} {
    .title_main {
      font-size: 40px;
      line-height: 56px;
      grid-column: 3 / span 4;
      margin-top: 42px;
    }

    .navigation {
      margin-top: 90px;
    }

    .service {
      padding-left: 112px;
    }

    .service-icon {
      left: 36px;
    }

    .service_backend {
      .service-title {
        padding-right: ${calcRem(16)};
      }
    }
  }

  ${desktop.s} {
    .title_main {
      font-size: 40px;
      line-height: 56px;
      grid-column: 3 / span 4;
      margin-top: 42px;
      padding-left: 8px;
    }

    .navigation {
      margin-top: 90px;
    }

    .service {
      padding-left: 104px;
    }

    .service-icon {
      left: 28px;
    }
  }

  ${tablet.all} {
    .title_main {
      grid-column: 3 / span 4;
      font-size: ${calcRem(32)};
      line-height: ${calcRem(40)};
      margin-top: ${calcRem(91)};
    }

    .navigation {
      margin-top: ${calcRem(76)};
    }

    .service {
      padding-left: ${calcRem(80)};
    }

    .service-icon {
      top: ${calcRem(8)};
      left: ${calcRem(34)};
      width: ${calcRem(20)};
    }

    .navigation {
      margin-top: ${calcRem(101)};
    }

    .service:not(:first-of-type) {
      margin-top: ${calcRem(100)};
    }

    .service-subtitle {
      margin-top: ${calcRem(20)};
    }

    .service-link {
      margin-top: ${calcRem(24)};
    }

    .service-icon_circle {
      fill: #F5565F;

      & path {
        stroke: #F5565F;
      }
    }

    .service-icon_triangle {
      fill: #FECF76;

      & path {
        stroke: #FECF76;
      }
    }

    .service-icon_square {
      fill: #8BD9B9;

      & path {
        stroke: #8BD9B9;
      }
    }

    .service-icon_arc {
      fill: #0054D7;

      & path {
        stroke: #0054D7;
      }
    }
  }

  ${mobile.all} {
    & {
      padding-left: 1rem;
      padding-right: 1rem;
      width: 22.5rem;
      overflow: hidden;
    }

    .title_main {
      text-align: center;
      grid-column: 1 / span 6;
      font-size: ${calcRem(32)};
      line-height: ${calcRem(40)};
      margin-top: ${calcRem(80)};
    }

    .navigation {
      margin-top: ${calcRem(85)};
    }

    .service {
      position: relative;
      padding-left: 0;
    }

    .service::before {
      content: '';
      position: absolute;
      z-index: -1;
      display: block;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    .service_outsourcing::before {
      top: ${calcRem(-32)};
      left: ${calcRem(-136)};
      width: ${calcRem(217)};
      height: ${calcRem(215)};
      transform: rotateZ(-180deg);
    }

    .service_express::before {
      top: ${calcRem(-32)};
      right: ${calcRem(-112)};
      width: ${calcRem(264)};
      height: ${calcRem(209)};
      transform: scaleX(-1)
    }

    .service_mvp::before {
      top: ${calcRem(24)};
      left: ${language === 'ru' ? `calc(100% + ${calcRem(-112)})` : calcRem(-75)};
      width: ${calcRem(87)};
      height: ${calcRem(87)};
      transform: ${language === 'ru' ? `rotateZ(180deg)` : `rotateZ(90deg)`} scaleX(2.16) scaleY(2.3);
    }

    .service_backend::before {
      width: ${calcRem(120)};

      ${language === 'ru'
        ? css`
            top: ${calcRem(-17)};
            left: ${calcRem(-72)};
            height: ${calcRem(192)};
          `
        : css`
            top: ${calcRem(-20)};
            right: ${calcRem(-16)};
            height: ${calcRem(176)};
          `
      }
    }

    .service_backend {
      min-height: ${language === 'ru'? calcRem(192) : calcRem(176)};
    }

    .service-icon {
      display: none;
    }

    .service:not(:first-of-type) {
      margin-top: ${calcRem(108)};
    }

    .service-subtitle {
      margin-top: ${calcRem(20)};
    }

    .service-link {
      margin-top: ${calcRem(24)};
    }
  }
`

const ie11Styles = ({ breakpoints: { mobile }}) => css`
  & {
    position: relative;
  }

  .title_main {
    -ms-grid-column: ${getGridValueForMs(3)};
    -ms-grid-column-span: ${getGridValueForMs(8)};
    -ms-grid-row: 1;
  }

  .navigation {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 2;
  }

  ${mobile.all} {
    .title_main {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`

export const mobileBackgroundImagesStyles = language => theme => {
  const { mobile } = theme.breakpoints
  return css`
    ${mobile.all} {
      ${backgroundCssSmart('.service_outsourcing::before', circle)}
      ${backgroundCssSmart('.service_express::before', triangle)}
      ${backgroundCssSmart('.service_mvp::before', square)}
      ${backgroundCssSmart('.service_backend::before', language === 'ru' ? arc_ru : arc)}
    }
  `
}


export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, colors, language })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
