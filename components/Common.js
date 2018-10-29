import React from 'react'

const Common = () =>
  <style jsx global>{`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
    }

    body {
      margin: 0;
      margin-left: auto;
      margin-right: auto;
    }

    body:not(.outline) * {
      outline: none;
    }

    ul {
      list-style: none;
    }

    picture {
      font-size: 0;
    }

    #__next {
      position: relative;
    }

    .grid-container {
      display: grid;
      align-content: start;
      grid-template-columns: repeat(12, 120px);
      grid-gap: 0 32px;
    }

    /* TODO:
      1. получить ссылку на шрифты с google fonts
      2. вставить в браузер и скопировать нужные @font-face, удалив из url local шрифты
      3. зайати на browserstack, выбрать браузер, который поддерживает woff и повторить шаг 2
      4. PROFIT!
    */

    @media (min-width: 1360px) and (max-width: 1919px) {
      body {
        min-width: 1328px;
      }

      .grid-container {
        grid-template-columns: repeat(12, 96px);
        grid-gap: 0 16px;
      }
    }

    @media (min-width: 1280px) and (max-width: 1359px) {
      body {
        min-width: 1232px;
      }

      .grid-container {
        grid-template-columns: repeat(12, 88px);
        grid-gap: 0 16px;
      }
    }

    @media (min-width: 368px) and (max-width: 1279px) {
      body {
        min-width: 944px;
      }

      .grid-container {
        grid-template-columns: repeat(12, 64px);
        grid-gap: 0 16px;
      }

      @media (max-width: 1023px) {
        html {
          font-size: 1.5625vw;
        }

        body {
          min-width: 59rem;
        }

        .grid-container {
          grid-template-columns: repeat(12, 4rem);
          grid-gap: 0 1rem;
        }
      }
    }

    @media (max-width: 367px) {
      * {
        display: none;
      }
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 100;
      src: url('/static/fonts/Roboto_normal_100.woff') format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: url('/static/fonts/Roboto_normal_300.woff') format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/Roboto_normal_400.woff') format('woff');
    }

    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 400;
      src: url('/static/fonts/Roboto_italic_400.woff') format('woff');
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: url('/static/fonts/Roboto_normal_500.woff') format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: url('/static/fonts/Roboto_normal_700.woff') format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      src: url('/static/fonts/Roboto_normal_900.woff') format('woff');
    }
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 300;
      src: url('/static/fonts/Roboto_Slab_normal_300.woff') format('woff');
    }
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/Roboto_normal_400.woff') format('woff');
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 100;
      src: url('/static/fonts/Roboto_normal_100_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 100;
      src: url('/static/fonts/Roboto_normal_100_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: url('/static/fonts/Roboto_normal_300_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: url('/static/fonts/Roboto_normal_300_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/Roboto_normal_400_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/Roboto_normal_400_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 400;
      src: url('/static/fonts/Roboto_italic_400_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 400;
      src: url('/static/fonts/Roboto_italic_400_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: url('/static/fonts/Roboto_normal_500_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: url('/static/fonts/Roboto_normal_500_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: url('/static/fonts/Roboto_normal_700_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: url('/static/fonts/Roboto_normal_700_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      src: url('/static/fonts/Roboto_normal_900_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      src: url('/static/fonts/Roboto_normal_900_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 300;
      src: url('/static/fonts/Roboto_Slab_normal_300_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 300;
      src: url('/static/fonts/Roboto_Slab_normal_300_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/Roboto_Slab_normal_400_ru.woff2') format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/Roboto_Slab_normal_400_en.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `}</style>

export default Common
