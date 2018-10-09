import React, { Fragment } from 'react'
import ButtonLink from '../ui-kit/ButtonLink'
import { translate } from 'react-i18next'

const Hire = ({ t }) =>
  <Fragment>
    <article className='grid-container'>
      <h1 className='font_h1-slab'>
        {t('dev:hireTitle')}

        <span className='font_subhead-slab'>{t('dev:hireSubTitle')}</span>
      </h1>

      {/* TODO:
          Next js похоже не очень умеет в nested стили, хотя библиотека внутри неё
          может, — https://www.npmjs.com/package/styled-jsx#external-styles

          Попробовал применить, но не получилось, тсили всё равно не передались, а у
          всех элементов начал дублироваться хеш в названии класса. Пока оставлю так.

          Я хотел избавится от лишних оберток, так что можно оставить пока так,
          ну или делать эти обертки.
      */}

      <div className='button-wrapper'>
        <ButtonLink href={'#hire-us'}>
          HIRE&nbsp;US
        </ButtonLink>
      </div>

      <blockquote>
        <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:hireParagraph1') }} />
        <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:hireParagraph2') }} />
        <footer className='font_p16-regular' rel='author' dangerouslySetInnerHTML={{ __html: t('dev:hireAuthor') }} />
      </blockquote>
    </article><style jsx>{`
      article {
        margin-left: auto;
        margin-right: auto;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-top: 12rem;
        width: 1888px;
        height: 60rem;
        background-image: url('../../static/images/dog_1920.jpg');
        background-size: auto 640px;
        background-position: 50% 20rem;
        background-repeat: no-repeat;
      }

      blockquote {
        grid-column: 9 / span 3;
        grid-row: 1;
        margin-top: 3rem;
      }

      h1 {
        grid-column: 3 / span 6;
        grid-row: 1;
        margin-bottom: 3rem;
      }

      p {
        margin-bottom: 1rem;
      }

      span {
        padding-top: 5rem;
        display: block;
      }

      footer {
        font-weight: bold;
      }

      .button-wrapper {
        grid-column: 3 / span 2;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          width: 1344px;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          background-image: url('../../static/images/dog_1360.jpg');
        }
      }

      @media (max-width: 1359px) {
        article {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          width: 1248px;
          background-image: url('../../static/images/dog_1280.jpg');
        }
      }

      @media only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
        article {
          background-image: url('../../static/images/dog_1920_retina.jpg');
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          article {
            background-image: url('../../static/images/dog_1360_retina.jpg');
          }
        }

        @media (max-width: 1359px) {
          article {
            background-image: url('../../static/images/dog_1280_retina.jpg');
          }
        }
      }
    `}</style>
  </Fragment>

export default translate()(Hire)
