import { css } from '@emotion/core'

const base = css`
  & + figcaption {
    margin-top: 0.375rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    text-align: center;
    color: #9b9b9b;
  }

  @media (max-width: 1279px) {
    & {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    & {
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }

  @media screen and (max-width: 1024px) and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
    & {
      max-width: 80%;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & + figcaption {
      margin-top: 0rem;
      font-size: 0.75rem;
      line-height: 1.25;
      letter-spacing: 0.15rem;
    }
  }

  @media (max-width: 767px) {
    & + figcaption {
      margin-top: 0.0625rem;
      font-size: 0.625rem;
      letter-spacing: 0.125rem;
    }
  }
`

export default css`
  ${base}
`