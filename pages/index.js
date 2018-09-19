import React from 'react'
import Head from '../components/Head'
import Form from '../components/Form'

const Example = () =>
  <div>
    <Head title='Example' />
    <Form />

    {/* <header className='header' id='header'>
      <div className='tagline'>
        <h1 className='title'>
          We make the&nbsp;world more logical with JS
        </h1>

        <p className='subtitle'>
          and dream about space
        </p>
      </div>

      <div className='button'>
        HIRE US
      </div>

      <div className='text-wrapper'>
        <p className='text'>
          We specialize in developing data-intensive web applications, including online banking systems, payment interfaces, sales and brokerage platforms, customer portals for airline companies, and websites for mobile network operators.
        </p>

        <p className='text'>
          However, our services are not just for large companies — we’re open to startups who are just at the beginning of their journey.
        </p>

        <p className='capitan'>
          Dmitriy Chekin, CEO
        </p>
      </div>
    </header> */}

    <style jsx>{`
      .header {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 6rem;
        padding-top: 24rem;
        padding-left: 8rem;
        padding-right: 8rem;
        display: grid;
        width: 1920px;
        grid-template-columns: repeat(12, 15rem);
        column-gap: 4rem;
      }

      .tagline {
        grid-column: 3 / span 6;
        grid-row: 1;
      }

      .title {
        margin-bottom: 10rem;
        font-family: Roboto Slab, serif;
        font-size: 8rem;
        line-height: 10rem;
        font-weight: 300;
        color: #000000;
      }

      .subtitle {
        margin-bottom: 6rem;
        margin-top: -3px;
        padding-bottom: 3px;
        font-family: Roboto Slab, serif;
        font-size: 4rem;
        font-weight: 300;
        line-height: 6rem;
        color: #4a4a4a;
      }

      .button {
        grid-column: 3 / span 2;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 6rem;
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 900;
        line-height: 3rem;
        letter-spacing: 0.2rem;
        color: #ffffff;
        background-color: #0076ff;
      }

      .text-wrapper {
        grid-column: 9 / span 3;
        grid-row: 1;
        margin-top: 6rem;
      }

      .text,
      .capitan {
        font-family: Roboto, sans-serif;
        font-size: 2rem;
        font-weight: 300;
        line-height: 3rem;
        color: #4a4a4a;
      }

      .text {
        margin-bottom: 2rem;
      }

      .capitan {
        display: block;
        font-weight: bold;
      }

      @media (max-width: 1359px) {
        .header {
          grid-template-columns: repeat(12, 11rem);
          column-gap: 2rem;
          padding-left: 3rem;
          padding-right: 3rem;
          width: 1280px;
        }
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        .header {
          grid-template-columns: repeat(12, 12rem);
          column-gap: 2rem;
          width: 1360px;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
    `}</style>
  </div>

export default Example
