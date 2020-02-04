import { css } from '@emotion/core'

const base = css`
  & {
    position: relative;
  }

  h1 {
    grid-column: 6 / span 3;
    grid-row: 1;
    padding-left: 2.625rem;
    padding-top: 11.5rem;
    font-size: 10.5rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 900;
    margin-bottom: 12.625rem;
    text-align: center;
  }

  .begin-text {
    margin-bottom: 8.1875rem;
    grid-column: 2 / span 6;
    grid-row: 2;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 2.5rem;
    color: #4a4a4a;
  }

  .rocket-text {
    z-index: 2;
    margin-bottom: 9rem;
    grid-column: 8 / span 4;
    grid-row: 4;
  }

  .planet {
    grid-column: 1 / span 1;
    grid-row: 4;
  }

  .rocket {
    position: relative;
    grid-column: 4 / span 6;
    grid-row: 3 / span 2;
    height: 41.5rem;
    text-align: center;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    h1 {
      padding-left: 1rem;
    }

    .begin-text {
      margin-bottom: 7.3125rem;
    }

    .rocket {
      height: 30.875rem;
    }

    .rocket-text {
      padding-right: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    h1 {
      grid-column: 5 / span 5;
      margin-bottom: 13.125rem;
      padding-left: 0.625rem;
    }

    .begin-text {
      margin-bottom: 7.3125rem;
    }

    .rocket {
      height: 29rem;
    }

    .rocket-text {
      padding-right: 0.5rem;
      margin-bottom: -2.3125rem;
      grid-column: 8 / span 4;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    h1 {
      padding-top: 5.5rem;
      padding-left: 1.75rem;
      margin-bottom: 9rem;
      grid-column: 5 / span 5;
      font-size: 7.5rem;
    }

    .begin-text {
      grid-column: 2 / span 7;
      margin-bottom: 4rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .rocket {
      height: 22rem;
    }

    .rocket-text {
      padding-right: 0.5rem;
      margin-bottom: -6.1875rem;
      font-size: 0.875rem;
      line-height: 1.5rem;
      grid-column: 8 / span 4;
    }
  }

  @media (max-width: 767px) {
    h1 {
      margin-bottom: 6.625rem;
      padding-top: 5.625rem;
      padding-left: 0;
      grid-column: 2 / span 4;
      font-size: 4rem;
    }

    .begin-text {
      grid-column: 1 / span 6;
      margin-bottom: 6rem;
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: center;
    }

    .planet {
      display: none;
    }

    .rocket {
      margin-bottom: 1.125rem;
      grid-column: 2 / span 4;
      grid-row: 3;
      height: 10rem;
    }

    .rocket-text {
      margin-bottom: 0;
      grid-column: 1 / span 6;
      font-size: 0.875rem;
      line-height: 1.5rem;
      text-align: center;
    }
  }
`

const ie11Styles = css`
  :global(.ie11) & {
    overflow: hidden;
  }

  :global(.ie11) h1 {
    -ms-grid-column: 11;
    -ms-grid-column-span: 5;
    -ms-grid-row: 1;
  }

  :global(.ie11) .begin-text {
    -ms-grid-column: 3;
    -ms-grid-column-span: 11;
    -ms-grid-row: 2;
  }

  :global(.ie11) .rocket-text {
    -ms-grid-column: 15;
    -ms-grid-column-span: 7;
    -ms-grid-row: 4;
  }

  :global(.ie11) .planet {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    -ms-grid-row: 4;
  }

  :global(.ie11) .rocket {
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;
    -ms-grid-row: 3;
    -ms-grid-row-span: 2;
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    :global(.ie11) h1 {
      -ms-grid-column: 9;
      -ms-grid-column-span: 9;
    }

    :global(.ie11) .rocket-text {
      -ms-grid-column: 15;
      -ms-grid-column-span: 7;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    :global(.ie11) h1 {
      -ms-grid-column: 9;
      -ms-grid-column-span: 9;
    }

    :global(.ie11) .begin-text {
      -ms-grid-column: 3;
      -ms-grid-column-span: 13;
    }

    :global(.ie11) .rocket-text {
      -ms-grid-column: 15;
      -ms-grid-column-span: 7;
    }
  }

  @media (max-width: 767px) {
    :global(.ie11) h1 {
      -ms-grid-column: 3;
      -ms-grid-column-span: 7;
    }

    :global(.ie11) .begin-text {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }

    :global(.ie11) .rocket {
      -ms-grid-column: 3;
      -ms-grid-column-span: 7;
      -ms-grid-row: 1;
    }

    :global(.ie11) .rocket-text {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }
  }
`
const pictureStyles = css`
  & {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 27.8%;
    width: 139.6875rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      left: 21.4%;
      width: 120rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      left: 15%;
      width: 85rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    & {
      left: 20.5%;
      width: 57.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    & {
      left: 22.2%;
      width: 53rem;
    }
  }

  @media (max-width: 767px) {
    & {
      left: -4.5%;
      width: 22.5rem;
    }
  }
`

const planetStyles = css`
  & {
    margin-top: -4rem;
    width: 100%;
    display: block;
    height: auto;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      margin-top: -3.375rem;
      margin-left: 0.3125rem;
      width: 5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      margin-top: -3.8125rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      margin-left: -0.375rem;
      margin-top: -4.1875rem;
      width: 5.3125rem;
    }
  }

  @media (max-width: 767px) {
    & {
      display: none;
    }
  }
`

export { pictureStyles, planetStyles }

export default css`
  ${base}
  ${ie11Styles}
`
