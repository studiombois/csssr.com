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

  .news-field,
  .policy-text {
    display: block;
    grid-column: 2 / span 6;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    line-height: 1rem;
    font-style: normal;
    font-weight: 300;
    color: #18191b;
  }

  .news-field {
    margin-top: 3.5rem; 
  }

  .policy-text {
    margin-top: 1.5rem;
    color: #9B9B9B;

    > a {
      color: #0076ff;
      text-decoration: underline;
    }
  }

  @media (max-width: 1279px) and (min-width: 768px) {
    .news-field {
      margin-top: 2rem;
    }

    .news-field label,
    .policy-text {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 767px) {
    & {
      margin-top: 3.5625rem;
    }

    h2,
    p,
    .news-field,
    .policy-text
     {
      grid-column: 1 / span 6;
    }

    p {
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .news-field {
      margin-top: 2rem;
    }

    .policy-text {
      margin-top: 1rem;
    }

    .news-field label,
    .policy-text {
      font-size: 0.75rem;
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