import { css } from '@emotion/core'

const base = css`
  & {
    padding-top: 8.4375rem;
  }

  h2 {
    grid-column: 3 / span 2;
    grid-row: 1;
  }

  p {
    grid-column: 5 / span 6;
    grid-row: 2;
    margin-top: 3rem;
  }

  picture {
    display: block;
    grid-column: 3 / span 8;
    grid-row: 1;
    z-index: -1;
    margin-top: 2rem;
    height: 568px;
  }

  img {
    display: block;
    height: auto;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    h2 {
      grid-column: 3 / span 3;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    h2 {
      grid-column: 3 / span 3;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      padding-top: 5.4375rem;
    }

    h2 {
      grid-column: 3 / span 3;
    }

    p {
      margin-top: 2.75rem;
    }

    picture {
      margin-top: 1.5625rem;
      height: 432px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    picture {
      height: 27rem;
    }
  }

  @media (max-width: 767px) {
    & {
      padding-top: 5.4375rem;
    }

    h2 {
      grid-column: 2 / span 4;
      grid-row: 1;
    }

    p {
      grid-column: 1 / span 6;
      grid-row: 3;
      margin-top: 1.75rem;
    }

    picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: 0.5rem;
      height: 10.5rem;
    }
  }
`
const ie11Styles = css`
  h2 {
    -ms-grid-column: 5;
    -ms-grid-column-span: 3;
    -ms-grid-row: 1;
  }

  p {
    -ms-grid-column: 9;
    -ms-grid-column-span: 11;
    -ms-grid-row: 2;
  }

  picture {
    -ms-grid-column: 5;
    -ms-grid-column-span: 15;
    -ms-grid-row: 1;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    h2 {
      -ms-grid-column: 5;
      -ms-grid-column-span: 5;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    h2 {
      -ms-grid-column: 5;
      -ms-grid-column-span: 5;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    h2 {
      -ms-grid-column: 5;
      -ms-grid-column-span: 5;
    }
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
