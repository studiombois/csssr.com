import { css } from '@emotion/core'

export default {
  base: props => {
    const {desktop, tablet, mobile, below} = props.theme.breakpoints

    return css`
      ${desktop.all} {
        margin-bottom: 6rem;
        padding-top: 10.5rem;
        padding-right: 0;
      }

      ${desktop.m} {
        max-width: none;
      }

      ${desktop.s} {
        max-width: none;
      }

      ${mobile.all} {
        padding-top: 3.4375rem;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
      }

      ${tablet.m} {
        padding-top: 4rem;
      }

      ${tablet.s} {
        padding-top: 3.4375rem;
      }

      .container {
        ${below.desktop} {
          max-width: 34.125rem;
          margin: 0 auto;
        }
      }

      .main-title {
        ${desktop.all} {
          margin-bottom: 0;
        }

        ${desktop.s} {
          margin-left: 8rem;
        }

        ${tablet.all} {
          margin-bottom: 2.5rem;
        }

        ${tablet.m} {
          margin-bottom: 3.5rem;
        }

        ${mobile.all} {
          margin-bottom: 2.5rem;
        }

        @media (min-width: 1360px) and (max-width: 2099px) {
          margin-left: 13.5rem;
        }

        @media (min-width: 2100px) {
          margin-left: 0;
        }
      }
    `
  },
}
