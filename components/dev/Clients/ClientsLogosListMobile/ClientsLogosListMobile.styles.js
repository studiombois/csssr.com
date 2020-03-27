import { css } from '@emotion/core'

const base = css`
  h3 {
    height: 1.75rem;
    border-bottom: 8px solid #345eff;
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

  .logos {
    display: flex;
    flex-wrap: wrap;
  }

  .logo {
    width: 6.5rem;
    height: 3.5rem;
  }

  .logo:nth-child(odd) {
    margin-right: 0.5rem;
  }

  .logo:nth-child(n + 3) {
    margin-top: 0.5rem;
  }
`


export default css`
  ${base}
`
