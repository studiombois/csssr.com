import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet }}) => css`
  & {
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
      top: ${calcRem(105)};
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
  }
`

const ie11Styles = css`
  & {
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-row: 2;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles}
  `
}
