import { css } from '@emotion/core'
import { calcRem } from '../../../../../utils/style/calcRem'

const base = () => css`
  & {
    position: relative;
  }

  & + & {
    margin-top: ${calcRem(38)};
  }

  .input {
    width: 100%;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: #18191b;
    border: none;
    border-bottom: 2px solid #d4d4d4;
    background-color: transparent;
    padding-bottom: ${calcRem(4)};
    padding-left: ${calcRem(9)};
    padding-right: ${calcRem(9)};
  }

  .input::placeholder {
    color: #9b9b9b;
  }

  .input:focus {
    border-bottom-color: #0076ff;
  }

  .input._error {
    border-bottom-color: #d0021b;
  }

  .input._error + .label {
    color: #d0021b;
  }

  .label {
    font-family: Roboto, sans-serif;
    pointer-events: none;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    position: absolute;
    top: 0;
    left: ${calcRem(8)};
    color: #9b9b9b;

    > span {
      opacity: 0.4
    }
  }

  .input:focus + .label,
  .label._active {
    transform: translateY(${calcRem(28)});
    color: #18191b;
    font-weight: 300;
    font-size: ${calcRem(12)};
    text-transform: lowercase;
  }
`

export default () => {

  return css`
    ${base()}
  `
}
