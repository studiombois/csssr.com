import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import css from 'styled-jsx/css'
import Picture from '../Picture'
import ButtonLink from '../ui-kit/ButtonLink'

const picture = css.resolve`
  picture {
    grid-column: 4 / span 6;
    text-align: center;
    grid-row: 2;
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
    }

    picture img {
      max-width: 220px
    }
  }
`

const button = css.resolve`
  @media (min-width: 768px) and (max-width: 1279px) {
    a.button {
      height: 3rem;
    }
  }
`

class HireUs extends PureComponent {
  static propTypes = {
    imageAlt: string,
    buttonText: string,
    link: string,
  }

  render() {
    const { imageAlt, buttonText, link } = this.props
    return (
      <Fragment>
        <section id='hire-us' className='grid-container'>
          <div>
            <ButtonLink className={button.className} href={link}>{buttonText}</ButtonLink>
          </div>
          <Picture
            className={picture.className}
            image={{ namespace: 'dev', key: 'letter', alt: imageAlt }}
          />
        </section><style jsx>{`
          section {
            margin-top: 5rem;
            margin-bottom: 6.5rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
          }

          div {
            margin-bottom: 1.5rem;
            padding-left: 5px;
            padding-right: 5px;
            grid-column: 6 / span 2;
            grid-row: 1;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            section {
              margin-top: 4.7rem;
              margin-bottom: 11rem;
              width: 1328px;
            }

            div {
              margin-bottom: 3.1rem;
              padding-left: 5.25rem;
              padding-right: 5.25rem;
              grid-column: 5 / span 4;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            section {
              margin-top: 5.2rem;
              margin-bottom: 11rem;
              width: 1232px;
            }

            div {
              margin-bottom: 4.45rem;
              padding-right: 4.2rem;
              padding-left: 4.2rem;
              grid-column: 5 / span 4;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            section {
              margin-top: 7.5rem;
              margin-bottom: 9rem;
              width: 944px;
            }

            div {
              margin-bottom: 8.8rem;
              grid-column: 5 / span 4;
              padding-left: 0;
              padding-right: 0;
            }
          }

          @media (max-width: 767px) {
            section {
              margin-bottom: 2.6rem;
              width: 20.5rem;
            }

            div {
              margin-bottom: 2.5rem;
              grid-column: 2 / span 4;
              padding-left: 0;
              padding-right: 0;
            }
          }
        `}</style>
        {picture.styles}
        {button.styles}
      </Fragment>
    )
  }
}

export default HireUs
