import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

export default {
  base: props => {
    const breakpoints = props.theme.breakpoints

    return css`
      margin-top: 0;
      padding: 0 7rem;

      ${breakpoints.desktop.all} {
        margin-bottom: 12rem;
      }

      ${breakpoints.desktop.s} {
        padding: 0 6.5rem;
      }

      ${breakpoints.tablet.all} {
        margin-bottom: 8rem;
        padding: 0 5rem;
      }

      ${breakpoints.mobile.all} {
        margin-bottom: 5rem;
      }

      .wrapper {
        display: flex;
        padding-top: 4rem;
        box-sizing: border-box;

        ${breakpoints.mobile.all} {
          flex-flow: column;
        }
      }

      .heading {
        position: absolute;
        left: 0;

        ${breakpoints.desktop.all} {
          top: -2.8rem;
        }

        ${breakpoints.tablet.all} {
          top: -1.5625rem;
        }

        ${breakpoints.mobile.all} {
          top: -1.4rem;
          left: 0;
        }
      }

      .heading-for-picture {
        position: relative;
      }

      .picture {
        margin-right: 2rem;
        width: ${calcRem(1032)};

        ${breakpoints.desktop.m} {
          margin-right: 1rem;
          width: ${calcRem(768)};
        }

        ${breakpoints.desktop.s} {
          margin-right: 1rem;
          width: ${calcRem(712)};
        }

        ${breakpoints.tablet.all} {
          margin-right: 1rem;
          width: ${calcRem(544)};
        }

        ${breakpoints.mobile.all} {
          margin-right: 0.5rem;
          width: ${calcRem(328)};
        }
      }

      .subheading {
        margin-top: 1rem;
        margin-left: 21rem;

        ${breakpoints.desktop.all} {
          margin-top: 1.5rem;
          max-width: 48rem;
        }

        ${breakpoints.desktop.s} {
          margin-left: 19.5rem;
        }

        ${breakpoints.tablet.all} {
          max-width: 34rem;
          margin-left: 14.875rem;
        }

        ${breakpoints.mobile.all} {
          margin-top: 1rem;
          margin-left: 0;
        }
      }

      .text {
        margin-top: 3rem;

        ${breakpoints.mobile.all} {
          line-height: 1.6rem;
          margin-top: 1.2rem;
        }

        ${breakpoints.tablet.all} {
          max-width: 14rem;
        }

        ${breakpoints.desktop.all} {
          max-width: 19.5rem;
        }
      }

      .text-nowrap {
        white-space: nowrap;
      }
    `
  },
}
