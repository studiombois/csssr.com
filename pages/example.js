import React, { PureComponent } from 'react'
import Head from '../components/head'

export default class Example extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', function (event) {
      // layout 76
      // grid 71
      // pixel perfect 80
      if ((event.ctrlKey || event.metaKey) && event.which === 71) {
        event.preventDefault()
        document.getElementById('header').classList.toggle('gird')
      } else if ((event.ctrlKey || event.metaKey) && event.which === 76) {
        event.preventDefault()
        document.getElementById('header').classList.toggle('layout-columns-on')
      } else if ((event.ctrlKey || event.metaKey) && event.which === 80) {
        event.preventDefault()
        document.body.classList.toggle('pixel-perfect')
      }
    })
  }

  render() {
    return (
      <div>
        <Head title='Example' />

        <header className='header' id='header'>
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

          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />
          <div className='layout-column' />

          <div className='mention'>
            cmd/ctrl + p — on/off pixel-perfect
            <br />
            <br />
            cmd/ctrl + g — on/off grid
            <br />
            <br />
            cmd/ctrl + l — on/off layout columns
          </div>
        </header>

        <style jsx>{`
          * {
            margin: 0;
            box-sizing: border-box;
          }

          :global(body) {
            position: relative;
          }

          :global(.pixel-perfect) {
            background-position: -64px calc(6rem + 5px);
            background-size: 1920px;
            background-image: url('http://s.csssr.ru/U31J879TR/1920__....png');
            background-repeat: no-repeat;
          }

          .gird {
            background-size: 1rem 1rem;
            background-image: linear-gradient(to right, lightgrey 1px, transparent 1px), linear-gradient(to bottom, lightgrey 1px, transparent 1px);
          }

          .header {
            margin-bottom: 6rem;
            padding-top: 24rem;
            display: grid;
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

          .mention {
            position: absolute;
            top: 3rem;
            right: 3rem;
            padding: 2rem;
            border: 0.125rem solid grey;
            display: block;
            width: 40rem;
            height: 16rem;
            background-color: lightgrey;
            font-family: Roboto;
            font-size: 2rem;
            opacity: 0.2;
            transition: opacity 200ms ease-out;
          }

          .mention:hover {
            opacity: 1;
          }

          .layout-columns-on .layout-column {
            opacity: 1;
          }

          .layout-column {
            opacity: 0;
            grid-row: 1;
            z-index: -1;
            background-color: #F6D3C3;
          }

          .layout-column:nth-child(1) {
            grid-column: 1 / span 1;
          }

          .layout-column:nth-child(2) {
            grid-column: 2 / span 1;
          }

          .layout-column:nth-child(3) {
            grid-column: 3 / span 1;
          }

          .layout-column:nth-child(4) {
            grid-column: 4 / span 1;
          }

          .layout-column:nth-child(5) {
            grid-column: 5 / span 1;
          }

          .layout-column:nth-child(6) {
            grid-column: 6 / span 1;
          }

          .layout-column:nth-child(7) {
            grid-column: 7 / span 1;
          }

          .layout-column:nth-child(8) {
            grid-column: 8 / span 1;
          }

          .layout-column:nth-child(9) {
            grid-column: 9 / span 1;
          }

          .layout-column:nth-child(10) {
           grid-column: 10 / span 1;
          }

          .layout-column:nth-child(11) {
            grid-column: 11 / span 1;
          }

          .layout-column:nth-child(12) {
            grid-column: 12 / span 1;
          }

          @media (max-width: 1365px) {
            .header {
              grid-template-columns: repeat(12, 11rem);
              column-gap: 2rem;
            }

            :global(.pixel-perfect) {
              background-position: -3rem calc(6rem + 5px);
              background-size: 1280px;
              background-image: url('http://s.csssr.ru/U31J879TR/1280_1365.png');
            }

            .tagline {
              grid-column: 3 / span 5;
            }
          }

          @media (min-width: 1365px) and (max-width: 1920px) {
            .header {
              grid-template-columns: repeat(12, 12rem);
              column-gap: 2rem;
            }

            :global(.pixel-perfect) {
              background-position: -2rem calc(6rem + 5px);
              background-size: 1360px;
              background-image: url('http://s.csssr.ru/U31J879TR/1360__1920.png');
            }
          }
        `}</style>

      </div>
    )
  }
}
