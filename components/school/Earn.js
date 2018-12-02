import React, { Fragment, PureComponent } from 'react'
import css from 'styled-jsx/css'
import { translate } from 'react-i18next'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 7 / span 6;
    grid-row: 1;
    z-index: -1;
    margin-top: -4rem;
    height: 640px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
      height: 480px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 30rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: 0;
      height: 10.5rem;
    }
  }
`

class Earn extends PureComponent {
  state = {
    showScrollButton: false,
  }

  render() {
    const { t } = this.props

    return (
      <Fragment>
        <article id='competence' className='grid-container'>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'school', key: 'earn', alt: t('school:imgAlt.school') }}
          />
          <h1 className='font_h1-slab'>
            {t('school:school.title')}
            <span className='font_subhead-slab'>{t('school:school.subTitle')}</span>
          </h1>

        </article><style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 12rem;
            width: 1792px;
            height: 57rem;
          }

          blockquote {
            grid-column: 9 / span 3;
            grid-row: 1;
            margin-top: 3rem;
          }

          h1 {
            grid-column: 2 / span 7;
            grid-row: 1;
            margin-bottom: 5rem;
          }

          p {
            margin-bottom: 1rem;
          }

          .font_subhead-slab {
            padding-top: 4.299rem;
            line-height: 4rem;
          }

          span {
            padding-top: 1rem;
            display: block;
          }

          footer {
            font-weight: bold;
          }

          .button-wrapper {
            position: fixed;
            bottom: 4rem;
            right: 4rem;
            width: 272px;
            z-index: 8999;
            transform: translateY(0);
            transition: transform 0.3s ease-out;
          }

          .button-wrapper-invisible {
            transform: translateY(calc(100% + 15rem));
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              width: 1328px;
            }

            .button-wrapper {
              width: 208px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              width: 1232px;
            }

            .button-wrapper {
              width: 192px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            h1 {
              grid-column: 3 / span 5;
              margin-bottom: 3.8125rem;
            }

            article {
              padding-top: 10rem;
              width: 944px;
              height: 52rem;
            }

            span {
              padding-top: 1.6875rem;
            }

            blockquote {
              margin-top: 1.3125rem;
            }

            .button-wrapper {
              width: 144px;
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
              }

              .button-wrapper {
                width: 9rem;
              }
            }
          }

          @media (max-width: 767px) {
            article {
              padding-top: 5rem;
              width: 20.5rem;
              height: auto;
              min-height: 37rem;
            }

            h1 {
              grid-column: 1 / span 6;
              grid-row: 1;
              margin-bottom: 1.375rem;
              text-align: center;
            }

            span {
              padding-top: 0.6875rem;
            }

            blockquote {
              grid-column: 2 / span 5;
              grid-row: 3;
              margin-top: 1.9375rem;
            }

            p {
              margin-bottom: 0.5rem;
            }

            .button-wrapper {
              position: fixed;
              bottom: 2rem;
              width: 13.5rem;
              right: calc(50% - 13.5rem / 2);
            }
          }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Earn)
