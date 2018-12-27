import React, { Fragment } from 'react'
import { translate } from 'react-i18next'

const Costs = ({ t }) =>
  <Fragment>
    <section className='grid-container'>
      <h2 className='font_h2-slab'>
        {t('school:costs.title') }
        <br/>
        <div className='font_roboto-slab-light big_counter'>
          <span dangerouslySetInnerHTML={{ __html: t('school:costs.cost') }} />
          <sup className='currency' dangerouslySetInnerHTML={{ __html: t('school:costs.currency') }} />
        </div>
        <span className='font_subhead-slab period' dangerouslySetInnerHTML={{ __html: t('school:costs.period') }} />
      </h2>
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('school:costs.underCostsText') }}/>
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

      p {
        grid-column: 2 / span 8;
        margin-top: 4.4375rem;
      }

      .big_counter {
        position: relative;
        margin-top: 7.125rem;
        display: inline-block;
        font-size: 6.25rem;
        text-align: center;
      }

      .currency {
        position: absolute;
        right: -1rem;
        top: -2.9375rem;
        font-size: 2rem;
        line-height: 6.1875rem;
      }

      .period {
        display: block;
        text-align: center;
        margin-top: 1.875rem;
        justify-self: center;
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
          margin-top: 6.5rem;
          width: 944px;
        }

        h2 {
          text-align: center;
        }

        p {
          grid-column: 2 / span 8;
          margin-top: 2.3125rem;
        }

        .big_counter {
          margin-top: 3.5625rem;
        }

        .currency {
          right: -1.25rem;
        }

        .period {
          margin-top: 0.625rem;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        section {
          margin-top: 6.4375rem;
          width: 20.5rem;
        }

        h2, p {
          grid-column: 1 / span 6;
        }

        p {
          margin-top: 0.8125rem;
        }

        .big_counter {
          margin-top: 3.5625rem;
          font-size: 6.25rem;
        }

        .currency {
          right: -1.25rem;
        }

        .period {
          margin-top: 0.625rem;
        }
       }
    `}</style>
  </Fragment>

export default translate()(Costs)
