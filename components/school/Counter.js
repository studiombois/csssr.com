import React, { Fragment } from 'react'
import { translate } from 'react-i18next'
import counterMock from '../../data/school/counter-mock'

const Counter = ({ t }) =>
  <Fragment>
    <section className='grid-container'>
      <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:counter.nowTitle') }} />
      <p
        className='font_roboto-slab-light big_counter'
        dangerouslySetInnerHTML={{ __html: counterMock.freePlaces }}
      />
      <p
        className='font_subhead-slab free_places'
        dangerouslySetInnerHTML={{ __html: `${t('school:counter.freePlaces')} ${counterMock.allPlaces}` }}
      />
    </section>
    <style jsx>{`
      section {
        margin-top: 9rem;
        margin-left: auto;
        margin-right: auto;
        width: 1792px;
        text-align: center;
      }

      h2 {
        grid-column: 4 / span 6;
      }

      .big_counter {
        grid-column: 5 / span 4;
        margin-top: 7.0625rem;
        font-size: 6.25rem;
      }

      .free_places {
        grid-column: 5 / span 4;
        margin-top: 3.375rem;
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
          margin-top: 6.5625rem;
          width: 944px;
        }

        .big_counter {
          margin-top: 3.5625rem;
        }

        .free_places {
          margin-top: 1.6875rem;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        section {
          margin-top: 4.0625rem;
          width: 20.5rem;
        }

        h2, .big_counter, .free_places {
          grid-column: 2 / span 4;
        }


        .big_counter {
          margin-top: 3.5625rem;
        }

        .free_places {
          margin-top: 1.6875rem;
        }
       }
    `}</style>
  </Fragment>

export default translate()(Counter)
