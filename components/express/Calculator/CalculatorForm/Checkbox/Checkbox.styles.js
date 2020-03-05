import { css } from '@emotion/core'

export default {
  base: props => {
    const colors = props.theme.colors

    return css`
      position: relative;
      cursor: pointer;

      .checkbox-label {
        display: flex;
        cursor: pointer;

        &:hover {
          .checkbox-custom {
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
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        @supports (-moz-appearance: none) {
          &:focus {
            outline: 1px dotted gray;
          }
        }
        &::-ms-check {
          opacity:0;
        }
      }

      .checkbox-custom {
        flex: none;
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid #dedede;
        box-sizing: border-box;
        margin-right: 0.5rem;
        transition-property: border-color, background-color;
        transition-timing-function: ease-in-out;
        transition-duration: 0.2s;
      }

      .checkbox-custom_error {
        border-color: #ffc045;
      }

      .checkbox-inner {
        display: block;
        position: absolute;
        left: 1px;
        top: 1px;
        width: calc(1.5rem - 2px);
        height: calc(1.5rem - 2px);
        background-color: transparent;
        border: 1px solid transparent;
        transition: background-color 0.2s ease-in-out;
        box-sizing: border-box;

        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 0.375rem;
          left: 50%;
          width: 0.31rem;
          height: 0.625rem;
          border-right: 0.1875rem solid #fff;
          border-bottom: 0.1875rem solid #fff;
          transform: scale(0.95, 1) rotate(45deg) translate(-67%);
        }
      }

      .input-original:checked + .checkbox-label {
        .checkbox-custom {
          border: 1px solid ${colors.primary.origin};
          background-color: ${colors.primary.origin};
        }

        .checkbox-custom .checkbox-inner {
          border: 1px solid #fff;
        }
      }

      .input-original:checked + .checkbox-label span .label_price {
        color: ${colors.primary.origin};
      }

      .input-original:checked + .checkbox-label {
        &:hover {
          .checkbox-custom {
            border: 1px solid ${colors.primary.darken15};
          }

          .checkbox-inner {
            background-color: ${colors.primary.darken15};
          }

          span .label_price {
            color: ${colors.primary.darken15};
          }
        }
      }

      .input-original {
        &:checked {
          &:disabled {
            + .checkbox-label {
              .checkbox-custom {
                border: 1px solid #66adff;
              }

              .checkbox-custom .checkbox-inner {
                background-color: #66adff;
              }

              span .label_price {
                color: #66adff;
              }
            }
          }
        }

        &:disabled {
          + .checkbox-label {
            .checkbox-custom {
              border: 1px solid #dedede;
            }
          }
        }
      }
    `
  },
}
