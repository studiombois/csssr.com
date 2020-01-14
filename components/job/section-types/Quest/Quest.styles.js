import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'

const base = css`
  h2 {
    margin-top: 6.0625rem;
  }

  p {
    margin-top: 0.5rem;
  }

  .icon-wrapper {
    margin-top: 8.5rem;
    grid-column: 10 / span 1;
    text-align: center;
    height: 0;
  }

  .file-info {
    margin-top: 9rem;
    grid-column: 11 / span 1;
    height: 0;
  }

  span {
    margin-top: 0.375rem;
    display: block;
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    h2 {
      margin-top: 3.875rem;
    }

    p {
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .icon-wrapper {
      margin-top: 1.5rem;
      grid-column: 1 / span 1;
      height: auto;
    }

    .file-info {
      margin-top: 2rem;
      grid-column: 2 / span 5;
    }

    span {
      margin-top: 0.875rem;
      font-weight: bold;
    }
  }
`

const ie11Styles = css`
  :global(.ie11) .icon-wrapper {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(1)};
  }

  :global(.ie11) .file-info {
    -ms-grid-column: ${getGridValueForMs(11)};
    -ms-grid-column-span: ${getGridValueForMs(1)};
  }
`

export default css`
  ${base}
  ${ie11Styles}
`
