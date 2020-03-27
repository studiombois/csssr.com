import { css } from '@emotion/core'

const base = css`
  margin-top: 0.125rem;
  padding-top: 4rem;
  padding-bottom: 3.375rem;
  grid-template-columns: repeat(10, 120px);
  width: 100%;

  h2 {
    grid-column: 3 / span 6;
    margin-bottom: 4.5rem;
    color: white;
  }

  .field input,
  .field_type_textarea textarea {
    background-color: transparent;
  }

  .field {
    grid-column: 2 / span 4;
    margin-bottom: 2.0625rem;
  }

  .field_type_textarea {
    align-self: start;
    margin-top: -0.5625rem;
    margin-bottom: 0;
    grid-column: 6 / span 4;
    grid-row: 2 / span 3;
  }

  .field_type_textarea textarea {
    height: 15.0625rem;
  }

  .field_type_checkbox {
    margin-bottom: 1rem;
    grid-column: 2 / span 8;
    margin-bottom: 1rem;
  }

  .field_type_checkbox label {
    color: white;
  }

  .field_type_checkbox + .field_type_checkbox {
    margin-bottom: 2rem;
  }

  .button {
    margin-top: 0;
    grid-column: 5 / span 2;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    grid-template-columns: repeat(10, 96px);
    width: 100%;
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    grid-template-columns: repeat(10, 88px);
    width: 100%;
    padding-bottom: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    padding-top: 4.8125rem;
    grid-template-columns: repeat(8, 4rem);
    overflow: hidden;
    width: 100%;
    padding-bottom: 2rem;

    h2 {
      grid-column: 2 / span 6;
      margin-bottom: 2.5rem;
    }

    .field {
      grid-column: 2 / span 6;
      grid-row: auto;
    }

    .field_type_textarea {
      margin-top: 1.5rem;
    }

    .field_type_textarea textarea {
      height: 10rem;
    }

    .field_type_checkbox {
      margin-top: 2.6875rem;
    }

    .field_type_checkbox + .field_type_checkbox {
      margin-top: 1.375rem;
      margin-bottom: 3.5rem;
    }

    .button {
      margin-top: 0;
      grid-column: 4 / span 2;
    }
  }

  @media (max-width: 767px) {
    padding-top: 3.75rem;
    grid-template-columns: repeat(6, 3rem);
    width: 100%;

    h2 {
      grid-column: 1 / span 6;
      margin-bottom: 2.5rem;
    }

    .field {
      grid-column: 1 / span 6;
      grid-row: auto;
    }

    .field_type_textarea {
      margin-top: 1.5rem;
    }

    .field_type_textarea textarea {
      height: 10rem;
    }

    .field_type_checkbox {
      margin-top: 2.6875rem;
    }

    .field_type_checkbox + .field_type_checkbox {
      margin-top: 1.6875rem;
      margin-bottom: 3.5rem;
    }

    .button {
      margin-top: 0;
      grid-column: 2 / span 4;
    }
  }
`

const ie11Styles = css`
  -ms-grid-columns: 120px (32px 120px)[9];
  -ms-grid-rows: (auto)[7];

  h2 {
    -ms-grid-column: 5;
    -ms-grid-column-span: 11;
    -ms-grid-row: 1;
  }

  .field {
    -ms-grid-column: 3;
    -ms-grid-column-span: 7;
  }

  .field:nth-of-type(1) {
    -ms-grid-row: 2;
  }

  .field:nth-of-type(2) {
    -ms-grid-row: 3;
  }

  .field:nth-of-type(3) {
    -ms-grid-row: 4;
  }

  .field:nth-of-type(4) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 3;
  }

  .field:nth-of-type(5) {
    -ms-grid-row: 5;
  }

  .field:nth-of-type(6) {
    -ms-grid-row: 6;
  }

  .field_type_textarea {
    -ms-grid-column: 11;
    -ms-grid-column-span: 7;
  }

  .field_type_checkbox {
    -ms-grid-column: 3;
    -ms-grid-column-span: 15;
  }

  .button {
    -ms-grid-column: 9;
    -ms-grid-column-span: 3;
    -ms-grid-row: 7;
  }

  @media (max-width: 1279px) {
    -ms-grid-rows: (auto)[8];

    .field:nth-of-type(1) {
      -ms-grid-row: 2;
    }

    .field:nth-of-type(2) {
      -ms-grid-row: 3;
    }

    .field:nth-of-type(3) {
      -ms-grid-row: 4;
    }

    .field:nth-of-type(4) {
      -ms-grid-row: 5;
      -ms-grid-row-span: 1;
    }

    .field:nth-of-type(5) {
      -ms-grid-row: 6;
    }

    .field:nth-of-type(6) {
      -ms-grid-row: 7;
    }

    .button {
      -ms-grid-column: 9;
      -ms-grid-column-span: 3;
      -ms-grid-row: 8;
    }
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    -ms-grid-columns: 96px (16px 96px)[9];
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    -ms-grid-columns: 88px (16px 88px)[9];
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    -ms-grid-columns: 4rem (1rem 4rem)[7];

    h2 {
      -ms-grid-column: 2;
      -ms-grid-column-span: 12;
    }

    .field {
      -ms-grid-column: 2;
      -ms-grid-column-span: 12;
    }

    .button {
      -ms-grid-column: 7;
      -ms-grid-column-span: 3;
    }
  }

  @media (max-width: 767px) {
    -ms-grid-columns: 3rem (0.5rem 3rem)[5];

    h2 {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }

    .field {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }

    .button {
      grid-column: 2 / span 4;
      -ms-grid-column: 3;
      -ms-grid-column-span: 7;
    }
  }
`

const dynamic = hasFailOrSuccessStatus => css`
  .field {
    opacity: ${hasFailOrSuccessStatus ? 0 : 1};
    pointer-events: ${hasFailOrSuccessStatus ? 'none' : 'auto'};
  }

  .button {
    opacity: ${hasFailOrSuccessStatus ? 0 : 1};
    pointer-events: ${hasFailOrSuccessStatus ? 'none' : 'auto'};
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    height: ${hasFailOrSuccessStatus ? '36.5rem' : 'auto'};
  }

  @media (max-width: 767px) {
    height: ${hasFailOrSuccessStatus ? '100vh' : 'auto'};
  }
`

export default ({ hasFailOrSuccessStatus, isIe11 }) => () => css`
  ${base}
  ${isIe11 && ie11Styles}
  ${dynamic(hasFailOrSuccessStatus)}
`