import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

export default {
  base: props => css`
    grid-column: 4 / span 6;
    display: flex;
    flex-flow: column;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    margin: 0;

    &.visible {
      opacity: 1;
      max-height: 500px; /* так нужно для плавного изменения высоты https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css */
    }

    .list-item {
      margin-top: 1rem;
    }

    ${props.theme.breakpoints.tablet.all} {
      grid-column: 3 / span 8;

      .list > li {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    ${props.theme.breakpoints.mobile.all} {
      grid-column: 1 / span 6;
      .text,
      .list > li {
        font-size: 0.875rem;
      }
    }

    .text {
      margin-top: 1.5rem;
      margin-bottom: 0;
    }

    .list + .text {
      margin-top: 3rem;
    }

    .list + .text a {
      display: block;
      margin-top: -1rem;
    }

    .link {
      margin-top: 1rem;
    }
  `,
  ie11: props => {
    return (
      props.isIe11 &&
      css`
        -ms-grid-column: ${getGridValueForMs(4)};
        -ms-grid-column-span: ${getGridValueForMs(6)};
      `
    )
  },
}
