import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

export default {
  base: props => css`
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;

    .image_text {
      grid-column: 4 / span 5;
      color: black;
    }

    ${props.theme.breakpoints.tablet.all} {
      .image_text {
        grid-column: 3 / span 8;
      }
    }

    ${props.theme.breakpoints.mobile.all} {
      margin-top: 0rem;
      margin-bottom: 0rem;

      .image_text {
        grid-column: 1 / span 6;
        line-height: 6.25rem;
      }
    }
  `,
  ie11: props => {
    return (
      props.isIe11 &&
      css`
        .image_text {
          -ms-grid-column: ${getGridValueForMs(4)};
          -ms-grid-column-span: ${getGridValueForMs(5)};
        }
      `
    )
  },
}
