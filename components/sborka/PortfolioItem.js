import React, { Fragment } from 'react'
import PictureForAllResolutions from '../PictureForAllResolutions'
import translate from '../../utils/translate-wrapper'
import css from 'styled-jsx/css'

const picture = css.resolve`
  picture {
    display: block;
    width: 100%;
    height: 1128px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      height: 832px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 776px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      height: 596px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 37.25rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      height: 31rem;
    }
  }
`

const PortfolioItem = ({ name, href, index, t }) =>
  <Fragment>
    <section>
      <PictureForAllResolutions
        className={picture.className}
        image={{ namespace: 'sborka/portfolio', key: name, alt: name }}
      />
    </section>

    <div>
      <h3
        className='font_h2-regular'
        dangerouslySetInnerHTML={{ __html: t(`sborka:portfolio.portfolioProjects.${name}.title`) }}
      />
      <p
        className='font_p16-regular'
        dangerouslySetInnerHTML={{ __html: t(`sborka:portfolio.portfolioProjects.${name}.text`) }}
      />
      <a
        className='font_link-list_16'
        href={href}
        target='_blank'
        dangerouslySetInnerHTML={{ __html: t('sborka:portfolio.linkText') }}
      />
    </div>
    <style jsx>{`
      section {
        grid-column: 1 / span 12;
      }

      div {
        margin-top: -8.4375rem;
        grid-column: 2 / span 5;
        grid-row: 2;
      }

      p {
        margin-top: 0.5rem;
      }

      a {
        margin-top: 1rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        div {
          margin-top: -5.4375rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        div {
          grid-column: 2 / span 4;
          margin-top: -4.4375rem;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        div {
          grid-column: 2 / span 4;
          margin-top: -1.75rem;
        }

        p {
          margin-top: 1rem;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }

        a {
          margin-top: 0.8125rem;
        }
      }

      @media (max-width: 767px) {
        div {
          margin-top: 0.5625rem;
        }

        p {
          margin-top: 0.9375rem;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }

        a {
          margin-top: 0.8125rem;
        }
      }
    `}</style>
    <style jsx>{`
      @media (max-width: 767px) {
        section {
          grid-column: ${index * 4 + 1} / span 3;
        }

        div {
          grid-column: ${index * 4 + 1} / span 3;
        }
      }
    `}</style>
    {picture.styles}
  </Fragment>

export default translate()(PortfolioItem)
