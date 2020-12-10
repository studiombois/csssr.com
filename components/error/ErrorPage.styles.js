import { css } from '@emotion/core'
import getGridValueForMs from '../../utils/style/getGridValueForMs'

const base = css`
  & {
    padding-bottom: 3.875rem;
  }

  &.error-code_500 h2 {
    grid-column: 9 / span 4;
  }

  .logo {
    grid-column: 2 / span 2;
    margin-top: 5.25rem;
    width: 11.5rem;
    height: 2.875rem;
    color: black;
  }

  a.font_burger-menu {
    margin-top: 0;
    padding-bottom: 0;
    height: 3rem;
  }

  h3.font_burger-menu {
    margin-top: 0;
    padding-bottom: 0;
    line-height: 1.5rem;
    letter-spacing: 0.01875rem;
  }

  h3.font_burger-menu:not(:first-of-type) {
    margin-top: 2rem;
  }

  h1 {
    grid-column: 2 / span 7;
    grid-row: 1;
  }

  h2.list-title {
    grid-column: 10 / span 2;
    margin-top: -3.1875rem;
    grid-row: 2;
    color: #18191B;
  }

  .navList {
    grid-column: 10 / span 2;
    grid-row: 4;
    margin-top: 1.25rem;
  }

  .menu li {
    margin-top: 1rem;
  }

  .menu-item {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 900;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
    color: #a9a9A9;
    
    & br {
      display: none;
    }
  }

  .code-wrapper {
    grid-column: 2 / span 6;
    grid-row: 2 / span 10;
    margin-top: 2.9375rem;
    width: calc(100% + 1rem);
    height: 25rem;
  }

  .arrow-wrapper {
    grid-column: 10 / span 1;
    grid-row: 3;
    margin-top: 1.875rem;
    width: 0.813rem;
    height: 3.8125rem;
    background-image: url('../../static/icons/lineFromTopToBottom.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &.header_404 {
    padding-bottom: 0;
  }

  &.error-code_404 {
    padding-top: 5.188rem;

    .fixed {
      position: fixed;
      display: grid;
      grid-column: 2 / span 7;
    }

    .logo {
      margin-top: 0;
    }

    .logo svg {
      grid-row: 1;
      width: 11.5rem;
    }

    h1 {
      grid-row: 2;
      margin-top: 3.875rem;
    }

    .picture-container {
      grid-row: 3 / span 10;
    }

    .code-wrapper {
      position: absolute;
      top: -1.688rem;
      left: -4.813rem;
      grid-column: auto;
      grid-row: 3 / span 10;
    }

    h2 {
      margin-top: 8.563rem;
    }
  }


  @media (hover: hover) and (pointer: fine) {
    .menu-item:hover {
      color: #0254D8;
    }
  }

  @media (min-width: 1920px) {
    .fixed {
      width: 1220px;
    }

    h2 {
      grid-column: 10 / span 3;
    }
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .navList {
      grid-column: 10 / span 3;
    }

    h2.list-title {
      grid-column: 10 / span 3;
    }

    .code-wrapper {
      margin-top: 3.5rem;
      width: 41.75rem;
      height: 18.625rem;
    }

    &.error-code_404 {
      .fixed {
        width: 890px;
      }

      .code-wrapper {
        top: -1.313rem;
        left: 0;
      }
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
    }

    &.error-code_404 {
      .fixed {
        width: 835px;
      }

      .picture {
        top: 0;
        left: 0;  
      }
      
      .code-wrapper {
        top: -1.313rem;
        left: 0;
      }

      .list-title {
        grid-column: 10 / span 3;
        max-width: 250px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .navList {
      grid-column: 10 / span 3;
    }

    h1.page-title {
      margin-top: 5.75rem;
    }

    h2 {
      margin-top: -2.375rem;
      grid-column: 10 / span 3;
    }

    h3.font_burger-menu:not(:first-of-type) {
      margin-top: 1.5rem;
    }

    .code-wrapper {
      margin-top: 2.375rem;
      width: 30.5rem;
      height: 13.625rem;
    }

    .arrow-wrapper {
      margin-top: 1.5625rem; 
    }

    .navList {
      margin-top: 1rem;
    }

    .menu li {
      margin-top: 0.75rem;
    }

    .menu-item {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    &.error-code_404 {
      .fixed {
        width: 40rem;
      }

      .code-wrapper {
        left: -0.25rem;
      }

      .list-title {
        margin-top: 9.375rem;
        grid-column: 10 / span 3;
      }
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

   .logo {
      grid-column: 1 / span 3;
      margin-top: 3.625rem;
      width: 10rem;
      height: 2.5rem;
      color: black;
    }

    h1 {
      grid-column: 1 / span 6;
      grid-row: 1;
      margin-top: 0.5625rem;
    }

    h2 {
      margin-top: 2.3125rem;
      grid-column: 1 / span 4;
      grid-row: 3;
    }

    .code-wrapper {
      grid-column: 1 / span 5;
      grid-row: 2;
      margin-top: 3.875rem;
      margin-left: 0.1875rem;
      width: 16.125rem;
      height: 7.25rem;
    }

    .arrow-wrapper {
      grid-column: 1;
      grid-row: 4;
      margin-top: 1.75rem;
      padding-top: 0rem;
      width: 0.625rem;
      height: 3.0625rem;
    }

    .navList {
      grid-column: 1 / span 4;
      grid-row: 5;
      margin-top: 1rem;
    }

    h3.font_burger-menu:not(:first-of-type) {
      margin-top: 1.5rem;
    }

    .menu li {
      margin-top: 0.75rem;
    }

    .menu-item {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    &.error-code_404 {
      padding-top: 3.5rem;

      .logo {
        margin-left: -0.813rem;
      }

      .page-title {
        margin-top: 3.5rem;
      }

      .fixed {
        position: static;
        grid-column: 1 / span 6;
      }

      .code-wrapper {
        top: -2rem;
        left: 0;
      }

      .list-title {
        margin-top: 2.375rem;
        grid-column: 1 / span 6;
      }

      .arrow-wrapper {
        margin-top: 1.5rem;
      }
    }
  }
`

const ie11Styles = css`
.logo {
    display: block;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
  }

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
  .picture-container {
    position: relative;
    z-index: -1;
    height: 0;
    grid-column: 2 / span 7;
    grid-row: 2 / span 10;
    margin-top: 1.5rem;
    overflow: hidden;
    padding-top: 51.5rem;
  }

  .picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .picture-container {
      padding-top: 38.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .picture-container {
      padding-top: 35.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .picture-container {
      padding-top: 27rem;
    }
  }

  @media (max-width: 767px) {
    .picture-container {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: 2rem;
      padding-top: 16.5rem;
    }
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${pictureStyles}
  ${isIe11 && ie11Styles}
`
