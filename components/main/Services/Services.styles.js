import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'
import getBackgroundImageSrcSet from '../../../utils/style/getBackgroundImageSrcSet'

import square from '../../../static/images/main/square.png?responsive'
import square_webp from '../../../static/images/main/square.png?responsive_and_webp'

import triangle from '../../../static/images/main/triangle.png?responsive'
import triangle_webp from '../../../static/images/main/triangle.png?responsive_and_webp'

import circle from '../../../static/images/main/circle.png?responsive'
import circle_webp from '../../../static/images/main/circle.png?responsive_and_webp'

import arc_ru from '../../../static/images/main/arc-ru.png?responsive'
import arc_ru_webp from '../../../static/images/main/arc-ru.png?responsive_and_webp'

import arc from '../../../static/images/main/arc.png?responsive'
import arc_webp from '../../../static/images/main/arc.png?responsive_and_webp'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors, language }) => css`
  align-items: start;

  .title_main {
    grid-column: 3 / span 8;
    text-align: center;
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
      margin-top: 110px;
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
      margin-top: 110px;
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
      margin-top: 188px;
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
      margin-top: ${calcRem(91)};
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
      grid-column: 1 / span 6;
      margin-top: ${calcRem(102)};
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

    .navigation {
      margin-top: ${calcRem(77)};
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
      ${getBackgroundImageSrcSet({ png: circle, webp: circle_webp}, '.service_outsourcing::before')}
      ${getBackgroundImageSrcSet({ png: triangle, webp: triangle_webp}, '.service_express::before')}
      ${getBackgroundImageSrcSet({ png: square, webp: square_webp}, '.service_mvp::before')}

      ${language === 'ru'
      ? getBackgroundImageSrcSet({ png: arc_ru, webp: arc_ru_webp}, '.service_backend::before')
      : getBackgroundImageSrcSet({ png: arc, webp: arc_webp}, '.service_backend::before')}
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
