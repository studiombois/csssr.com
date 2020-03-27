import { css } from '@emotion/core'

const base = css`
  padding-top: 8.5rem;

  h2,
  .font_subhead-regular,
  .font_p24-strong {
    text-align: center;
  }

  h2 {
    grid-column: 4 / span 6;
  }

  .font_subhead-regular {
    grid-column: 2 / span 10;
    margin-top: 0.875rem;
    margin-bottom: 4.1875rem;
  }

  .font_p24-strong {
    grid-column: 2 / span 10;
    margin-top: 1.25rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    h2 {
      grid-column: 3 / span 8;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    h2 {
      grid-column: 3 / span 8;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    padding-top: 6rem;

    .font_subhead-regular {
      margin-top: 0.625rem;
      margin-bottom: 2.1875rem;
    }

    .font_p24-strong {
      margin-top: 1.0625rem;
    }
  }

  @media (max-width: 767px) {
    padding-top: 6.0625rem;

    h2,
    .font_subhead-regular,
    .font_p24-strong {
      grid-column: 1 / span 6;
    }

    .font_subhead-regular {
      margin-top: 0.625rem;
      margin-bottom: 0.3125rem;
    }

    .font_p24-strong {
      margin-top: 0.9375rem;
    }
  }
`

const ie11Styles = css`
  section {
    -ms-grid-rows: auto auto auto auto;
  }

  h2 {
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;
  }

  .font_subhead-regular {
    -ms-grid-column: 3;
    -ms-grid-column-span: 19;
  }

  .font_p24-strong {
    -ms-grid-column: 3;
    -ms-grid-column-span: 19;
  }

  @media (min-width: 1024px) {
    h2 {
      -ms-grid-column: 5;
      -ms-grid-column-span: 15;
      -ms-grid-row: 1;
    }

    p {
      -ms-grid-row: 2;
    }

    .ul {
      -ms-grid-row: 3;
    }
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
