import { css } from '@emotion/core'

export default {
  base: props => {
    const breakpoints = props.theme.breakpoints

    return css`
      margin: 0 auto;
      width: 100%;
      box-sizing: border-box;

      ${breakpoints.desktop.l} {
        max-width: 1792px;
      }

      ${breakpoints.desktop.m} {
        max-width: 1328px;
      }

      ${breakpoints.desktop.s} {
        max-width: 1232px;
      }

      ${breakpoints.tablet.m} {
        max-width: 944px;
      }

      ${breakpoints.tablet.s} {
        max-width: 59rem;
      }

      ${breakpoints.mobile.all} {
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
      }
    `
  },
}
