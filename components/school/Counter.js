import React, { Fragment } from 'react'
import translate from '../../utils/translate-wrapper'
import counterMock from '../../data/school/counter-mock'

const Counter = ({ t }) =>
  <Fragment>
    <section className='grid-container'>
      <div>
        <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:counter.nowTitle') }} />
        <p
          className='font_roboto-slab-light big_counter'
          dangerouslySetInnerHTML={{ __html: counterMock.freePlaces }}
        />
        <p
          className='font_subhead-slab free_places'
          dangerouslySetInnerHTML={{ __html: `${t('school:counter.freePlaces', { count: counterMock.freePlaces })} ${counterMock.allPlaces}` }}
        />
      </div>
    </section>
    <style jsx>{`
      section {
        margin-top: 12rem;
        margin-left: auto;
        margin-right: auto;
        width: 1792px;
        text-align: center;
      }

      div {
        grid-column: 3 / span 8;
        padding-bottom: 4rem;
        display: grid;
        grid-template-columns: repeat(8, 120px);
        grid-gap: 0 32px;
        border-top: 1px solid #979797;
        border-bottom: 1px solid #979797;
      }

      h2 {
        grid-column: 2 / span 2;
        margin-top: 4.4375rem;
        padding-bottom: 0.4375rem;
        font-family: 'Roboto', 'Arial', sans-serif;
        font-size: 2.5rem;
        font-weight: 900;
        line-height: 3.5rem;
        color: #4a4a4a;
        text-align: left;
      }

      .big_counter {
        grid-column: 4 / span 2;
        margin-top: 8.0625rem;
        font-size: 11.25rem;
        letter-spacing: -0.5rem;
        color: #4a4a4a;
      }

      .free_places {
        grid-column: 6 / span 2;
        margin-top: 8.75rem;
        text-align: left;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1328px;
        }

        div {
          grid-template-columns: repeat(8, 96px);
          grid-gap: 0 16px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 1232px;
        }

        div {
          grid-template-columns: repeat(8, 88px);
          grid-gap: 0 16px;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        section {
          margin-top: 6.5625rem;
          width: 944px;
        }

        div {
          grid-column: 2 / span 10;
          grid-template-columns: repeat(10, 4rem);
          grid-gap: 0 1rem;
          padding-bottom: 3.875rem;
        }

        h2 {
          margin-top: 4.0625rem;
          font-size: 2rem;
          font-weight: 900;
          line-height: 2.5rem;
        }

        .big_counter {
          grid-column: 5 / span 2;
          margin-top: 5.875rem;
          font-size: 9.25rem;
          letter-spacing: -0.375rem;
        }

        .free_places {
          margin-top: 9.5625rem;
          grid-column: 7 / span 3;
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

        div {
          grid-column: 1 / span 6;
          grid-template-columns: repeat(6, 3rem);
          grid-gap: 0 0.5rem;
          padding-bottom: 0;
          border: none;
        }

        h2 {
          margin-top: -0.0625rem;
          padding-bottom: 0.0625rem;
          font-family: 'Roboto Slab', 'Georgia', serif;
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: normal;
          color: #000000;
          text-align: center;
        }

        h2, .big_counter, .free_places {
          grid-column: 2 / span 4;
        }

        .big_counter {
          margin-top: 3.5625rem;
          font-size: 6.25rem;
          letter-spacing: normal;
          color: #000000;
        }

        .free_places {
          margin-top: 1.6875rem;
          text-align: center;
        }
       }
    `}</style>
  </Fragment>

export default translate()(Counter)
