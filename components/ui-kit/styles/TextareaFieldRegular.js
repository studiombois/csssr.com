import css from 'styled-jsx/css'

export default css`
  div {
    position: relative;
    padding-bottom: 0;
  }

  div.error textarea {
    color: #d0021b;
    border-color: #d0021b;
  }

  textarea {
    appearance: none;
    margin-top: 0;
    padding-top: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1.5rem;
    display: block;
    width: 100%;
    height: 10rem;
    border: none;
    border: solid 0.0625rem #e1e1e1;
    border-radius: 0;
    caret-color: #4a4a4a;
    resize: vertical;
  }

  textarea::placeholder {
    font-weight: 100;
    color: #c0c0c0;
  }

  textarea:focus {
    border-color: #0076ff;
  }

  div textarea:focus + label {
    color: #0076ff;
  }

  label {
    position: absolute;
    margin: auto;
    top: 1.4375rem;
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
    font-weight: 400;
    color: #ff0000;
  }

  div.textarea_filled label,
  div textarea:focus + label {
    top: 0.375rem;
    font-size: 0.625rem;
  }

 @media (max-width: 1279px) {
    textarea {
      padding-top: 0.875rem;
    }
  }
`
