import React, { Fragment } from 'react'
import Button from '../Button'

export default () =>
  <Fragment>
    <article className='grid-container'>
      <h1 className='font_h1-slab'>
        We make the&nbsp;world more logical with&nbsp;JS

        <span className='font_subhead-slab'>
          and dream about space
        </span>
      </h1>

      {/* TODO:
          Next js похоже не очень умеет в nested стили, хотя библиотека внутри неё
          может, — https://www.npmjs.com/package/styled-jsx#external-styles

          Попробовал применить, но не получилось, тсили всё равно не передались, а у
          всех элементов начал дублироваться хеш в названии класса. Пока оставлю так.

          Я хотел избавится от лишних оберток, так что можно оставить пока так,
          ну или делать эти обертки.
      */}
      <Button style={{ gridColumn: '3 / span 2' }}>
        HIRE&nbsp;US
      </Button>

      <blockquote>
        <p className='font_p16-regular'>
          We&nbsp;specialize in&nbsp;developing data-intensive web applications, including online banking systems, payment interfaces, sales and brokerage platforms, customer portals for airline companies, and websites for mobile network operators.
        </p>

        <p className='font_p16-regular'>
          However, our services are not just for large companies&nbsp;&mdash; we&rsquo;re open to&nbsp;startups who are just at&nbsp;the beginning of&nbsp;their journey.
        </p>

        <footer className='font_p16-regular' rel='author'>
          Dmitriy Chekin, CEO
        </footer>
      </blockquote>
    </article>

    <style jsx>{`
      article {
        margin-left: auto;
        margin-right: auto;
        padding-left: 8rem;
        padding-right: 8rem;
        padding-top: 24rem;
        width: 1920px;
        height: 120rem;
        background-image: url('https://via.placeholder.com/1792x640');
        background-position: 50% 40rem;
        background-repeat: no-repeat;
      }

      blockquote {
        grid-column: 9 / span 3;
        grid-row: 1;
        margin-top: 6rem;
      }

      h1 {
        grid-column: 3 / span 6;
        grid-row: 1;
        margin-bottom: 6rem;
      }

      p {
        margin-bottom: 2rem;
      }

      span {
        padding-top: 10rem;
        display: block;
      }

      footer {
        font-weight: bold;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          width: 1360px;
          padding-left: 2rem;
          padding-right: 2rem;
          background-image: url('https://via.placeholder.com/1328x640')
        }
      }

      @media (max-width: 1359px) {
        article {
          padding-left: 3rem;
          padding-right: 3rem;
          width: 1280px;
          background-image: url('https://via.placeholder.com/1232x640')
        }
      }
    `}</style>
  </Fragment>
