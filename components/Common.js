import React from 'react'

const Common = () =>
  <style jsx global>{`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 8px;
    }

    body {
      margin: 0;
    }

    ul {
      list-style: none;
    }

    picture {
      font-size: 0;
    }

    .grid-container {
      display: grid;
      align-content: start;
      grid-template-columns: repeat(12, 120px);
      grid-gap: 0 4rem;
    }

    @media (min-width: 1360px) and (max-width: 1919px) {
      .grid-container {
        grid-template-columns: repeat(12, 96px);
        grid-gap: 0 2rem;
      }
    }

    @media (max-width: 1359px) {
      .grid-container {
        grid-template-columns: repeat(12, 88px);
        grid-gap: 0 2rem;
      }
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 100;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1MmgVxIIzQXKMny.woff) format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc-AMP6lQ.woff) format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxMKTU1Kg.woff) format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc-AMP6lQ.woff) format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc-AMP6lQ.woff) format('woff');
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc-AMP6lQ.woff) format('woff');
    }
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 300;
      src: url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u9mxLCGwRuoefDo.woff) format('woff');
    }
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qOr4xCC.woff) format('woff');
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 100;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1MmgVxMIzIXKMnyrYk.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 100;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1MmgVxIIzIXKMny.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfABc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      src: url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 300;
      src: url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u9mxLCCwR2oefDofMY.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 300;
      src: url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u9mxLCGwR2oefDo.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufJ5qWr4xCCQ_k.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin */
    @font-face {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `}</style>

export default Common
