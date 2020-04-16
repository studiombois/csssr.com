import { css } from '@emotion/core'

const base = css`
  padding-top: 8.125rem;

  h2,
  p {
    text-align: center;
  }

  h2 {
    grid-column: 4 / span 6;
  }

  p {
    grid-column: 4 / span 6;
    margin-top: 0.875rem;
    margin-bottom: 4.1875rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    h2,
    p {
      grid-column: 3 / span 8;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    h2,
    p {
      grid-column: 3 / span 8;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    padding-top: 5.8125rem;

    p {
      margin-top: 0.625rem;
      margin-bottom: 2.1875rem;
    }
  }

  @media (max-width: 767px) {
    padding-top: 5.8125rem;

    h2,
    h3,
    p {
      grid-column: 1 / span 6;
    }

    p {
      margin-top: 0.625rem;
      margin-bottom: 0.3125rem;
    }

    h3 {
      margin-top: 3.3125rem;
      height: 1.75rem;
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

    h3:first-of-type {
      margin-top: 2rem;
    }

    .project-container {
      grid-column: 1 / span 6;
      overflow-x: scroll;
    }
  }
`

const ie11Styles = css`
  -ms-grid-row: (auto) [4];

  h2 {
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;
    -ms-grid-row: 1;
  }

  p {
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;
    -ms-grid-row: 2;
  }

  @media (min-width: 1360px) {
    h2,
    p {
      -ms-grid-column: 5;
      -ms-grid-column-span: 15;
    }
  }

  @media (max-width: 767px) {
    h2,
    h3,
    p {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }

    .project-container {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
