import React, { Fragment } from 'react'
import { translate } from 'react-i18next'

const Costs = ({ t }) =>
  <Fragment>
    <section className='grid-container'>
      <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:costs.title') }} />
      <div className='font_roboto-slab-light big_counter'>
        {t('school:costs.cost')}
        <sup className='currency'>₽</sup>
      </div>

      <h2 className='font_subhead-slab period' dangerouslySetInnerHTML={{ __html: t('school:costs.period') }} />
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('school:costs.underCostsText') }}/>
    </section>
    <style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding-top: 1.125rem;
        width: 1792px;
        margin-bottom: 0.4375rem;
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
        top: -2.9375rem;
        font-size: 2rem;
        line-height: 6.1875rem;
      }

      .font_h2-slab {
        grid-column: 4 / span 6;
        grid-row: 2;
        text-align: center;
        margin-top: 5rem;
      }

      .big_counter {
        position: relative;
        font-size: 6.3125rem;
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
            margin-top: 4.9375rem;
          }

          .big_counter {
            margin-top: 1rem;
          }

          .period {
            margin-top: 6.125rem;
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
        p {
          grid-column: 1 / span 6;
        }

        h2 {
          margin-bottom: 1.1875rem;
        }

        .period {
          grid-column: 1 / span 6;
        }

        .font_h2-slab {
          grid-column: 1 / span 6;
          grid-row: 2;
          text-align: center;
          margin-top: 7.4375rem;
        }

        .big_counter {
          position: relative;
          font-size: 6.25rem;
          grid-column: 1 / span 6;
          grid-row: 3;
          margin-top: 7.125rem;
          justify-self: center;
        }

        .free_places {
          grid-column: 1 / span 6;
          grid-row: 3;
          margin-top: 13.8125rem;
          justify-self: center;
        }

       }
    `}</style>
  </Fragment>

export default translate()(Costs)
