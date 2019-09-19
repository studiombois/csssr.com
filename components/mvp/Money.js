import React, { Fragment, PureComponent } from 'react'
import translate from '../../utils/translate-wrapper'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    margin-top: -3.5rem;
    grid-column: 7 / span 5;
    grid-row: 2;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      margin-top: -3.8125rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      margin-top: -0.8125rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -2.8125rem;
      grid-column: 8 / span 5;
    }
  }

  @media (max-width: 767px) {
    picture {
      margin-top: -3.375rem;
      grid-column: 2 / span 4;
      grid-row: 1;
    }
  }
`

class Money extends PureComponent {
  render() {
    const { t } = this.props

    return (
      <Fragment>
        <article className='grid-container'>
          <h2>{t('mvp:money.title')}</h2>
          <p>{t('mvp:money.text')}</p>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'mvp', key: 'money', alt: t('mvp:money.imageAlt') }}
          />
        </article><style jsx>{`
          article {
            margin-top: 5rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
          }

          h2 {
            grid-column: 2 / span 11;
            grid-row: 1;
            margin-bottom: 1.5rem;
            font-size: 3rem;
            font-family: 'Roboto Slab', serif;
            font-weight: normal;
          }

          p {
            position: relative;
            z-index: 2;
            grid-column: 2 / span 6;
            grid-row: 2;
            font-family: 'Roboto', 'Arial' sans-serif;
            font-size: 1.5rem;
            font-weight: normal;
            line-height: 2.5625rem;
            color: #4a4a4a;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              margin-top: 5.125rem;
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              margin-top: 5.1875rem;
              width: 1232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            article {
              margin-top: 2.875rem;
              width: 944px;
            }

            h2 {
              margin-bottom: 2rem;
              font-size: 1.5rem;
            }

            p {
              font-size: 1rem;
              line-height: 1.5rem
            }
          }

          @media (max-width: 767px) {
            article {
              margin-top: 5.8125rem;
              width: 20.5rem;
            }

            h2 {
              margin-top: 1rem;
              margin-bottom: 0.875rem;
              padding-left: 0;
              grid-column: 1 / span 6;
              grid-row: 2;
              text-align: center;
              font-size: 1.5rem;
            }

            p {
              padding-right: 0.5rem;
              padding-left: 0.5rem;
              grid-column: 1 / span 6;
              grid-row: 3;
              font-size: 1rem;
              text-align: center;
              line-height: 1.5rem;
            }
          }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Money)
