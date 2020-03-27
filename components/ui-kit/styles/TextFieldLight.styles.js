import { css } from '@emotion/core'

export default css`
  & {
    position: relative;
    height: 4.375rem;
  }

  &.font_inputted-text-error input:not(:focus) {
    border-color: #d0021b;
  }

  &.font_inputted-text-error label:not(:focus) {
    color: #d0021b;
  }

  &.font_inputted-text-error input:focus {
    color: #4a4a4a;
    border-color: #e1e1e1;
  }

  input {
    appearance: none;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    width: 100%;
    height: 2.5rem;
    text-align: center;
    border: none;
    border-bottom: solid 0.0625rem #e1e1e1;
    border-radius: 0;
    caret-color: #000000;
  }

  input::placeholder {
    font-weight: 100;
    color: #9b9b9b;
  }

  label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
  }

  & label::before {
    content: '';
    position: absolute;
    top: 0.0625rem;
    left: 0;
    height: 0.0625rem;
    width: 0;
    background-color: #0076ff;
    transition: width 0.1s ease-out;
  }

  &.font_inputted-text-error input:focus + label,
  input:focus + label {
    color: #0076ff;
  }

  span.error {
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    margin-top: 0.625rem;
    display: block;
    text-align: center;
  }

  & input:focus + label::before {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    input {
      padding-bottom: 0.1875rem;
    }
  }
`
