import css from 'styled-jsx/css'

export default css`
  div {
    position: relative;
    height: 4.375rem;
  }

  div.font_inputted-text-error input:not(:focus) {
    border-color: #d0021b;
  }

  div.font_inputted-text-error label:not(:focus) {
    color: #d0021b;
  }

  div.font_inputted-text-error.textfield_regular input:not(:focus) {
    border-width: 2px;
  }

  div.font_inputted-text-error input:focus {
    color: #4a4a4a;
    border-color: #e1e1e1;
  }

  input {
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem #e1e1e1;
    caret-color: #4a4a4a;
  }

  input::placeholder {
    font-weight: 100;
    color: #c0c0c0;
  }

  label {
    position: absolute;
    margin: auto;
    top: 1.875rem;
    left: 1rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.875rem;
    color: #9b9b9b;
    pointer-events: none;
    user-select: none;
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

  @media (min-width: 368px) and (max-width: 1279px) {
    input {
      padding-bottom: 0.1875rem;
    }
  }
`
