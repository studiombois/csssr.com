import React, { Fragment } from 'react'
import { translate } from 'react-i18next'
import css from 'styled-jsx/css'
import Picture from '../Picture'

const { className, styles } = css.resolve`
  picture {
    grid-column: 2 / span 10;
    grid-row: 2;
    z-index: -1;
    margin-top: 5.5rem;
    height: 768px;
  }

  @media (min-width: 368px) and (max-width: 1279px) {
    picture {
      margin-top: 5rem;
      height: 512px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 32rem;
      }
    }
  }
`

const Feature1 = ({ t, imagesKey }) =>
  <Fragment>
    <section className='grid-container' id='feature1'>
      <h2 id='competence-and-services' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('dev:service.title') }} />

      <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: t('dev:service.text') }} />

      <p className='font_feature_1'>
        MVP
      </p>
      <p className='font_feature_2' dangerouslySetInnerHTML={{ __html: t('dev:service.app') }} />
      <p className='font_feature_3' dangerouslySetInnerHTML={{ __html: t('dev:service.stack') }} />

      <Picture className={className} imagesKey={imagesKey}/>

      <footer className='grid-container'>
        <h2 className='font_h2-regular' dangerouslySetInnerHTML={{ __html: t('dev:openSource.title') }} />
        <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:openSource.text') }} />
      </footer>
    </section>
    <style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding-top: 9rem;
        width: 1792px;
      }

      h2 {
        grid-column: 5 / span 4;
        grid-row: 1;
        margin-bottom: 5.5rem;
        text-align: center;
      }

      p {
        grid-column: 3 / span 4;
        grid-row: 2;
      }

      footer {
        grid-row: 3;
        grid-column: 1 / span 12;
        margin-top: 7rem;
      }

      footer h2,
      footer p {
        grid-column: 7 / span 5;
      }

      footer h2 {
        text-align: left;
        margin-bottom: 0.5rem;
      }

      .font_feature_1,
      .font_feature_2,
      .font_feature_3 {
        position: absolute;
      }

      .font_feature_1 {
        top: 36.875rem;
        left: 11.5rem;
      }

      .font_feature_2 {
        width: 21rem;
        height: 15rem;
        top: 27.375rem;
        left: 28.5rem;
      }

      .font_feature_3 {
        width: 18rem;
        height: 10rem;
        top: 9.875rem;
        left: 47.875rem;
        text-align: right;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1328px;
        }

        h2 {
          grid-column: 4 / span 6;
        }

        .font_feature_1 {
          left: 2.1875rem;
        }

        .font_feature_2 {
          left: 19.1875rem;
        }

        .font_feature_3 {
          left: 38.5rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 1232px;
        }

        h2 {
          grid-column: 4 / span 6;
        }

        .font_feature_1 {
          left: 0.1875rem;
        }

        .font_feature_2 {
          left: 16.875rem;
        }

        .font_feature_3 {
          left: 36.5rem;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        section {
          padding-top: 6.5rem;
          width: 944px;
        }

        h2 {
          margin-bottom: 2.5rem;
        }

        .font_feature_1 {
          top: 26rem;
          left: -0.875rem;
        }

        .font_feature_2 {
          top: 17.875rem;
          left: 10.875rem;
          width: 16rem;
          height: 17rem;

        }

        .font_feature_3 {
          width: 13rem;
          height: 7rem;
          top: 7.875rem;
          left: 22.875rem;
        }

        footer {
          margin-top: 3.5rem;
        }

        footer h2 {
          margin-bottom: 0.8125rem;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
          }

          .font_feature_1 {
            left: 1.875rem;
          }

          .font_feature_2 {
            left: 12.875rem;
          }

          .font_feature_3 {
            left: 25.875rem;
          }
        }
      }
    `}</style>
    {styles}
  </Fragment>

export default translate()(Feature1)
