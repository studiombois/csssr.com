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

  div.font_inputted-text-error input:focus {
    color: #4a4a4a;
    border-color: #e1e1e1;
  }

  input {
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    width: 100%;
    height: 2.5rem;
    text-align: center;
    border: none;
    border-bottom: solid 0.0625rem #e1e1e1;
    caret-color: #4a4a4a;
  }

  input::placeholder {
    font-weight: 100;
    color: #c0c0c0;
  }

  label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
  }

  div label::before {
    content: '';
    position: absolute;
    top: 0.0625rem;
    left: 0;
    height: 0.0625rem;
    width: 0;
    background-color: #0076ff;
    transition: width 0.1s ease-out;
  }

  div.font_inputted-text-error input:focus + label,
  input:focus + label {
    color: #0076ff;
  }

  div input:focus + label::before {
    width: 100%;
  }

 @media (max-width: 1279px) {
    input {
      padding-bottom: 0.1875rem;
    }
  }
`
