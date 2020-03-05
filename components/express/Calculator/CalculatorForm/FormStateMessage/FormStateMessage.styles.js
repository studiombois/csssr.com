import { css } from '@emotion/core'

export default {
  base: props => {
    const breakpoints = props.theme.breakpoints

    return css`
      position: relative;
      .message button,
      .message a {
        display: inline-block;
        padding: 0;
        border: none;
        background: none;
        color: ${props.theme.colors.primary.origin};
        text-decoration: none;
        cursor: pointer;
      }
      .body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 31.5rem;
        transform: scale(0);
        transition: transform 0.3s ease-out;
      }
      .body_state_visible {
        transform: scale(1);
      }
      .text {
        position: relative;
        margin-top: 1.4125rem;
        text-align: center;
      }

      ${breakpoints.mobile.all} {
        .body {
          height: 28rem;
        }
        .text {
          margin-top: 1.175rem;
        }
      }

      .body_short {
        height: 7.5rem;
      }
    `
  },
}