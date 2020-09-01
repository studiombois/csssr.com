import { css } from '@emotion/core'
import getGridValueForMs from '../../utils/style/getGridValueForMs'

const base = css`
  & {
    padding-bottom: 4rem;
  }

  &.error-code_500 h2 {
    grid-column: 9 / span 4;
  }

  a.font_burger-menu {
    margin-top: 0;
    padding-bottom: 0;
    height: 3rem;
  }

  h1 {
    margin-top: 3.875rem;
    grid-column: 2 / span 7;
    grid-row: 1;
  }

  h2{
    grid-column: 10 / span 2;
  }

  h2 {
    margin-top: -3.1875rem;
    grid-row: 2;
  }

  .navList {
    grid-column: 10 / span 2;
    grid-row: 4;
    margin-top: 1rem;
  }

  .menu {
    margin-bottom: 1rem;
  }

  .menu-item{
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 900;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
    color: #a9a9A9;
  }

  .code-wrapper {
    grid-column: 2 / span 6;
    grid-row: 2 / span 10;
    margin-top: 2.5rem;
    width: calc(100% + 1rem);
    height: 25rem;
  }

  .arrow-wrapper {
    grid-column: 10 / span 1;
    grid-row: 3;
    margin-top: 1.5rem;
    width: 0.625rem;
    height: 3.875rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .navList {
      grid-column: 10 / span 3;
    }

    .code-wrapper {
      margin-top: 3.5rem;
      width: 41.75rem;
      height: 18.625rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .navList {
      grid-column: 10 / span 3;
    }

    .code-wrapper {
      margin-top: 2.5rem;
      width: 41.75rem;
      height: 18.625rem;
    }

    .arrow-wrapper {
      grid-column: 10 / span 1;
      grid-row: 3;
      margin-top: 0;
      padding-top: 1.5rem;
      width: 0.625rem;
      height: 5.375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .navList {
      grid-column: 10 / span 3;
    }

    h1 {
      margin-top: 5.6875rem;
    }

    h2 {
      margin-top: -2.375rem;
    }

    .code-wrapper {
      margin-top: 2.5rem;
      width: 30.5rem;
      height: 13.625rem;
    }
  }

  @media (max-width: 767px) {
    & {
      padding-bottom: 2.875rem;
    }

    &.error-code_500 h2 {
      grid-column: 1 / span 4;
    }

    &.error-code_500 .code-wrapper {
      margin-top: 0;
      margin-left: 0;
      width: 17.875rem;
      height: 8.5rem;
      width: 18.75rem;
      height: 8.9375rem;
    }

    h1 {
      grid-column: 1 / span 6;
      grid-row: 1;
      margin-top: 3.6875rem;
    }

    h2 {
      margin-top: 2.625rem;
      grid-column: 1 / span 2;
      grid-row: 3;
    }

    .navList {
      grid-column: 1 / span 4;
      grid-row: 5;
      margin-top: 0.1875rem;
    }

    .arrow-wrapper {
      grid-column: 1;
      grid-row: 4;
      margin-top: 0;
      padding-top: 0rem;
      width: 0.625rem;
      height: 3.0625rem;
    }

    .code-wrapper {
      grid-column: 1 / span 5;
      grid-row: 2;
      margin-top: 3.5625rem;
      margin-left: 0.1875rem;
      width: 16.125rem;
      height: 7.25rem;
    }
  }
`

const ie11Styles = css`
  h1 {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(7)};
    -ms-grid-row: 1;
  }

  h2{
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
    -ms-grid-row: 2;
  }

  &.error-code_500 h2 {
    -ms-grid-column: ${getGridValueForMs(9)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }


  .code-wrapper {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 2;
    -ms-grid-row-span: 10;
  }

  .arrow-wrapper {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(1)};
    -ms-grid-row: 3;
  }

  .picture {
    display: block;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(7)};
    -ms-grid-row: 2;
    -ms-grid-row-span: 3;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .navList {
      -ms-grid-column: ${getGridValueForMs(10)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
      -ms-grid-row: 4;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .navList {
      -ms-grid-column: ${getGridValueForMs(10)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 4;
    }

    .arrow-wrapper {
      -ms-grid-column: ${getGridValueForMs(10)};
      -ms-grid-column-span: ${getGridValueForMs(1)};
      -ms-grid-row: 3;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .navList {
      -ms-grid-column: ${getGridValueForMs(10)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 4;
    }
  }
`

const pictureStyles = css`
  .picture {
    grid-column: 2 / span 7;
    grid-row: 2 / span 10;
    margin-top: 1.5rem;
    z-index: -1;
    height: 51.5rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .picture {
      height: 38.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .picture {
      height: 35.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .picture {
      height: 27rem;
    }
  }

  @media (max-width: 767px) {
    .picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      height: 16.5rem;
    }
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${pictureStyles}
  ${isIe11 && ie11Styles}
`
