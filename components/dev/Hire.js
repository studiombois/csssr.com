import React, { Fragment, PureComponent } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import ButtonLink from '../ui-kit/ButtonLink'
import { translate } from 'react-i18next'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 1 / span 12;
    grid-row: 3;
    z-index: -1;
    margin-top: -16rem;
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
      const featureBoundings = document.getElementById('feature1').getBoundingClientRect()
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
        <article id='competence' className='grid-container'>
          <h1 className='font_h1-slab'>
            {t('dev:hire.title')}cript
            <span className='font_subhead-slab'>{t('dev:hire.subTitle')}</span>
          </h1>

          <div
            id='hire-us-button'
            className={cn({
              'button-wrapper': true,
              'button-wrapper-invisible': !this.state.showScrollButton,
            })}
          >
            <ButtonLink href={'#hire-us'}>
              {t('dev:hire.buttonText')}
            </ButtonLink>
          </div>

          <blockquote>
            <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:hire.paragraph1') }} />
            <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('dev:hire.paragraph2') }} />
            <footer className='font_p16-regular' rel='author' dangerouslySetInnerHTML={{ __html: t('dev:hire.author') }} />
          </blockquote>

          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'dev', key: 'dog', alt: t('dev:imgAlt.dog') }}
          />

        </article><style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 12rem;
            width: 1792px;
            height: 60rem;
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
              grid-column: 3 / span 4;
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
              bottom: 4rem;
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

export default translate()(Hire)
