import React from 'react'
import { translate } from 'react-i18next'
import dynamic from 'next/dynamic'

const En = dynamic(() => import('./en'))
const Ru = dynamic(() => import('./ru'))

const PrivacyPolicy = ({ lng, t }) => (
  <article className='grid-container' id='privacy-policy'>
    <header>
      <h2
        className='font_h1-regular'
        dangerouslySetInnerHTML={{ __html: t('common:privacyPolicy.title') }}
      />
      <p className='font_subhead-regular'>
        {t('common:privacyPolicy.date')}
      </p>
    </header>
    {lng !== 'ru' && <En />}

    {lng === 'ru' && <Ru />}<style jsx>{`
      #privacy-policy {
        margin-bottom: 31rem;
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
        background-color: white;
      }

      header {
        grid-column: 2 / span 3;
        padding-top: 13.5rem;
      }

      h2 {
        display: inline-block;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        #privacy-policy {
          width: 1328px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        #privacy-policy {
          width: 1232px;
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        #privacy-policy {
          width: 944px;
        }

        @media (max-width: 1023px) {
          #privacy-policy {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        #privacy-policy {
          margin-bottom: 13.5rem;
          width: 20.5rem;
        }

        header {
          grid-column: 1 / span 6;
          padding-top: 5.5rem;
        }

        p {
          margin-top: 0.125rem;
        }
      }
    `}</style>
  </article>
)

export default translate()(PrivacyPolicy)
