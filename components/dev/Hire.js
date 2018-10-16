import React, { Fragment } from 'react'
import ButtonLink from '../ui-kit/ButtonLink'
import { translate } from 'react-i18next'

const Hire = ({ t }) =>
  <Fragment>
    <article className='grid-container'>
      <h1 className='font_h1-slab'>
        {t('dev:hire.title')}

        <span className='font_subhead-slab'>{t('dev:hire.subTitle')}</span>
      </h1>

      <div className='button-wrapper'>
        <ButtonLink href={'#hire-us'}>
          {t('dev:hire.buttonText')}
        </ButtonLink>
      </div>

      <blockquote>
        <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:hire.paragraph1') }} />
        <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:hire.paragraph2') }} />
        <footer className='font_p16-regular' rel='author' dangerouslySetInnerHTML={{ __html: t('dev:hire.author') }} />
      </blockquote>
    </article><style jsx>{`
      article {
        margin-left: auto;
        margin-right: auto;
        padding-top: 12rem;
        width: 1792px;
        height: 60rem;
        background-image: url('../../static/images/1920/dog@1x.png');
        background-size: auto 40rem;
        background-position: 50% 20rem;
        background-repeat: no-repeat;
      }

      :global(html.webp) article {
        background-image: url('../../static/images/1920/dog@1x.webp');
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
          width: 1328px;
          background-image: url('../../static/images/1360/dog@1x.png');
        }

        :global(html.webp) article {
          background-image:  url('../../static/images/1360/dog@1x.webp');
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article {
          width: 1232px;
          background-image: url('../../static/images/1280/dog@1x.png');
        }

        :global(html.webp) article {
          background-image:  url('../../static/images/1280/dog@1x.webp');
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        h1 {
          grid-column: 3 / span 4;
          margin-bottom: 3.8125rem;
        }

        article {
          padding-top: 10rem;
          width: 944px;
          height: 52rem;
          background-image: url('../../static/images/1024/dog@1x.png');
          background-size: auto 32rem;
          background-position: 50% 20rem;
        }

        :global(html.webp) article {
          background-image:  url('../../static/images/1024/dog@1x.webp');
        }

        span {
          padding-top: 1.6875rem;
        }

        blockquote {
          margin-top: 1.3125rem;
        }

        @media (max-width: 1023px) {
          article {
            width: 59rem;
          }
        }
      }

      @media
      only screen and (-webkit-min-device-pixel-ratio: 1.5),
      only screen and (min-device-pixel-ratio: 1.5),
      only screen and (min-resolution: 144dpi) {
        article {
          background-image: url('../../static/images/1920/dog@2x.png');
        }

        :global(html.webp) article {
          background-image: url('../../static/images/1920/dog@2x.webp');
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          article {
            background-image: url('../../static/images/1360/dog@2x.png');
          }

          :global(html.webp) article {
            background-image: url('../../static/images/1360/dog@2x.webp');
          }
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          article {
            background-image: url('../../static/images/1280/dog@2x.png');
          }

          :global(html.webp) article {
            background-image: url('../../static/images/1280/dog@2x.webp');
          }
        }

        @media (min-width: 368px) and (max-width: 1279px) {
          article {
            background-image: url('../../static/images/1024/dog@2x.png');
          }

          :global(html.webp) article {
            background-image:  url('../../static/images/1024/dog@2x.webp');
          }
        }
      }
    `}</style>
  </Fragment>

export default translate()(Hire)
