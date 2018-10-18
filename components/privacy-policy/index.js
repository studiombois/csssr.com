import React from 'react'
import { translate } from 'react-i18next'
import dynamic from 'next/dynamic'

const En = dynamic(() => import('./en'))
const Ru = dynamic(() => import('./ru'))

const PrivacyPolicy = ({ lng, t }) => (
  <article className='grid-container' id='privacy-policy'>
    <header>
      <h1 className='font_h1-regular'>
        {t('common:privacyPolicy.title')}
      </h1>
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
        padding-top: 13.4375rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        #privacy-policy {
          width: 1328px;
        }
      }

      @media (max-width: 1359px) {
        #privacy-policy {
          width: 1232px;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        #privacy-policy {
          width: 944px;
        }
      }
    `}</style>
  </article>
)

export default translate()(PrivacyPolicy)
