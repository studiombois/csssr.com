import { css } from '@emotion/core'

const base = css`
  & {
    position: relative;
  }

  .planets {
    position: absolute;
    display: block;
    top: 11rem;
    left: 2rem;
    width: 90rem;
  }

  .sputnik {
    position: absolute;
    display: block;
    top: -2rem;
    left: -8rem;
    right: -34rem;
  }

  div {
    margin-top: 9.8rem;
    margin-left: auto;
    margin-right: auto;
    width: 1792px;
    height: 80rem;
  }

  h2 {
    grid-column: 2 / span 11;
    grid-row: 1;
    margin-top: 10.8125rem;
    font-size: 3rem;
    font-family: 'Roboto Slab', serif;
    font-weight: normal;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    div {
      margin-top: 9rem;
      width: 1328px;
      height: 82.1875rem;
    }

    h2 {
      margin-top: 12.875rem;
    }

    .planets {
      top: 15rem;
      left: -11rem;
      width: 90rem;
    }

    .sputnik {
      top: -10rem;
      left: -36rem;
      right: auto;
      width: 155rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    div {
      margin-top: 8.6875rem;
      width: 1232px;
      height: 82.1875rem;
    }

    h2 {
      margin-top: 13.125rem;
    }

    .planets {
      top: 14rem;
      left: -13rem;
      width: 90rem;
    }

    .sputnik {
      top: -7rem;
      left: -20rem;
      right: auto;
      width: 120rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    div {
      margin-top: 5.625rem;
      width: 944px;
      height: 68.125rem;
    }

    h2 {
      margin-top: 11.1875rem;
      font-size: 1.5rem;
    }

    .planets {
      top: 12rem;
      left: -10rem;
      width: 72rem;
    }

    .sputnik {
      top: -7rem;
      left: -25rem;
      right: auto;
      width: 125rem;
    }
  }
  @media (max-width: 767px) {
    div {
      margin-top: 6rem;
      width: 20.5rem;
      height: 43.5625rem;
    }

    h2 {
      margin-top: 7.875rem;
      grid-column: 1 / span 6;
      font-size: 1.5rem;
    }

    .planets {
      top: 14rem;
      left: -15rem;
      width: 38rem;
    }

    .sputnik {
      top: -1rem;
      left: -30rem;
      right: auto;
      width: 80rem;
    }
  }
`

const ie11Styles = css`
  & {
    overflow: hidden;
    height: 1500px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    & {
      height: 1200px;
    }
  }

  h2 {
    -ms-grid-column: 3;
    -ms-grid-column-span: 21;
    -ms-grid-row: 1;
  }

  @media (max-width: 767px) {
    h2 {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }
  }

  .planets {
    height: 88%;
  }

  .sputnik {
    height: 88%;
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
