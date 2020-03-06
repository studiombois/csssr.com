import { css } from '@emotion/core'

export default {
  base: props => {
    const breakpoints = props.theme.breakpoints

    return css`
      padding-top: 2rem;

      ${breakpoints.desktop.all} {
        padding-bottom: 3rem;
      }

      ${breakpoints.desktop.l} {
        padding: 0 14rem;
        max-width: 1328px;
      }

      ${breakpoints.desktop.m} {
        padding: 0 14rem;
      }

      ${breakpoints.desktop.s} {
        padding: 0 13rem;
      }

      ${breakpoints.tablet.all} {
        padding: 0 10rem;
        padding-bottom: 1rem;
      }

      ${breakpoints.mobile.all} {
        padding-bottom: 0.5rem;
        overflow-x: hidden;
      }

      .section_heading {
        text-align: center;

        ${breakpoints.mobile.all} {
          margin-bottom: 3rem;
        }

        ${breakpoints.tablet.all} {
          margin-bottom: 3rem;
        }

        ${breakpoints.desktop.all} {
          margin-bottom: 5.5rem;
        }
      }

      .wrapper {
        margin-left: -4rem;
        margin-right: -4rem;
        display: flex;
        flex-flow: wrap;
        box-sizing: border-box;

        ${breakpoints.desktop.s} {
          margin-left: -3.75rem;
          margin-right: -3.75rem;
        }

        ${breakpoints.tablet.all} {
          margin-left: -3rem;
          margin-right: -3rem;
        }
      }

      .feature {
        margin-left: 4rem;
        margin-right: 4rem;
        width: calc(33.3333333% - 8rem);

        ${breakpoints.desktop.all} {
          margin-bottom: 6rem;
        }

        ${breakpoints.desktop.s} {
          margin-left: 3.75rem;
          margin-right: 3.75rem;
          width: calc(33.3333333% - 7.5rem);
        }

        ${breakpoints.tablet.all} {
          position: relative;
          margin-left: 3rem;
          margin-right: 3rem;
          margin-bottom: 7.4rem;
          width: calc(33.3333333% - 6rem);
        }

        ${breakpoints.mobile.all} {
          width: 100%;
          margin-bottom: 3.75rem;
        }
      }

      .feature_shift-7 {
        ${breakpoints.desktop.all} {
          position: relative;
          top: 7rem;
        }

        ${breakpoints.tablet.all} {
          position: relative;
          top: 7rem;
        }
      }

      .feature_shift-14 {
        ${breakpoints.desktop.all} {
          position: relative;
          top: 14rem;
        }

        ${breakpoints.tablet.all} {
          position: relative;
          top: 14rem;
        }
      }
    `
  },
}
