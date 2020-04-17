import { css } from '@emotion/core'

const base = css`
  & {
    padding: 0.5rem 1rem;
  }

  a {
    display: flex;
    align-items: center;
    height: 1.5rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5rem;
    letter-spacing: normal;
    color: black;
    cursor: pointer;
  }

  span {
    margin-left: 0.5rem;
    display: inline-block;
    font-weight: 300;
    text-decoration: underline;
    color: #345eff;
  }

  a[href^="mailto"] span {
    color: #f45b53;
  }

  @media (max-width: 767px) {
    & {
      margin-top: 1.5rem;
    }

    &:hover {
      background-color: white;
    }

    a {
      color: black;
    }

    span {
      color: #4a4a4a;
      text-decoration: none;
    }
  }
`

export default css`
  ${base}
`
