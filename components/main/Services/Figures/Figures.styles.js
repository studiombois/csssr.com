import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet }}) => css`
  & {
    position: sticky;
    top: 5vh;
    margin-top: 129px;
    grid-column: 8;
    /* Вычисляем ширину по aspect ration */
    display: inline-flex;
    width: calc(90vh * 456 / 588);
    max-width: 456px;
    max-height: 90vh;
  }

  .picture:not(.picture_figures) {
    position: absolute;
    left: 50%;
    opacity: 0;
    transform: translateX(-46.5%);
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
    z-index: 1;
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(190 / 456 * 100%);
  }

  .picture_triangle {
    top: 29.5%;
    z-index: 2;
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(248 / 456 * 100%);
  }

  .picture_circle {
    top: 62%;
    z-index: 3;
    /* Вычисляем относительную величину ширины по соотношению ширины изображения к его контейнеру */
    width: calc(225 / 456 * 100%);
  }

  @media (min-height: 654px) {
    & {
      top: calc((100vh - 588px) / 2);
      max-height: 588px;
    }
  }

  ${desktop.m} {
    & {
      margin-left: -32px;
    }
  }

  ${desktop.s} {
    & {
      margin-left: -16px;
    }
  }

  ${tablet.all} {
    & {
      /* Вычисляем top таким образом, что бы он был равен bottom */
      top: calc((100vh - ${calcRem(420)}) / 2);
      margin-top: ${calcRem(105)};
      margin-left: ${calcRem(-26)};
      width: ${calcRem(324)};
    }

    .picture_figures {
      width: 100%;
    }

    .picture:not(.picture_figures) {
      transform: translateX(calc(-50% + 0.375rem));
      opacity: 1;
    }

    .picture_square {
      top: 0;
      width: ${calcRem(134)};
    }

    .picture_triangle {
      top: ${calcRem(123)};
      width: ${calcRem(178)};
    }

    .picture_circle {
      top: ${calcRem(260)};
      width: ${calcRem(160)}
    }
  }
`

const ie11Styles = ({ breakpoints: { tablet } }) => css`
  & {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-row: 2;
  }

  .picture:not(.picture_figures) {
    left: calc(50% + 8px);
    transform: translate(-50%);
  }

  .picture_figures {
    height: 100%;
  }

  ${tablet.all} {
    .picture:not(.picture_figures) {
      left: calc(50% + 6px);
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
