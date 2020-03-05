import { css } from '@emotion/core'

export default {
  base: props => {
    const colors = props.theme.colors

    return css`
      display: flex;

      .button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
        width: 4rem;
        height: 4rem;
        color: ${colors.secondary.origin};
        border: 1px solid #e1e1e1;
        background-color: #f9f9f9;
        transition: background-color 0.2s ease;
        cursor: pointer;

        &:hover {
          background-color: #dedede;
        }
      }

      .decrement::after,
      .increment::after,
      .increment::before {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        position: absolute;
        display: block;
        background-color: ${colors.secondary.origin};
      }

      .decrement::after,
      .increment::after {
        width: 0.875rem;
        height: 0.125rem;
      }

      .increment::before {
        width: 0.125rem;
        height: 0.875rem;
      }

      .disabled {
        cursor: default;
        pointer-events: none;
        &:hover {
          background-color: #f9f9f9;
        }
        &::after {
          background-color: #dedede;
        }
      }
    `
  },
}
