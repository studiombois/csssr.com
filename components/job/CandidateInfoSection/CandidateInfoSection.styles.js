import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = css`
  & {
    margin-top: 6.9375rem;
  }

  h2,
  p {
    grid-column: 2 / span 6;
  }

  p {
    margin-top: 2.9375rem;
  }

  .policy-text {
    display: block;
    margin-top: 3.4375rem;
    grid-column: 2 / span 6;
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.5rem;
    color: #18191b;

    > a {
      color: #0076ff;
      text-decoration: underline;
    }
  }

  @media (max-width: 767px) {
    & {
      margin-top: 3.5625rem;
    }

    h2,
    p {
      grid-column: 1 / span 6;
    }

    p {
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .policy-text {
      margin-top: 4.125rem;
      grid-column: 1 / span 6;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`

const ie11Styles = css`
  h2,
  p {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  .input-firstname {
    -ms-grid-row: 2;
  }

  .input-lastname {
    -ms-grid-row: 2;
  }

  .input-age {
    -ms-grid-row: 3;
  }

  .input-location {
    -ms-grid-row: 4;
  }

  .input-email {
    -ms-grid-row: 5;
  }

  .input-resume {
    -ms-grid-row: 6;
  }

  .input-github {
    -ms-grid-row: 7;
  }

  .line-nine {
    -ms-grid-row: 9;
  }
`

const stylesForFullWidthField = css`
  & {
    margin-top: 2.5rem;
    grid-column: 2 / span 6;
  }

  & {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  @media (max-width: 767px) {
    & {
      grid-column: 1 / span 6;
    }
  }
`

const stylesForFirstHalfWidthField = css`
  & {
    margin-top: 3.0625rem;
    grid-column: 2 / span 3;
  }

  & {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
  }

  @media (max-width: 767px) {
    & {
      margin-top: 1.5rem;
      grid-column: 1 / span 6;
    }
  }
`

const stylesForSecondHalfWidthField = css`
  & {
    margin-top: 3.0625rem;
    grid-column: 5 / span 3;
  }

  & {
    -ms-grid-column: ${getGridValueForMs(5)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
  }

  @media (max-width: 767px) {
    & {
      margin-top: 2.5625rem;
      grid-column: 1 / span 6;
    }
  }
`

const stylesForTextareaField = css`
  & {
    margin-top: 2.0625rem;
    grid-column: 2 / span 6;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  textarea {
    overflow: auto;
  }

  @media (max-width: 767px) {
    & {
      grid-column: 1 / span 6;
    }
  }
`

const stylesForFileField = css`
  & {
    margin-top: 3rem;
    grid-column: 2 / span 6;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 8;
  }

  @media (max-width: 767px) {
    & {
      grid-column: 1 / span 6;
    }

    .button {
      margin-top: 2rem;
    }
  }
`

export {
  stylesForFullWidthField,
  stylesForFirstHalfWidthField,
  stylesForSecondHalfWidthField,
  stylesForTextareaField,
  stylesForFileField,
}

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`