import React, { Fragment } from 'react'
import Link from 'next/link'
import translate from '../../utils/translate-wrapper'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  @media (max-width: 767px) {
    img {
      width: auto;
    }
  }

  @media (min-width: 768px) {
    picture {
      display: block;
    }
    img {
      height: auto;
      display: block;
    }
  }
`

const Feature1 = ({ t, image }) =>
  <Fragment>
    <section className='grid-container' id='feature1'>
      <h2 id='services' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('dev:service.title') }} />

      <p className='font_p24-strong'>
        <span dangerouslySetInnerHTML={{ __html: t('dev:service.text') }} className='description' />
      </p>
      <div className='picture-wrapper'>
        <PictureForAllResolutions
          className={picture.className}
          image={image}
        />

        <p className='font_feature_1'>
          <Link href={t('dev:service.mvpLink')}>
            <a className='mvp-link'>
              {t('dev:service.mvp')}
            </a>
          </Link>
        </p>
        <p className='font_feature_2' dangerouslySetInnerHTML={{ __html: t('dev:service.app') }} />
        <p className='font_feature_3' dangerouslySetInnerHTML={{ __html: t('dev:service.stack') }} />
      </div>
    </section>
    <style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding-top: 5rem;
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

      .description {
        position: relative;
        z-index: 5;
      }

      .picture-wrapper {
        position: relative;
        grid-column: 2 / span 10;
        grid-row: 2;
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
        z-index: 1;
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

      .mvp-link {
        color: #000;
        cursor: pointer;
        transition: opacity 0.3s ease-out;
      }

      .mvp-link:hover {
        opacity: 0.6;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          padding-top: 9rem;
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
          padding-top: 9rem;
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
          max-width: 13.3125rem;

        }

        .font_feature_3 {
          width: 13rem;
          height: 7rem;
          top: 1.875rem;
          left: 31.875rem;
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
        p {
          grid-column: 1 / span 6;
        }

        h2 {
          margin-bottom: 1.1875rem;
        }

        .picture-wrapper {
          grid-column: 1 / span 6;
          grid-row: 3;
          margin-top: 1.875rem;
          height: 43.4375rem;
        }

        .font_feature_1 {
          top: 8.75rem;
          left: 5.9375rem;
        }

        .font_feature_2 {
          top: 17.75rem;
          left: 6.375rem;
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
    <style jsx>{`
      :global(.ie11) h2 {
        -ms-grid-column: 9;
        -ms-grid-column-span: 7;
        -ms-grid-row: 1;
      }

      :global(.ie11) p {
        -ms-grid-column: 5;
        -ms-grid-column-span: 7;
        -ms-grid-row: 2;
      }

      :global(.ie11) .picture-wrapper {
        -ms-grid-column: 3;
        -ms-grid-column-span: 19;
        -ms-grid-row: 2;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        :global(.ie11) h2 {
          -ms-grid-column: 7;
          -ms-grid-column-span: 11;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
       :global(.ie11) h2 {
          -ms-grid-column: 7;
          -ms-grid-column-span: 11;
        }
      }
    `}</style>
  </Fragment>

export default translate()(Feature1)
