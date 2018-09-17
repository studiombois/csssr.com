import React from 'react'
import Head from './head'
import Nav from './nav'
import Footer from './footer'
import { string } from 'prop-types'

const Layout = props => {
  const { children } = props

  return <div className='layout'>
    <Head />
    <Nav />

    {children}
    <Footer />

    <style jsx>{`
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

      :global(html) {
        font-size: 8px;
      }

      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }

      :global(.h1Slab) {
        font-family: Roboto Slab;
        font-size: 8rem;
        font-weight: 300;
        line-height: 10rem;
        color: #000000;
      }

      :global(.h1Regular) {
        font-family: Roboto;
        font-size: 5rem;
        font-weight: 900;
        line-height: 7rem;
        color: #4a4a4a;
      }

      :global(.h2Slab) {
        margin-top: -2px;
        padding-bottom: 2px;
        font-family: Roboto Slab;
        font-size: 6rem;
        line-height: 8rem;
        color: #000000;
      }

      :global(.h2Regular) {
        margin-top: -7px;
        padding-bottom: 7px;
        font-family: Roboto;
        font-size: 3rem;
        font-weight: 900;
        line-height: 4rem;
        color: #4a4a4a;
      }

      :global(.h3Regular) {
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 900;
        line-height: 3rem;
        color: #4a4a4a;
      }

      :global(.subheadSlab) {
        margin-top: -3px;
        padding-bottom: 3px;
        font-family: Roboto Slab;
        font-size: 4rem;
        font-weight: 300;
        line-height: 6rem;
        color: #4a4a4a;
      }

      :global(.subheadRegular) {
        margin-top: -2px;
        padding-bottom: 2px;
        font-family: Roboto;
        font-size: 4rem;
        font-weight: 100;
        line-height: 6rem;
        color: #4a4a4a;
      }

      :global(.buttonLabel) {
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 900;
        line-height: 3rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        color: #4a4a4a;
      }

      :global(.linkList16) {
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 300;
        line-height: 3rem;
        text-decoration: underline;
        color: #0076ff;
      }

      :global(.linkList24) {
        margin-top: -7px;
        padding-bottom: 7px;
        font-family: Roboto;
        font-size: 3rem;
        font-weight: 300;
        line-height: 4rem;
        text-decoration: underline;
        color: #0076ff;
      }

      :global(.linkList28) {
        margin-top: -4px;
        padding-bottom: 4px;
        font-family: Roboto;
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 5rem;
        text-decoration: underline;
        color: #0076ff;
      }

      :global(.footerLink) {
        margin-top: -6px;
        padding-bottom: 6px;
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 3rem;
        color: #0076ff;
      }

      :global(.footerText) {
        margin-top: -6px;
        padding-bottom: 6px;
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 3rem;
        color: #000000;
      }

      :global(.basicInputLabel),
      :global(.errorInputLabel) {
        font-family: Roboto;
        font-size: 1.75rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: #c5c5c5;
      }

      :global(.errorInputLabel) {
        color: #d0021b;
      }

      :global(.smallInputLabel),
      :global(.focusInputLabel) {
        margin-top: -2px;
        padding-bottom: 2px;
        font-family: Roboto;
        font-size: 1.25rem;
        line-height: 2rem;
        letter-spacing: 0.1625rem;
        text-transform: uppercase;
        color: #9b9b9b;
      }

      :global(.focusInputLabel) {
        color: #0076ff;
      }

      :global(.inputPlaceholder) {
        margin-top: -7px;
        padding-bottom: 7px;
        font-family: Roboto;
        font-size: 3rem;
        font-weight: 100;
        line-height: 6rem;
        color: #c0c0c0;
      }

      :global(.inputtedTextRegular),
      :global(.inputtedTextError) {
        margin-top: -7px;
        padding-bottom: 7px;
        font-family: Roboto;
        font-size: 3rem;
        font-weight: 300;
        line-height: 4rem;
        color: #000000;
      }

      :global(.inputtedTextError) {
        color: #d0021b;
      }

      :global(.burgerMenu) {
        margin-top: -4px;
        padding-bottom: 4px;
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 900;
        line-height: 6rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: #4a4a4a;
      }

      :global(.topMenu) {
        margin-top: -3px;
        padding-bottom: 3px;
        font-family: Roboto;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 4rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: #0076ff;
      }

      :global(.p16Regular) {
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 300;
        line-height: 3rem;
        color: #4a4a4a;
      }

      :global(.p24Strong) {
        margin-top: -3px;
        padding-bottom: 3px;
        font-family: Roboto;
        font-size: 3rem;
        line-height: 5rem;
        color: #4a4a4a;
      }

      :global(.perforator16black) {
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 900;
        line-height: 3rem;
        letter-spacing: 0.125rem;
        text-transform: uppercase;
        color: #9b9b9b;
      }

      :global(.perforator10regular) {
        margin-top: -2px;
        padding-bottom: 2px;
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 900;
        line-height: 2rem;
        letter-spacing: 0.1625rem;
        text-transform: uppercase;
        color: #4a4a4a;
      }
    `}</style>
  </div>
}

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default Layout
