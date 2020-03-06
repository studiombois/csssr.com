import { css } from '@emotion/core'

export default {
  base: props => {
    const colors = props.theme.colors

    return css`
      position: relative;
      cursor: pointer;

      .radio-label {
        display: flex;
        flex: none;
        &:hover {
          .radio-custom {
            border: 1px solid ${colors.secondary.gray};
          }
        }
      }

      .input-original {
        position: absolute;
        top: 0;
        margin: 0;
        width: 1.5rem;
        height: 1.5rem;
        background: none;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        @supports (-moz-appearance: none) {
          &:focus {
            outline: 1px dotted gray;
          }
        }
        &::-ms-check {
          opacity:0;
        }
      }


      .radio-custom {
        flex: none;
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid #dedede;
        border-radius: 50%;
        margin-right: 0.5rem;
        transition: border-color 0.2s ease;
      }

      .radio-inner {
        display: block;
        position: absolute;
        left: 1px;
        top: 1px;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: transparent;
        transition: background-color 0.1s ease;
      }

      .input-original:checked + .radio-label {
        .radio-custom {
          border: 1px solid ${colors.primary.origin};
          background-color: ${colors.primary.origin};
        }

        .radio-custom .radio-inner {
          box-sizing: content-box;
          border: 0.3125rem solid #fff;
        }
      }

      .input-original:checked + .radio-label span .label_price {
        color: ${colors.primary.origin};
      }

      .input-original:checked + .radio-label {
        &:hover {
          .radio-custom {
            border: 1px solid ${colors.primary.darken15};
          }

          .radio-inner {
            background-color: ${colors.primary.darken15};
          }

          span .label_price {
            color: ${colors.primary.darken15};
          }
        }
      }
    `
  },
}
