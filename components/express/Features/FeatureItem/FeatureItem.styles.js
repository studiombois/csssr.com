import { css } from '@emotion/core'

export default {
  base: props => css`
    h2 {
      line-height: 3rem;
    }

    h3 {
      margin-top: 1rem;
    }

    .picture {
      margin-bottom: 2rem;
    }

    .heading {
      margin-top: 1rem;
    }

    .textRegular {
      margin-top: 0.5rem;
    }

    .heading {
      ${props.theme.breakpoints.mobile.all} {
        margin-top: 1.5rem;
      }
    }
  `,
}
