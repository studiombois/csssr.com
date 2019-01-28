import React, { Fragment, PureComponent } from 'react'
import css from 'styled-jsx/css'
import translate from '../../utils/translate-wrapper'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 1 / span 12;
    grid-row: 3;
    z-index: 0;
    margin-top: -9rem;
    margin-left: -4rem;
    height: 640px;
    width: 1920px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      margin-left: -1rem;
      width: 1360px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      margin-top: -14rem;
      margin-left: -1.5rem;
      width: 1280px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -4.5rem;
      margin-left: -2.5rem;
      width: 1024px;
      height: 480px;
    }

    @media (max-width: 1023px) {
      picture {
        width: 64rem;
        height: 30rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: 0;
      margin-left: -1rem;
      width: 22.5rem;
      height: 10.5rem;
    }
  }
`

class Hire extends PureComponent {
  render() {
    const { t } = this.props

    return (
      <Fragment>
        <article id='competence' className='grid-container'>
          <h1 className='font_h1-slab'>
            {t('dev:hire.title')}
            <span className='font_subhead-slab'>{t('dev:hire.subTitle')}</span>
          </h1>

          <blockquote>
            <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:hire.paragraph1') }} />
            <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:hire.paragraph2') }} />
            <footer className='font_p16-regular' rel='author' dangerouslySetInnerHTML={{ __html: t('dev:hire.author') }} />
          </blockquote>

          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'dev', key: 'dev', alt: t('dev:imgAlt.dev') }}
          />

        </article><style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            margin-top: 16rem;
            width: 1792px;
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
            padding-top: 1rem;
            display: block;
          }

          footer {
            font-weight: bold;
          }

          :global(#main) {
            background-image: url(/static/images/dev/1920/dev_line@1x.png);
            background-size: 1920px 640px;
            background-position: 50% 24rem;
            background-repeat: repeat-x;
          }

          :global(html.webp #main) {
            background-image: url(/static/images/dev/1920/dev_line@1x.webp);
          }

          @media
          only screen and (-webkit-min-device-pixel-ratio: 2),
          only screen and (min-resolution: 192dpi),
          only screen and (min-resolution: 2dppx) {
            :global(#main) {
              background-image: url(/static/images/dev/1920/dev_line@2x.png);
            }

            :global(html.webp #main) {
              background-image: url(/static/images/dev/1920/dev_line@2x.webp);
            }
          }

          @media
          only screen and (-webkit-min-device-pixel-ratio: 3),
          only screen and (min-resolution: 288dpi),
          only screen and (min-resolution: 3dppx) {
            :global(#main) {
              background-image: url(/static/images/dev/1920/dev_line@3x.png);
            }

            :global(html.webp #main) {
              background-image: url(/static/images/dev/1920/dev_line@3x.webp);
            }
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              margin-top: 12rem;
              width: 1328px;
            }

            :global(#main) {
              background-image: url(/static/images/dev/1360/dev_line@1x.png);
              background-size: 1360px 640px;
              background-position: 50% 20rem;
            }

            :global(html.webp #main) {
              background-image: url(/static/images/dev/1360/dev_line@1x.webp);
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 2),
            only screen and (min-resolution: 192dpi),
            only screen and (min-resolution: 2dppx) {
              :global(#main) {
                background-image: url(/static/images/dev/1360/dev_line@2x.png);
              }

              :global(html.webp #main) {
                background-image: url(/static/images/dev/1360/dev_line@2x.webp);
              }
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 3),
            only screen and (min-resolution: 288dpi),
            only screen and (min-resolution: 3dppx) {
              :global(#main) {
                background-image: url(/static/images/dev/1360/dev_line@3x.png);
              }

              :global(html.webp #main) {
                background-image: url(/static/images/dev/1360/dev_line@3x.webp);
              }
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              margin-top: 12rem;
              width: 1232px;
            }

            :global(#main) {
              background-image: url(/static/images/dev/1280/dev_line@1x.png);
              background-size: 1280px 640px;
              background-position: 50% 20rem;
            }

            :global(html.webp #main) {
              background-image: url(/static/images/dev/1280/dev_line@1x.webp);
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 2),
            only screen and (min-resolution: 192dpi),
            only screen and (min-resolution: 2dppx) {
              :global(#main) {
                background-image: url(/static/images/dev/1280/dev_line@2x.png);
              }

              :global(html.webp #main) {
                background-image: url(/static/images/dev/1280/dev_line@2x.webp);
              }
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 3),
            only screen and (min-resolution: 288dpi),
            only screen and (min-resolution: 3dppx) {
              :global(#main) {
                background-image: url(/static/images/dev/1280/dev_line@3x.png);
              }

              :global(html.webp #main) {
                background-image: url(/static/images/dev/1280/dev_line@3x.webp);
              }
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            h1 {
              grid-column: 3 / span 4;
              margin-bottom: 3.8125rem;
            }

            article {
              margin-top: 10rem;
              width: 944px;
            }

            span {
              padding-top: 1.6875rem;
            }

            blockquote {
              margin-top: 1.3125rem;
            }

            :global(#main) {
              background-image: url(/static/images/dev/1024/dev_line@1x.png);
              background-size: 1024px 480px;
              background-position: 50% 22rem;
            }

            :global(html.webp #main) {
              background-image: url(/static/images/dev/1024/dev_line@1x.webp);
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 2),
            only screen and (min-resolution: 192dpi),
            only screen and (min-resolution: 2dppx) {
              :global(#main) {
                background-image: url(/static/images/dev/1024/dev_line@2x.png);
              }

              :global(html.webp #main) {
                background-image: url(/static/images/dev/1024/dev_line@2x.webp);
              }
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 3),
            only screen and (min-resolution: 288dpi),
            only screen and (min-resolution: 3dppx) {
              :global(#main) {
                background-image: url(/static/images/dev/1024/dev_line@3x.png);
              }

              :global(html.webp #main) {
                background-image: url(/static/images/dev/1024/dev_line@3x.webp);
              }
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
              }

              :global(#main) {
                background-size: 80rem 30rem;
              }
            }
          }

          @media (max-width: 767px) {
            article {
              margin-top: 5rem;
              width: 20.5rem;
              height: auto;
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

            :global(#main) {
              background-image: url(/static/images/dev/360/dev_line@1x.png);
              background-size: 22.5rem 10.5rem;
              background-position: 50% 18rem;
            }

            :global(html.webp #main) {
              background-image: url(/static/images/dev/360/dev_line@1x.webp);
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 2),
            only screen and (min-resolution: 192dpi),
            only screen and (min-resolution: 2dppx) {
              :global(#main) {
                background-image: url(/static/images/dev/360/dev_line@2x.png);
              }

              :global(html.webp #main) {
                background-image: url(/static/images/dev/360/dev_line@2x.webp);
              }
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 3),
            only screen and (min-resolution: 288dpi),
            only screen and (min-resolution: 3dppx) {
              :global(#main) {
                background-image: url(/static/images/dev/360/dev_line@3x.png);
              }

              :global(html.webp #main) {
                background-image: url(/static/images/dev/360/dev_line@3x.webp);
              }
            }
          }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Hire)
