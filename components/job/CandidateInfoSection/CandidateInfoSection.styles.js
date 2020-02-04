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
  }
`

const ie11Styles = css`
  :global(.ie11) h2,
  :global(.ie11) p {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  :global(.ie11 .input-firstname) {
    -ms-grid-row: 2;
  }

  :global(.ie11 .input-lastname) {
    -ms-grid-row: 2;
  }
  :global(.ie11 .input-age) {
    -ms-grid-row: 3;
  }
  :global(.ie11 .input-location) {
    -ms-grid-row: 4;
  }
  :global(.ie11 .input-email) {
    -ms-grid-row: 5;
  }
  :global(.ie11 .input-resume) {
    -ms-grid-row: 6;
  }
  :global(.ie11 .seventh-line) {
    -ms-grid-row: 7;
  }
  :global(.ie11 .input-checkbox) {
    -ms-grid-row: 8;
  }
`

const stylesForFullWidthField = css`
  & {
    margin-top: 2.5rem;
    grid-column: 2 / span 6;
  }

  :global(.ie11) & {
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

  :global(.ie11) & {
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

  :global(.ie11) & {
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
  }

  :global(.ie11) & {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  :global(.ie11 textarea) {
    overflow: auto;
  }

  @media (max-width: 767px) {
    & {
      grid-column: 1 / span 6;
    }
  }
`

const stylesForCheckboxField = css`
  & {
    margin-top: 3.4375rem;
    grid-column: 2 / span 6;
  }

  :global(.ie11) & {
    display: block;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  @media (max-width: 767px) {
    & {
      margin-top: 4.125rem;
      grid-column: 1 / span 6;
    }
  }
`

const stylesForFileField = css`
  & {
    margin-top: 2.5rem;
    grid-column: 2 / span 4;
  }

  :global(.ie11) & {
    margin-top: 3rem;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  .button {
    margin-top: 3rem;
    grid-column: 6 / span 2;
  }

  :global(.ie11) .button {
    height: 4rem;
    -ms-grid-column: ${getGridValueForMs(6)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
  }

  @media (max-width: 767px) {
    & {
      grid-column: 1 / span 6;
    }

    .button {
      margin-top: 2rem;
      grid-column: 2 / span 4;
    }
  }
`

export {
  stylesForFullWidthField,
  stylesForFirstHalfWidthField,
  stylesForSecondHalfWidthField,
  stylesForTextareaField,
  stylesForCheckboxField,
  stylesForFileField,
}

export default css`
  ${base}
  ${ie11Styles}
`