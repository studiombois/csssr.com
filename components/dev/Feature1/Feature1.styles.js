import { css } from '@emotion/core'

const base = css`
  & {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-top: 5rem;
    width: 1792px;
  }

  h2 {
    grid-column: 5 / span 4;
    grid-row: 1;
    margin-bottom: 5.5rem;
    text-align: center;
  }

  p {
    grid-column: 3 / span 4;
    grid-row: 2;
  }

  picture {
    display: block;
  }

  img {
    height: auto;
    display: block;
  }

  .description {
    position: relative;
    z-index: 5;
  }

  .picture-wrapper {
    position: relative;
    grid-column: 2 / span 10;
    grid-row: 2;
    margin-top: 5.5rem;
    height: 768px;
  }

  .font_feature_1,
  .font_feature_2,
  .font_feature_3 {
    position: absolute;
  }

  .font_feature_1 {
    top: 30.875rem;
    left: 20.5rem;
    z-index: 1;
  }

  .font_feature_2 {
    width: 21rem;
    height: 15rem;
    top: 21.375rem;
    left: 37.5rem;
  }

  .font_feature_3 {
    width: 18rem;
    height: 10rem;
    top: 3.875rem;
    left: 58.875rem;
    text-align: right;
  }

  .mvp-link {
    color: #000;
    cursor: pointer;
    transition: opacity 0.3s ease-out;
  }

  .mvp-link:hover {
    opacity: 0.6;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      padding-top: 9rem;
      width: 1328px;
    }

    h2 {
      grid-column: 4 / span 6;
    }

    .font_feature_1 {
      left: 9.1875rem;
    }

    .font_feature_2 {
      left: 25.1875rem;
    }

    .font_feature_3 {
      left: 45.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      padding-top: 9rem;
      width: 1232px;
    }

    h2 {
      grid-column: 4 / span 6;
    }

    .font_p24-strong {
      margin-top: -3rem;
    }

    .font_feature_1 {
      left: 7rem;
    }

    .font_feature_2 {
      left: 23.875rem;
    }

    .font_feature_3 {
      left: 42.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      padding-top: 6.5rem;
      width: 944px;
    }

    h2 {
      margin-bottom: 2.5rem;
    }

    .picture-wrapper {
      margin-top: 5rem;
      height: 512px;
    }

    .font_feature_1 {
      top: 20.5rem;
      left: 6.5rem;
    }

    .font_feature_2 {
      top: 12.875rem;
      left: 18.875rem;
      width: 16rem;
      height: 17rem;
      max-width: 13.3125rem;
    }

    .font_feature_3 {
      width: 13rem;
      height: 7rem;
      top: 1.875rem;
      left: 31.875rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    & {
      width: 59rem;
    }

    .picture-wrapper {
      height: 32rem;
    }
  }

  @media (max-width: 767px) {
    & {
      padding-top: 3rem;
      width: 20.5rem;
    }

    h2,
    p {
      grid-column: 1 / span 6;
    }

    h2 {
      margin-bottom: 1.1875rem;
    }

    picture {
      height: 100%;
    }

    img {
      width: auto;
      height: 100%;
    }

    .picture-wrapper {
      grid-column: 1 / span 6;
      grid-row: 3;
      margin-top: 1.875rem;
      height: 43.4375rem;
    }

    .font_feature_1 {
      top: 8.75rem;
      left: 5.9375rem;
    }

    .font_feature_2 {
      top: 17.75rem;
      left: 6.375rem;
      width: 13.75rem;
    }

    .font_feature_3 {
      width: 11.4375rem;
      height: 7rem;
      top: 32rem;
      left: 0;
    }
  }
`

const ie11Styles = css`
  h2 {
    -ms-grid-column: 9;
    -ms-grid-column-span: 7;
    -ms-grid-row: 1;
  }

  p {
    -ms-grid-column: 5;
    -ms-grid-column-span: 7;
    -ms-grid-row: 2;
  }

  .picture-wrapper {
    -ms-grid-column: 3;
    -ms-grid-column-span: 19;
    -ms-grid-row: 2;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    h2 {
      -ms-grid-column: 7;
      -ms-grid-column-span: 11;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    h2 {
      -ms-grid-column: 7;
      -ms-grid-column-span: 11;
    }
  }
`
export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
