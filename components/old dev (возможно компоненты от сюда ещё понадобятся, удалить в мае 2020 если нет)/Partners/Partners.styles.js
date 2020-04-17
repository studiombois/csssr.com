import { css } from '@emotion/core'

const base = css`
  & {
    padding-top: 8.5rem;
  }

  h2 {
    grid-column: 4 / span 6;
    grid-row: 1;
    margin-bottom: 6.5rem;
    text-align: center;
  }

  .column {
    grid-row: 2;
  }

  .column:nth-of-type(1) {
    grid-column: 3 / span 3;
  }

  .column:nth-of-type(2) {
    grid-column: 6 / span 3;
  }

  .column:nth-of-type(3) {
    grid-column: 9 / span 3;
  }

  .link-list-wrapper {
    margin-bottom: 5rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    h2 {
      grid-column: 3 / span 8;
    }

    .link-list-wrapper {
      margin-bottom: 4.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    h2 {
      grid-column: 3 / span 8;
    }

    .link-list-wrapper {
      margin-bottom: 4.5rem;
    }
  }

  @media (max-width: 1279px) {
    & {
      margin-bottom: 0.6875rem;
      padding-top: 6.1875rem;
    }

    h2 {
      margin-bottom: 3rem;
      text-align: center;
    }

    .link-list-wrapper {
      margin-bottom: 2.5rem;
    }
  }
`

const ie11Styles = css`
  h2 {
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;
    -ms-grid-row: 1;
  }

  .column {
    -ms-grid-row: 2;
  }

  .column:nth-of-type(1) {
    -ms-grid-column: 5;
    -ms-grid-column-span: 5;
  }

  .column:nth-of-type(2) {
    -ms-grid-column: 11;
    -ms-grid-column-span: 5;
  }

  .column:nth-of-type(3) {
    -ms-grid-column: 17;
    -ms-grid-column-span: 5;
  }
  @media (min-width: 1360px) and (max-width: 1919px) {
    h2 {
      -ms-grid-column: 5;
      -ms-grid-column-span: 15;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    h2 {
      -ms-grid-column: 5;
      -ms-grid-column-span: 15;
    }
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`