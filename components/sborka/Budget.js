import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import translate from '../../utils/translate-wrapper'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    margin-top: 1.4375rem;
    grid-column: 3 / span 9;
    height: 260px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      margin-top: 1.5rem;
      height: 192px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 180px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 2rem;
      height: 138px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 8.625rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      margin-top: 2rem;
      grid-column: 2 / span 5;
      height: 3.375rem;
    }
  }
`

const Budget = ({ t, lng }) =>
  <Fragment>
    <article id='budget' className='grid-container'>
      <h2 dangerouslySetInnerHTML={{ __html: t('sborka:budget.title') }} />

      <PictureForAllResolutions
        className={picture.className}
        image={{ namespace: 'sborka', key: lng === 'en' ? 'pricesEn' : 'prices', alt: t('sborka:imgAlt.budget') }}
      />

      <span
        className={lng === 'en' ? 'is_hidden' : ''}
        dangerouslySetInnerHTML={{ __html: t('sborka:budget.postPricetext') }}
      />
      <p className='font_subhead-regular'>
        {t('sborka:budget.articleText')} <a href={lng === 'ru' ? '/ru' : '/en'} dangerouslySetInnerHTML={{ __html: t('sborka:budget.articleLinkText') }} />
      </p>

    </article><style jsx>{`
      article {
        margin-top: 8.8125rem;
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
      }

      h2 {
        grid-column: 2 / span 5;
      }

      h2, span {
        font-family: 'Roboto Slab', 'Georgia', serif;
        font-size: 3rem;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 4rem;
        letter-spacing: normal;
        color: #000000;
      }

      span {
        margin-top: 0.8125rem;
        grid-column: 10 / span 3;
      }

      p {
        margin-top: -1.0625rem;
        grid-column: 4 / span 7;
      }

      p a {
        color: #0076ff;
        cursor: pointer;
        text-decoration: underline;
      }

      span.is_hidden {
        color: transparent;
        user-select: none;
        pointer-events: none;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          margin-top: 11.9375rem;
          width: 1328px;
        }

        span {
          margin-top: 1rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article {
          margin-top: 8.9375rem;
          width: 1232px;
        }

        h2 {
          grid-column: 2 / span 6;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        article {
          margin-top: 6.5rem;
          width: 944px;
        }

        h2, span {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        span {
          margin-top: 0.875rem;
        }

        p {
          margin-top: 2.125rem;
        }

        @media (max-width: 1023px) {
          article {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        article {
          margin-top: 7rem;
          width: 20.5rem;
        }

        h2, span {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        h2 {
          grid-column: 1 / span 3;
        }

        p {
          margin-top: 2.125rem;
          grid-column: 1 / span 6;
        }

        span {
          grid-column: 5 / span 2;
          margin-top: 0.625rem;
          letter-spacing: -0.0625rem;
        }

        span.is_hidden {
          display: none;
        }
      }
    `}</style>
    {picture.styles}
  </Fragment>

export default translate()(Budget)
