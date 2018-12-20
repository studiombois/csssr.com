import React, { Fragment } from 'react'
import { translate } from 'react-i18next'
import css from 'styled-jsx/css'

const picture = css.resolve`
  picture {
    grid-column: 2 / span 2;
    grid-row: 2;
    z-index: -1;
    margin-top: 8rem;
    height: 248px;
  }

 @media (max-width: 1279px) {
    picture {
      margin-top: 5rem;
      height: 512px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 32rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 3;
      margin-top: 1.875rem;
      height: 43.4375rem;
    }
  }
`

const Manifest = ({ t }) =>
  <Fragment>
    <section className='grid-container' id='manifest'>
      <h2 id='manifest' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:costs.title') }} />
      <sup className='font_roboto-slab-light big_counter'>
        {t('school:costs.cost')}
        <span className='currency'>₽</span>
      </sup>

      <h2 className='font_subhead-slab period' dangerouslySetInnerHTML={{ __html: t('school:costs.period') }} />
      <p className='font_p16-regular under_costs_text' dangerouslySetInnerHTML={{ __html: t('school:costs.underCostsText') }}/>
    </section>
    <style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding-top: 1.1rem;
        width: 1792px;
        margin-bottom: 0.44rem;
      }

      p {
        grid-column: 2 / span 8;
        text-align: left;
        margin-top: 4.5rem;
        grid-row: 4;
      }
      .currency {
        position: absolute;
        right: -1rem;
        top: -2.9rem;
        font-size: 2rem;
        line-height: 6.2rem;
      }

      .font_h2-slab {
        grid-column: 4 / span 6;
        grid-row: 2;
        text-align: center;
        margin-top: 5rem;
      }

      .big_counter {
        position: relative;
        font-size: 6.3rem;
        grid-column: 6 / span 2;
        grid-row: 3;
        text-align: center;
        margin-top: 7rem;
        justify-self: center;
      }

      .period {
        grid-column: 5 / span 4;
        grid-row: 3;
        text-align: center;
        margin-top: 14rem;
        justify-self: center;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1328px;
        }

        h2 {
          grid-column: 4 / span 6;
        }

      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 1232px;
        }

        h2 {
          grid-column: 4 / span 6;
        }

      }

      @media (min-width: 768px) and (max-width: 1279px) {
        section {
          padding-top: 6.5rem;
          width: 944px;
        }

        h2 {
          margin-bottom: 2.5rem;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
            padding-top: 1rem;
          }
          .font_h2-slab {
            margin-top: 4.9rem;
          }

          .big_counter {
            margin-top: 1rem;
          }

          .period {
            margin-top: 6.1rem;
          }

          p {
            margin-top: 0rem;
          }

        }
      }

      @media (max-width: 767px) {
        section {
          padding-top: 3rem;
          width: 20.5rem;
        }

        h2,
        p,
        footer {
          grid-column: 1 / span 6;
        }

        h2 {
          margin-bottom: 1.1875rem;
        }

        .font_h2-slab {
          grid-column: 1 / span 6;
          grid-row: 2;
          text-align: center;
          margin-top: 7.4rem;
        }

        .big_counter {
          position: relative;
          font-size: 6.2rem;
          grid-column: 1 / span 6;
          grid-row: 3;
          margin-top: 7.1rem;
          justify-self: center;
        }

        .free_places {
          grid-column: 1 / span 6;
          grid-row: 3;
          margin-top: 13.8rem;
          justify-self: center;
        }

       }
    `}</style>
    {picture.styles}
  </Fragment>

export default translate()(Manifest)
