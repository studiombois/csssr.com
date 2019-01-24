import React, { Fragment } from 'react'
import translate from '../../utils/translate-wrapper'
import css from 'styled-jsx/css'
import Picture from '../Picture'

const picture = css.resolve`
  picture {
    grid-column: 3 / span 8;
    z-index: -1;
    margin-top: -8rem;
    height: 568px;
    text-align: center;
  }

  img {
    height: 100%;
  }

  @media (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
      grid-column: 2 / span 10;
      height: 35.5rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      margin-top: 0rem;
      height: 16.5rem;
    }
  }
`

const About = ({ t }) =>
  <Fragment>
    <section className='grid-container' id='about'>
      <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:about.title') }} />
      <p className='font_p16-regular text' dangerouslySetInnerHTML={{ __html: t('school:about.text') }} />
      <Picture
        className={picture.className}
        image={{ namespace: 'school', key: 'stat', alt: t('school:imgAlt.about') }}
      />
      <p className='font_p16-regular footText' dangerouslySetInnerHTML={{ __html: t('school:about.footText') }} />
    </section>
    <style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-top: 8.5rem;
        width: 1792px;
      }

      h2 {
        grid-column: 4 / span 6;
        text-align: center;
      }

      .text {
        grid-column: 3 / span 4;
        margin-top: 6rem;
      }

      .footText {
        margin-top: -1rem;
        grid-column: 8 / span 3;
      }


      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1328px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 1232px;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        section {
          margin-top: 6rem;
          width: 944px;
        }

        .text, .footText {
          font-size: 0.875rem;
          line-height: 1.5rem;
        }

        .text {
          grid-column: 2 / span 5;
          margin-top: 2.5rem;
        }

        .footText {
          margin-top: -1.1875rem;
          grid-column: 8 / span 4;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        section {
          margin-top: 6.1875rem;
          width: 20.5rem;
        }

        h2, .text, .footText {
          grid-column: 1 / span 6;
        }

        .text, .footText {
          font-size: 0.875rem;
          line-height: 1.5rem;
          text-align: center;
        }

        .text {
          margin-top: 1rem;
        }

        .footText {
          margin-top: 1.8125rem;
        }
       }
    `}</style>
    {picture.styles}
  </Fragment>

export default translate()(About)
