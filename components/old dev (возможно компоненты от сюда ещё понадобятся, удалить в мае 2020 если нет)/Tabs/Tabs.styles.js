import { css } from '@emotion/core'

const base = css`
  & {
    grid-column: 1 / span 12;
    display: flex;
    justify-content: center;
  }

  li button {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.75rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1rem;
    letter-spacing: 0.09375rem;
    text-transform: uppercase;
    color: #345eff;
  }

  li:hover button {
    color: #223fdb;
    cursor: pointer;
  }

  button {
    background: none;
    border: none;
  }

  li:not(:last-child) {
    margin-right: 2.5rem;
  }

  li.active {
    border-bottom: 2px solid #345eff;
    pointer-events: none;
  }
`

const ie11Styles = css`
    & {
      -ms-grid-column: 1;
      -ms-grid-column-span: 23;
      -ms-grid-row: 3;
    }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
