import React, { Fragment } from 'react'
import { translate } from 'react-i18next'

const Counter = ({ t }) =>
  <Fragment>
    <section className='grid-container' id='manifest'>
      <h2 id='manifest' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:counter.now_title') }} />
      <sup className='font_roboto-slab-light big_counter'>48</sup>
      <h2 className='font_subhead-slab free_places' dangerouslySetInnerHTML={{ __html: `${t('school:counter.free_places')} ${50}` }} />
    </section>
    <style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0rem;
        width: 1792px;
      }

      p {
        grid-column: 1 / span 12;
        text-align: center;
        grid-row: 2;
      }

      .font_h2-slab {
        grid-column: 1 / span 12;
        grid-row: 2;
        text-align: center;
        margin-top: 8.9rem;
      }

      .big_counter {
        font-size: 6.2rem;
        grid-column: 1 / span 12;
        grid-row: 3;
        text-align: center;
        margin-top: 6.1rem;
        justify-self: center;
      }

      .free_places {
        grid-column: 1 / span 12;
        grid-row: 3;
        text-align: center;
        margin-top: 13.8rem;
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
          width: 944px;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
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
        .font_h2-slab {
          grid-column: 1 / span 6;
          grid-row: 2;
          text-align: center;
          margin-top: 8.9rem;
        }

        .big_counter {
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
  </Fragment>

export default translate()(Counter)
