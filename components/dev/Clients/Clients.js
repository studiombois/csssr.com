import React, { Fragment } from 'react'
import ClientsSlider from './ClientsSlider'
import ClientsSliderMobile from './ClientsSliderMobile'
import translate from '../../../utils/translate-wrapper'
import { bool } from 'prop-types'

const Clients = ({ t, isMobile }) => (
  <Fragment>
    <section className="grid-container">
      <h2
        id="clients"
        className="font_h2-slab"
        dangerouslySetInnerHTML={{ __html: t('dev:clients.title') }}
      />
      <p
        className="font_subhead-regular"
        dangerouslySetInnerHTML={{ __html: t('dev:clients.text1') }}
      />
      {isMobile ? <ClientsSliderMobile /> : <ClientsSlider />}
    </section>
    <style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-top: 8.5rem;
        width: 1792px;
      }

      h2,
      .font_subhead-regular,
      .font_p24-strong {
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

      @media (min-width: 768px) and (max-width: 1279px) {
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
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        section {
          width: 59rem;
        }
      }

      @media (max-width: 767px) {
        section {
          padding-top: 6.0625rem;
          width: 20.5rem;
        }

        h2,
        .font_subhead-regular,
        .font_p24-strong {
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
    <style jsx>{`
      :global(.ie11) section {
        -ms-grid-rows: auto auto auto auto;
      }

      :global(.ie11) h2 {
        -ms-grid-column: 7;
        -ms-grid-column-span: 11;
      }

      :global(.ie11) .font_subhead-regular {
        -ms-grid-column: 3;
        -ms-grid-column-span: 19;
      }

      :global(.ie11) .font_p24-strong {
        -ms-grid-column: 3;
        -ms-grid-column-span: 19;
      }

      @media (min-width: 1024px) {
        :global(.ie11) h2 {
          -ms-grid-column: 5;
          -ms-grid-column-span: 15;
          -ms-grid-row: 1;
        }

        :global(.ie11) p {
          -ms-grid-row: 2;
        }

        :global(.ie11) .ul {
          -ms-grid-row: 3;
        }
      }
    `}</style>
  </Fragment>
)

Clients.propTypes = {
  isMobile: bool,
}

export default translate()(Clients)
