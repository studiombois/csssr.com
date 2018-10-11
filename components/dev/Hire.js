import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import ButtonLink from '../ui-kit/ButtonLink'
import Picture from '../Picture'

const { className, styles } = css.resolve`
  picture {
    grid-column: 1 / span 12;
    grid-row: 3;
    z-index: -1;
    margin-top: -16rem;
    height: 640px;
  }

  @media (min-width: 368px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
      height: 480px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 30rem;
      }
    }
  }
`

export default () =>
  <Fragment>
    <article className='grid-container'>
      <h1 className='font_h1-slab'>
        We make the&nbsp;world more logical with&nbsp;JS

        <span className='font_subhead-slab'>
          and dream about space
        </span>
      </h1>

      <div className='button-wrapper'>
        <ButtonLink href={'#hire-us'}>
          HIRE&nbsp;US
        </ButtonLink>
      </div>

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

      <Picture className={className} imagesKey='dog'/>
    </article><style jsx>{`
      article {
        margin-left: auto;
        margin-right: auto;
        padding-top: 12rem;
        width: 1792px;
        height: 60rem;
      }

      blockquote {
        grid-column: 9 / span 3;
        grid-row: 1;
        margin-top: 3rem;
      }

      h1 {
        grid-column: 3 / span 6;
        grid-row: 1;
        margin-bottom: 3rem;
      }

      p {
        margin-bottom: 1rem;
      }

      span {
        padding-top: 5rem;
        display: block;
      }

      footer {
        font-weight: bold;
      }

      .button-wrapper {
        grid-column: 3 / span 2;
        grid-row: 2;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          width: 1328px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article {
          width: 1232px;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        h1 {
          grid-column: 3 / span 4;
          margin-bottom: 3.8125rem;
        }

        article {
          padding-top: 10rem;
          width: 944px;
          height: 52rem;
        }

        span {
          padding-top: 1.6875rem;
        }

        blockquote {
          margin-top: 1.3125rem;
        }

        @media (max-width: 1023px) {
          article {
            width: 59rem;
          }
        }
      }
    `}</style>
    {styles}
  </Fragment>
