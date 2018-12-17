import React, { Fragment, PureComponent } from 'react'
// import css from 'styled-jsx/css'
import cn from 'classnames'
import ButtonLink from '../ui-kit/ButtonLink'
import { translate } from 'react-i18next'
// import PictureForAllResolutions from '../PictureForAllResolutions'

// const picture = css.resolve`
//   picture {
//     grid-column: 1 / span 12;
//     margin-top: 1rem;
//     margin-left: -4rem;
//     height: 570px;
//     width: 1920px;
//   }
//
//   @media (min-width: 1360px) and (max-width: 1919px) {
//     picture {
//       margin-left: -1rem;
//       width: 1360px;
//       height: 458px;
//     }
//   }
//
//   @media (min-width: 1280px) and (max-width: 1359px) {
//     picture {
//       margin-left: -1.5rem;
//       width: 1280px;
//       height: 458px;
//     }
//   }
//
//   @media (min-width: 768px) and (max-width: 1279px) {
//     picture {
//       margin-left: -2.5rem;
//       width: 1024px;
//       height: 390px;
//     }
//
//     @media (max-width: 1023px) {
//       picture {
//         width: 64rem;
//         height: 24.375rem;
//       }
//     }
//   }
//
//   @media (max-width: 767px) {
//     picture {
//       grid-column: 1 / span 6;
//       margin-top: 1.5rem;
//       margin-left: -1rem;
//       width: 22.5rem;
//       height: 10.5rem;
//     }
//   }
// `

class Hire extends PureComponent {
  state = {
    showScrollButton: false,
  }

  rafId = null

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }

    this.rafId = requestAnimationFrame(() => {
      const bottomPadding = 250
      const featureBoundings = document.getElementById('budget').getBoundingClientRect()
      const formBoundings = document.getElementById('hire-us').getBoundingClientRect()
      const formOffsetTop = formBoundings.top - formBoundings.height - bottomPadding

      if (featureBoundings.top >= 450 || formOffsetTop <= 0) {
        this.setState({
          showScrollButton: false,
        })
      } else if (formOffsetTop && !this.state.showScrollButton) {
        this.setState({
          showScrollButton: true,
        })
      }
    })
  }

  render() {
    const { t } = this.props

    return (
      <Fragment>
        <article className='grid-container'>
          <h1 className='font_h1-slab'>
            {t('sborka:hire.title')}
          </h1>

          <span
            className='font_subhead-regular'
            dangerouslySetInnerHTML={{ __html: t('sborka:hire.subTitle') }}
          />

          <div
            id='hire-us-button'
            className={cn({
              'button-wrapper': true,
              'button-wrapper-invisible': !this.state.showScrollButton,
            })}
          >
            <ButtonLink href={'#hire-us'}>
              {t('sborka:hire.buttonText')}
            </ButtonLink>
          </div>

          {/* <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'sborka', key: 'sborka', alt: t('sborka:imgAlt.planets') }}
          /> */}

          {/*
            Сюда потом вставить изображения ракет

            <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'sborka', key: 'sborka', alt: t('sborka:imgAlt.hire') }}
          /> */}

        </article>
        <div className='image-wrapper'>
          <img
            src='/static/images/sborka/hire-planets-and-satellites.svg'
            alt={t('sborka:imgAlt.planets')}
          />
        </div><style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 12rem;
            width: 1792px;
          }

          h1 {
            grid-column: 4 / span 6;
            text-align: center;
          }

          span {
            grid-column: 2 / span 9;
            margin-top: 0.875rem;
            margin-bottom: 3rem;
            text-align: center;
          }

          img {
            margin-left: auto;
            margin-right: auto;
            display: block;
            height: 100%;
            width: 1920px;
          }

          .image-wrapper {
            margin-top: 1rem;
            height: 570px;
          }

          .image-wrapper {
            background-image: url(/static/images/sborka/hire-orbits.svg);
            background-size: 1920px 570px;
            background-position: 50%;
            background-repeat: repeat-x;
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

            span {
              margin-bottom: 0;
            }

            img {
              width: 1360px;
            }

            .image-wrapper {
              height: 456px;
              background-size: 1360px 456px;
            }

            .button-wrapper {
              width: 208px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              width: 1232px;
            }

            h1 {
              grid-column: 3 / span 8;
            }

            span {
              margin-bottom: 0;
            }

            img {
              width: 1280px;
            }

            .image-wrapper {
              height: 456px;
              background-size: 1280px 456px;
            }

            .button-wrapper {
              width: 192px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            article {
              padding-top: 10rem;
              width: 944px;
            }

            span {
              margin-top: 1.625rem;
              margin-bottom: 0.5rem;
            }

            img {
              width: 1024px;
            }

            .image-wrapper {
              height: 392px;
              background-size: 1024px 392px;
            }

            .button-wrapper {
              width: 192px;
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
              }

              img {
                width: 64rem;
              }

              .image-wrapper {
                height: 24.5rem;
                background-size: 64rem 24.5rem;
              }

              .button-wrapper {
                width: 12rem;
              }

              :global(#main) {
                background-size: 80rem 30rem;
              }
            }
          }

          @media (max-width: 767px) {
            article {
              padding-top: 5rem;
              width: 20.5rem;
            }

            h1 {
              grid-column: 1 / span 6;
              margin-bottom: 0;
              text-align: center;
            }

            span {
              grid-column: 1 / span 6;
              margin-top: 0.125rem;
              margin-bottom: 0;
              padding-top: 0;
            }

            img {
              width: 22.5rem;
            }

            .image-wrapper {
              margin-top: 1.5rem;
              height: 10.5rem;
              background-size: 22.5rem 10.5rem;
            }

            .button-wrapper {
              position: fixed;
              bottom: 2rem;
              width: 13.5rem;
              right: calc(50% - 13.5rem / 2);
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default translate()(Hire)
