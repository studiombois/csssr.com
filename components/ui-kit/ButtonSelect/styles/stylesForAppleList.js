import css from 'styled-jsx/css'

export default css`
  ul {
    margin-left: auto;
    margin-right: auto;
    width: 20.5rem;
    background-color: transparent;
  }

  ul.is_entered {
    height: 19.5rem;
  }

  li {
    margin: 0;
    border-top: 0.0625rem solid #cccccc;
    text-align: center;
    background-color: white;
  }

  li:first-child {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: none;
    border-radius: 0.375rem 0.375rem 0 0;
  }

  li:last-child {
    margin-top: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-top: none;
    border-radius: 0.375rem;
  }

  li:last-child button {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
    text-align: center;
    text-transform: uppercase;
    color: #4a4a4a;
  }
`
