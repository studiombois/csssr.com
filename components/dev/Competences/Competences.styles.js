import { css } from '@emotion/core'

const base = css`
  & {
    height: 146.0625rem;
    overflow: hidden;
    transition: height 300ms linear;
  }

  &.is_cut {
    height: 41rem;
  }

  h2:first-of-type {
    grid-row: 1;
    grid-column: 2 / span 4;
    margin-top: 18.9325rem;
  }

  h2:nth-of-type(2) {
    grid-row: 3;
    grid-column: 8 / span 4;
    margin-top: 13.5625rem;
  }

  & > p:first-of-type {
    grid-row: 4;
    grid-column: 8 / span 4;
    margin-top: 0.4375rem;
  }

  h2:last-of-type {
    grid-row: 5;
    grid-column: 2 / span 5;
    margin-top: 25rem;
  }

  p:last-of-type {
    grid-row: 6;
    grid-column: 2 / span 5;
  }

  h2:first-of-type + .logos-and-text-container p,
  h2:last-of-type + p {
    margin-top: 1.3125rem;
  }

  figure,
  .logos-sheet {
    position: absolute;
  }

  figcaption {
    position: absolute;
    font-family: 'Roboto Slab', 'Georgia', serif;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.35rem;
    text-transform: uppercase;
    color: #1d1d1d;
  }

  .logos-and-text-container {
    position: relative;
    grid-row: 2;
    grid-column: 2 / span 4;
  }

  .react {
    top: -11rem;
    left: calc(100% + 15.5rem);
    width: 27rem;
  }

  .react figcaption {
    top: 8.5rem;
    right: -0.875rem;
  }

  .angular {
    top: calc(100% + 1rem);
    left: calc(100% - 5.5rem);
    width: 19.875rem;
  }

  .angular figcaption {
    top: 8.4375rem;
    right: -4rem;
  }

  .vue {
    top: calc(100% + 17rem);
    left: calc(100% - 16.5rem);
    width: 13rem;
  }

  .vue figcaption {
    top: 6.5rem;
    right: 0.8125rem;
  }

  .node {
    top: calc(100% + 26rem);
    left: calc(100% - 1rem);
    width: 13rem;
  }

  .node figcaption {
    top: 11.5rem;
    right: -5.375rem;
  }

  .logos-sheet {
    top: calc(100% + 42rem);
    left: 0;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    h2:last-of-type {
      margin-top: 23.5rem;
    }

    .logos-and-text-container {
      grid-column: 2 / span 5;
    }

    .react {
      left: calc(100% + 8rem);
    }

    .angular {
      left: calc(100% - 13rem);
    }

    .vue {
      left: calc(100% - 24rem);
    }

    .node {
      left: calc(100% - 8.5rem);
    }

    .logos-sheet {
      left: -9.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      height: 148.5625rem;
    }

    &.is_cut {
      height: 43.5rem;
    }

    &.is_cut.lng_en {
      height: 41.5rem;
    }

    h2:last-of-type {
      margin-top: 23.5rem;
    }

    .logos-and-text-container {
      grid-column: 2 / span 5;
    }

    .react {
      left: calc(100% + 8rem);
    }

    .angular {
      left: calc(100% - 13rem);
    }

    .vue {
      left: calc(100% - 24rem);
    }

    .node {
      left: calc(100% - 8.5rem);
    }

    .logos-sheet {
      left: -12.1875rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      height: 108.0625rem;
    }

    &.is_cut {
      height: 29.5rem;
    }

    h2:first-of-type {
      margin-top: 12.5rem;
    }

    h2:nth-of-type(2) {
      margin-top: 14.25rem;
    }

    & > p:first-of-type {
      margin-top: 0.9375rem;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    h2:last-of-type {
      margin-top: 17.3125rem;
    }

    h2:first-of-type + .logos-and-text-container p,
    h2:last-of-type + p {
      margin-top: 1rem;
    }

    figure img {
      max-width: 100%;
    }

    figcaption {
      font-size: 1.125rem;
      letter-spacing: 0.2625rem;
    }

    .logos-and-text-container {
      grid-column: 2 / span 5;
    }

    .react {
      top: -6.5rem;
      left: calc(100% + 3.5625em);
      width: 21.125rem;
    }

    .react figcaption {
      top: 6.8125rem;
      right: -0.3125rem;
    }

    .angular {
      top: calc(100% + 4.75rem);
      left: calc(100% - 11.5rem);
      width: 15.5rem;
    }

    .angular figcaption {
      top: 6.4375rem;
      right: -3.6125rem;
    }

    .vue {
      top: calc(100% + 19.3125rem);
      left: calc(100% - 17.75rem);
      width: 9.75rem;
    }

    .vue figcaption {
      top: 4.8125rem;
      right: 0.3125rem;
    }

    .node {
      top: calc(100% + 26.875rem);
      left: calc(100% - 7rem);
      width: 10.25rem;
    }

    .node figcaption {
      top: 8.8125rem;
      right: -4.375rem;
    }

    .logos-sheet {
      top: calc(100% + 39.875rem);
      left: -21.75rem;
    }
  }

  @media (max-width: 767px) {
    & {
      height: 113.5625rem;
    }

    &.lng_en {
      height: 111.5625rem;
    }

    &.is_cut {
      height: 28rem;
    }

    &.is_cut.lng_en {
      height: 26rem;
    }

    &.is_cut {
      height: 28rem;
    }

    h2:first-of-type {
      grid-column: 1 / span 4;
      margin-top: 6.5rem;
    }

    h2:nth-of-type(2) {
      grid-column: 3 / span 4;
      margin-top: 15.75rem;
    }

    & > p:first-of-type {
      grid-column: 3 / span 4;
      margin-top: 1rem;
      margin-top: 0.9375rem;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    h2:last-of-type {
      grid-column: 1 / span 4;
      margin-top: 13.3125rem;
    }

    p:last-of-type {
      grid-column: 1 / span 4;
    }

    h2:first-of-type + .logos-and-text-container p,
    h2:last-of-type + p {
      margin-top: 1rem;
    }

    figure img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    figcaption {
      font-size: 0.875rem;
      letter-spacing: 0.2rem;
    }

    .logos-and-text-container {
      grid-column: 1 / span 4;
    }

    .react {
      top: 3.5rem;
      left: calc(100% - 0.75rem);
      width: 14.125rem;
      z-index: 10;
    }

    .react figcaption {
      top: 9.125rem;
      right: calc(100% - 3.375rem);
    }

    .angular {
      top: calc(100% + 4.375rem);
      left: -0.25rem;
      width: 10.375rem;
    }

    .angular figcaption {
      top: 4.5rem;
      right: -3.25rem;
    }

    .vue {
      top: calc(100% + 17.8125rem);
      left: -2.0625rem;
      width: 6.75rem;
    }

    .vue figcaption {
      top: 3.0625rem;
      right: 0;
    }

    .node {
      top: calc(100% + 28.75rem);
      left: -1.5rem;
      width: 6.625rem;
    }

    .node figcaption {
      top: 6.1875rem;
      right: -1.4375rem;
    }

    .logos-sheet {
      top: calc(100% + 37.3125rem);
      left: 0;
      z-index: -1;
    }

    .lng_en .logos-sheet {
      top: calc(100% + 35.3125rem);
    }
  }
`

const ie11Styles = css`
  :global(.ie11) h2:first-of-type {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 7;
  }

  :global(.ie11) h2:nth-of-type(2) {
    -ms-grid-row: 3;
    -ms-grid-column: 15;
    -ms-grid-column-span: 21;
  }

  :global(.ie11) & > p:first-of-type {
    -ms-grid-row: 4;
    -ms-grid-column: 15;
    -ms-grid-column-span: 7;
  }

  :global(.ie11) h2:last-of-type {
    -ms-grid-row: 5;
    -ms-grid-column: 3;
    -ms-grid-column-span: 9;
  }

  :global(.ie11) p:last-of-type {
    -ms-grid-row: 6;
    -ms-grid-column: 3;
    -ms-grid-column-span: 9;
  }

  :global(.ie11) .logos-and-text-container {
    -ms-grid-row: 2;
    -ms-grid-column: 3;
    -ms-grid-column-span: 7;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    :global(.ie11) .logos-and-text-container {
      -ms-grid-column: 3;
      -ms-grid-column-span: 9;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    :global(.ie11) .logos-and-text-container {
      -ms-grid-column: 3;
      -ms-grid-column-span: 9;
    }
  }
`

export default css`
  ${base}
  ${ie11Styles}
`
