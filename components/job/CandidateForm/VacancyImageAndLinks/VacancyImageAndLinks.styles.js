import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'

const base = css`
  & {
    grid-column: 9 / span 4;
  }

  ul {
    margin-top: 3.6875rem;
    margin-left: auto;
    margin-right: auto;
    width: 17rem;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  .hot-vacancy {
    position: relative;
  }

  .hot-vacancy::before {
    content: '🔥';
    position: absolute;
    top: -0.125rem;
    left: -1.25rem;
    font-size: 0.75rem;
  }

  .faq-text {
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
    width: 12rem;
    display: block;
    font-weight: 900;
  }

  .faq-text a {
    margin-top: 0.5rem;
    text-decoration: underline;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    ul {
      width: 13rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    ul {
      width: 12rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    ul {
      width: 9rem;
    }

    .faq-text,
    .faq-text a {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .faq-text {
      margin-top: 4.75rem;
      width: 9rem;
    }
  }

  @media (max-width: 767px) {
    & {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    ul {
      display: none;
    }

    .faq-text {
      display: none;
    }
  }
`

const ie11Styles = css`
  & {
    -ms-grid-column: ${getGridValueForMs(9)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }
`

const vacancyImageStyles = css`
  & {
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 25rem;
  }

  img {
    width: 100%;
  }

  @media (max-width: 767px) {
    & {
      position: relative;
      z-index: 2;
      margin-left: -1rem;
      width: calc(100% + 2rem);
      height: 15.5rem;
      text-align: center;
    }

    img {
      height: 100%;
      width: auto;
    }
  }
`

const faqImageStyles = css`
  & {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 12rem;
    height: 8.75rem;
    display: block;
  }

  &.visible_on_mobile {
    display: none;
  }

  img {
    width: auto;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 82%;
  }

  & {
    position: relative;
    overflow: hidden;
  }

  img {
    max-width: none;
    position: absolute;
    right: -2.9375rem;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      margin-top: 0.75rem;
      width: 9rem;
    }

    img {
      object-position: 71%;
    }
  }

  @media (max-width: 767px) {
    & {
      position: relative;
      grid-column: 1 / span 6;
      margin-top: 1.5rem;
      width: auto;
      height: 8.75rem;
    }

    & {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    &.hidden_on_mobile {
      display: none;
    }

    &.visible_on_mobile {
      display: block;
    }

    img {
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 40%;
    }
  }
`
//todo эти стили используются в нескольких компонентах, 
//думаю стоит вынести такие компоненты в отдельные директории
export {
  vacancyImageStyles,
  faqImageStyles,
}

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
