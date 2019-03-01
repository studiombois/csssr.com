import React, { Fragment } from 'react'
import ClientsSlider from './ClientsSlider'
import ClientsSliderMobile from './ClientsSliderMobile'
import translate from '../../../utils/translate-wrapper'
import { bool } from 'prop-types'

const Clients = ({ t, isMobile }) =>
  <Fragment>
    <section className='grid-container'>
      <h2 id='clients' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('dev:clients.title') }} />
      <p className='font_subhead-regular' dangerouslySetInnerHTML={{ __html: t('dev:clients.text1') }} />
      {isMobile
        ? <ClientsSliderMobile />
        : <ClientsSlider />
      }
      <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: t('dev:clients.text2') }} />
    </section><style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-top: 8.5rem;
        width: 1792px;
      }

      h2,
      .font_subhead-regular,
      .font_p24-strong  {
        text-align: center;
      }

      h2 {
        grid-column: 4 / span 6;
      }

      .font_subhead-regular {
        grid-column: 2 / span 10;
        margin-top: 0.875rem;
        margin-bottom: 4.1875rem;
      }

      .font_p24-strong {
        grid-column: 2 / span 10;
        margin-top: 1.25rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1328px;
        }

        h2 {
          grid-column: 3 / span 8;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 1232px;
        }

        h2 {
          grid-column: 3 / span 8;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px)  {
        section {
          padding-top: 6rem;
          width: 944px;
        }

        .font_subhead-regular {
          margin-top: 0.625rem;
          margin-bottom: 2.1875rem;
        }

        .font_p24-strong {
          margin-top: 1.0625rem;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        section {
          padding-top: 6.0625rem;
          width: 20.5rem;
        }

        h2,
        .font_subhead-regular,
        .font_p24-strong  {
          grid-column: 1 / span 6;
        }

        .font_subhead-regular {
          margin-top: 0.625rem;
          margin-bottom: 0.3125rem;
        }

        .font_p24-strong {
          margin-top: 0.9375rem;
        }
      }
    `}</style>
  </Fragment>

Clients.propTypes = {
  isMobile: bool,
}

export default translate()(Clients)
