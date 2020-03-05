import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

export default {
  base: props => css`
    margin-bottom: 0;

    .greeting_heading,
    .greeting_subheading {
      grid-column: 4 / span 6;
    }
    .greeting_heading {
      margin-top: 13.125rem;
    }

    .greeting_subheading {
      margin-top: 1.25rem;
    }

    ${props.theme.breakpoints.tablet.all} {
      .greeting_heading,
      .greeting_subheading {
        grid-column: 3 / span 8;
      }
    }

    ${props.theme.breakpoints.mobile.all} {
      .greeting_heading,
      .greeting_subheading {
        grid-column: 1 / span 6;
      }

      .greeting_heading {
        margin-top: 7rem;
      }
      .greeting_subheading {
        margin-top: 1rem;
      }
    }
  `,
  ie11: props => {
    return (
      props.isIe11 &&
      css`
        margin-bottom: 0;
        -ms-grid-row: auto auto;

        .greeting_heading,
        .greeting_subheading {
          -ms-grid-column: ${getGridValueForMs(4)};
          -ms-grid-column-span: ${getGridValueForMs(6)};
        }
        .greeting_heading {
          -ms-grid-row: 1;
        }
        .greeting_subheading {
          -ms-grid-row: 2;
        }
      `
    )
  },
}
