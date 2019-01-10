import css from 'styled-jsx/css'

export default css`
  div {
    position: relative;
    padding-bottom: 0;
    height: 4rem;
  }

  div.font_inputted-text-error input:not(:focus) {
    border-color: #d0021b;
  }

  div.font_inputted-text-error label:not(:focus) {
    color: #d0021b;
  }

  div.font_inputted-text-error.textfield_regular input:not(:focus) {
    border-width: 2px;
    padding-left: 0.9375rem;
  }

  div.font_inputted-text-error input:focus {
    color: #4a4a4a;
    border-color: #e1e1e1;
  }

  input {
    appearance: none;
    margin-top: 0;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem #e1e1e1;
    border-radius: 0;
    caret-color: #4a4a4a;
  }

  input::placeholder {
    font-weight: 100;
    color: #c0c0c0;
  }

  label {
    position: absolute;
    margin: auto;
    top: 1.5rem;
    left: 1rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.875rem;
    color: #9b9b9b;
    pointer-events: none;
    user-select: none;
  }

  span.error {
    margin-top: 0.625rem;
    display: block;
    color: #ff0000;
  }

  div.font_inputted-text-error input:focus + label,
  input:focus + label {
    color: #0076ff;
  }

  div.textfield_filled label,
  div input:focus + label {
    top: 0.375rem;
    font-size: 0.625rem;
  }

 @media (max-width: 1279px) {
    input {
      padding-bottom: 0.1875rem;
    }
  }
`
