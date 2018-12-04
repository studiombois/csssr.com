import React, { Fragment } from 'react'
import { translate } from 'react-i18next'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    height: 100%;
  }
`

const Feature1 = ({ t, image }) =>
  <Fragment>
    <section className='grid-container' id='feature1'>
      <h2 id='services' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('dev:service.title') }} />

      <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: t('dev:service.text') }} />
      <div className='picture-wrapper'>
        <PictureForAllResolutions
          className={picture.className}
          image={image}
        />

        <p className='font_feature_1'>
          MVP
        </p>
        <p className='font_feature_2' dangerouslySetInnerHTML={{ __html: t('dev:service.app') }} />
        <p className='font_feature_3' dangerouslySetInnerHTML={{ __html: t('dev:service.stack') }} />
      </div>

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

      .picture-wrapper {
        position: relative;
        grid-column: 2 / span 10;
        grid-row: 2;
        z-index: -1;
        margin-top: 5.5rem;
        height: 768px;
      }

      .font_feature_1,
      .font_feature_2,
      .font_feature_3 {
        position: absolute;
      }

      .font_feature_1 {
        top: 30.875rem;
        left: 20.5rem;
      }

      .font_feature_2 {
        width: 21rem;
        height: 15rem;
        top: 21.375rem;
        left: 37.5rem;
      }

      .font_feature_3 {
        width: 18rem;
        height: 10rem;
        top: 3.875rem;
        left: 58.875rem;
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
          left: 9.1875rem;
        }

        .font_feature_2 {
          left: 25.1875rem;
        }

        .font_feature_3 {
          left: 45.5rem;
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
          left: 7rem;
        }

        .font_feature_2 {
          left: 23.875rem;
        }

        .font_feature_3 {
          left: 42.5rem;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        section {
          padding-top: 6.5rem;
          width: 944px;
        }

        h2 {
          margin-bottom: 2.5rem;
        }

        .picture-wrapper {
          margin-top: 5rem;
          height: 512px;
        }

        .font_feature_1 {
          top: 20.5rem;
          left: 6.5rem;
        }

        .font_feature_2 {
          top: 12.875rem;
          left: 18.875rem;
          width: 16rem;
          height: 17rem;

        }

        .font_feature_3 {
          width: 13rem;
          height: 7rem;
          top: 1.875rem;
          left: 31.875rem;
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

          .picture-wrapper {
            height: 32rem;
          }
        }
      }

      @media (max-width: 767px) {
        section {
          padding-top: 3rem;
          width: 20.5rem;
        }

        h2,
        p,
        footer {
          grid-column: 1 / span 6;
        }

        h2 {
          margin-bottom: 1.1875rem;
        }

        footer {
          margin-top: 3.0625rem;
          grid-row: 4;
        }

        footer h2,
        footer p {
          grid-column: 2 / span 5;
        }

        // Заголовок h2 в футере в мобильной версии меняет свои стили с
        // font_h2-regular на font_h3-regular, что избежать использование
        // JS Media Queries я просто продублирую стили font_h3-regular
        footer h2 {
          margin-bottom: 0.9375rem;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }

        .picture-wrapper {
          grid-column: 1 / span 6;
          grid-row: 3;
          margin-top: 1.875rem;
          height: 43.4375rem;
        }

        .font_feature_1 {
          top: 8.75rem;
          left: 5.75rem;
        }

        .font_feature_2 {
          top: 17.75rem;
          left: 7.375rem;
          width: 13.75rem;
        }

        .font_feature_3 {
          width: 11.4375rem;
          height: 7rem;
          top: 32rem;
          left: 0;
        }
      }
    `}</style>
    {picture.styles}
  </Fragment>

export default translate()(Feature1)
