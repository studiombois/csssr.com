import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet }, lng }) => css`
  & {
    position: sticky;
    top: 5vh;
    margin-top: 129px;
    grid-column: 8;
    /* Вычисляем ширину по aspect ration */
    display: inline-flex;
    width: ${lng === 'ru' ? `calc(90vh * 400 / 384)` : `calc(90vh * 359 / 483)`};
    max-width: ${lng === 'ru' ? `400px` : `358px`};
    max-height: 90vh;
  }

  .picture:not(.picture_figures) {
    position: absolute;
    left: 50%;
    opacity: 0;
    transition: opacity 100ms ease-out;

    &.picture_is_visible {
      opacity: 1;
    }
  }

  .picture_figures {
    display: block;
    width: 100%;
  }

  .picture_square {
    top: 0;
    transform: translateX(-51%);
    z-index: 1;
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(145 / 358 * 100%);
  }

  .picture_square.picture_square_ru {
    top: 8.5%;
    left: 25.5%;
    z-index: 1;
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(146 / 400 * 100%);
    transform: rotate(9.21deg)
  }

  .picture_triangle {
    top: 28.2%;
    transform: translateX(-57.5%);
    z-index: 2;
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(193 / 358 * 100%);
  }

  .picture_circle {
    top: 58.7%;
    z-index: 3;
    transform: translateX(-52%);
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(145 / 358 * 100%);
  }

  .picture_circle.picture_circle_ru {
    top: 45.1%;
    left: 45%;
    z-index: 3;
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(145 / 400 * 100%);
  }

  .picture_arc {
    top: 63.6%;
    z-index: 2;
    transform: translateX(-49.5%);
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(249 / 358 * 100%);
  }

  .picture_arc.picture_arc_ru {
    top: 51.6%;
    left: 45.2%;
    z-index: 2;
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(249 / 400 * 100%);
  }

  @media (min-height: 654px) {
    & {
      top: calc((100vh - ${lng === 'ru' ? `384px` : `482px`}) / 2);
      max-height: ${lng === 'ru' ? `384px` : `482px`};
    }
  }

  ${desktop.l} {
    & {
      margin-left: 40px;
    }
  }

  ${desktop.m} {
    & {
      margin-left: 30px;
    }
  }

  ${desktop.s} {
    & {
      margin-left: 67px;
    }
  }

  ${tablet.all} {
    & {
      /* Вычисляем top таким образом, что бы он был равен bottom */
      top: calc((100vh - ${calcRem(303)}) / 2);
      margin-top: ${calcRem(100)};
      margin-left: ${calcRem(7)};
      width: ${lng === 'ru' ? calcRem(304) : calcRem(294)};
      max-height: ${lng === 'ru' ? calcRem(303) : calcRem(421)};
    }

    .picture_figures {
      width: 100%;
      height: 100%;
    }

    .picture:not(.picture_figures) {
      opacity: 1;
    }

    .picture_square {
      z-index: 4;
      top: 0;
      width: ${calcRem(119)};
      transform: translateX(-51%);
    }

    .picture_square.picture_square_ru {
      z-index: 3;
      top: 8.5%;
      left: 25.4%;
      width: ${calcRem(111)};
    }

    .picture_triangle {
      z-index: 3;
      top: ${calcRem(111.5)};
      transform: translateX(-57.9%);
      width: ${calcRem(158)};
    }

    .picture_circle {
      z-index: 2;
      top: ${calcRem(231)};
      width: ${calcRem(118)};
    }

    .picture_circle.picture_circle_ru {
      z-index: 2;
      top: 45%;
      left: 45%;
      width: ${calcRem(109)};
    }

    .picture_arc {
      top: 63.5%;
      z-index: 1;
      width: ${calcRem(204)};
      transform: translateX(-49.5%);
    }

    .picture_arc.picture_arc_ru {
      z-index: 1;
    }
  }
`

const ie11Styles = ({ breakpoints: { tablet }, lng }) => css`
  & {
    position: absolute;
    top: calc((100% - ${lng === 'ru' ? '504px' : '456px'}) / 2);
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-row: 2;
  }

  .picture:not(.picture_figures) {
    left: calc(50% + 8px);
    transform: translate(-50%);
  }

  .picture_circle.picture_circle_ru {
    left: 54%;
  }

  .picture_square.picture_square_ru {
    left: 45.7%;
  }

  .picture_figures {
    height: 100%;
  }

  ${tablet.all} {
    & {
      top: calc((100% - ${lng === 'ru' ? '303px' : '424px'}) / 2);
    }

    .picture_circle.picture_circle_ru {
      left: 54%;
    }

    .picture_square.picture_square_ru {
      left: 45.6%;
    }

    .picture_circle.picture_circle_en,
    .picture_square.picture_square_en {
      left: 52%;
    }

    .picture_triangle.picture_triangle_en {
      left: 51.5%;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const { lng } = props

  return css`
    ${base({ breakpoints, colors, lng })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
