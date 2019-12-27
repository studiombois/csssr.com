import React from 'react'
import translate from '../utils/translate-wrapper'

function NoPage({ t }) {
  return (
    <section className="grid-container">
      <div className="font_subhead-regular text">{t('common:noPage')}</div>
      <style jsx>{`
        section {
          margin-right: auto;
          margin-left: auto;
          width: 1792px;
          align-items: center;
        }

        .text {
          padding-top: 16rem;
          margin-bottom: 6rem;
          grid-column: 4 / span 6;
          text-align: center;
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

        @media (max-width: 1279px) {
          section {
            padding-top: 6.1875rem;
            padding-bottom: 31.5rem;
            background-position: 50% calc(100% - 8.45rem);
            width: 944px;
          }

          .text {
            margin-bottom: 2.3125rem;
          }
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
          }
        }

        @media (max-width: 767px) {
          section {
            width: 20.5rem;
            padding-bottom: 6rem;
          }

          .text {
            padding-top: 6rem;
            grid-column: 1 / span 6;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default translate()(NoPage)
