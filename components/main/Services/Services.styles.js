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


const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
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

  }

  .picture-wrapper {
    position: sticky;
    top: 129px;
    margin-top: 129px;
    grid-column: 8;
    width: 456px;
  }

  .picture:not(.picture_figures) {
    position: absolute;
    left: 50%;
    opacity: 0;
    transform: translateX(calc(-50% + 8px));
    transition: opacity 100ms ease-out;

    &.picture_is_visible {
      opacity: 1;
    }
  }

  .picture_square {
    top: 0;
    z-index: 1;
    width: 186px;
  }

  .picture_triangle {
    top: 174px;
    z-index: 2;
    width: 246px;
  }

  .picture_circle {
    top: 367px;
    z-index: 3;
    width: 223px;
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

    .picture-wrapper {
      margin-left: -32px;
    }
  }

  ${desktop.s} {
    .title_main {
      margin-top: 158px;
    }

    .service {
      padding-left: 104px;
    }

    .service-icon {
      left: 28px;
    }

    .picture-wrapper {
      margin-left: -16px;
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

    .picture-wrapper {
      top: ${calcRem(105)};
      margin-top: ${calcRem(105)};
      margin-left: ${calcRem(-26)};
      width: ${calcRem(324)};
    }

    .picture_figures {
      width: 100%;
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

    .picture:not(.picture_figures) {
      transform: translateX(calc(-50% + 0.375rem));
      opacity: 1;
    }

    .picture_square {
      top: 0;
      width: ${calcRem(132)};
    }

    .picture_triangle {
      top: ${calcRem(123)};
      width: ${calcRem(176)};
    }

    .picture_circle {
      top: ${calcRem(260)};
      width: ${calcRem(158)}
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
  }

  ${mobile.all} {
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
      top: ${calcRem(-24)};
      left: ${calcRem(-128)};
      width: ${calcRem(197)};
      height: ${calcRem(197)};
      transform: scaleX(-1)
    }

    .service_express::before {
      top: ${calcRem(-32)};
      right: ${calcRem(-112)};
      width: ${calcRem(264)};
      height: ${calcRem(209)};
      transform: scaleX(-1)
    }

    .service_mvp::before {
      top: ${calcRem(-40)};
      left: ${calcRem(-136)};
      width: ${calcRem(218)};
      height: ${calcRem(218)};
      transform: scale(-1);
    }

    .service-icon {
      display: none;
    }

    .navigation {
      margin-top: ${calcRem(77)};
    }

    .service:not(:first-of-type) {
      margin-top: ${calcRem(76)};
    }

    .service-subtitle {
      margin-top: ${calcRem(20)};
    }

    .service-link {
      margin-top: ${calcRem(24)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop }}) => css`
  .title {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  ${desktop.l} {

  }
`

export const mobileBackgroundImagesStyles = theme => {
  const { mobile } = theme.breakpoints

  return css`
    ${mobile.all} {
      ${getBackgroundImageSrcSet({ png: square, webp: square_webp}, '.service_outsourcing::before')}
      ${getBackgroundImageSrcSet({ png: triangle, webp: triangle_webp}, '.service_express::before')}
      ${getBackgroundImageSrcSet({ png: circle, webp: circle_webp}, '.service_mvp::before')}
    }
  `
}


export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
