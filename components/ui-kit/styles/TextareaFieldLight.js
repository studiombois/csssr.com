import css from 'styled-jsx/css'

export default css`
  div.error textarea {
    color: #d0021b;
    border-color: #d0021b;
  }

  textarea {
    appearance: none;
    padding-top: 0.4375rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1.5rem;
    display: block;
    width: 100%;
    height: 10rem;
    text-align: center;
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


  label {
    border: 0;
    height: 0.0625rem;
    margin: -0.0625rem;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 0.0625rem;
  }

 @media (min-width: 768px) and (max-width: 1279px) {
    textarea {
      padding-top: 0.875rem;
    }
  }
`
