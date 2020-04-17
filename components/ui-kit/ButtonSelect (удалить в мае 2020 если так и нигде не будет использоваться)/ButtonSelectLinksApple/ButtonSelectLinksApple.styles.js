import { css } from '@emotion/core'

const base = css`
  & {
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    height: 2.5rem;
    border-top: 0.0625rem solid #cccccc;
    text-align: center;
    background-color: white;
  }

  span {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5rem;
    color: #4a4a4a;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5rem;
    letter-spacing: normal;
    color: #345eff;
    cursor: pointer;
  }

  a[href^='mailto'] span {
    color: #f45b53;
  }
`

export default css`
  ${base}
`
