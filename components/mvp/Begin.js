import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 27.8%;
    width: 139.6875rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      left: 21.4%;
      width: 120rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      left: 15%;
      width: 85rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    picture {
      left: 20.5%;
      width: 57.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    picture {
      left: 17.2%;
      width: 53rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      left: -4.5%;
      width: 22.5rem;
    }
  }
`

const planet = css.resolve`
  picture {
    margin-top: -4rem;
    width: 100%;
    display: block;
    height: auto;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      margin-top: -3.4rem;
      margin-left: 0.3rem;
      width: 5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      margin-top: -3.8rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-left: -0.4rem;
      margin-top: -4.2rem;
      width: 5.3125rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      display: none;
    }
  }
`

class Begin extends PureComponent {
  static propTypes = {
    imageAlt: string,
    title: string,
    text: string,
    rocketText: string,
  }

  render() {
    const { title, text, rocketText, imageAlt, children } = this.props

    return (
      <Fragment>
        <article id='what-is-mvp' className='grid-container'>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'mvp', key: 'geometry', alt: imageAlt.title }}
          />
          <h1>{title}</h1>
          <p className='begin-text'>{text}</p>
          <div className='planet'>
            <PictureForAllResolutions
              className={planet.className}
              image={{ namespace: 'mvp', key: 'yellow_planet', alt: imageAlt.title }}
            />
          </div>
          <div className='rocket'>
            {children}
          </div>
          <p className='rocket-text font_p16-regular'>{rocketText}</p>
        </article><style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
            max-width: 100%;
          }

          h1 {
            grid-column: 6 / span 3;
            grid-row: 1;
            padding-left: 2.6rem;
            padding-top: 11.5rem;
            font-size: 10.5rem;
            font-family: Roboto, sans-serif;
            font-weight: 900;
            margin-bottom: 12.6rem;
            text-align: center;
          }

          .begin-text {
            margin-bottom: 8.2rem;
            grid-column: 2 / span 6;
            grid-row: 2;
            font-family: Roboto, sans-serif;
            font-size: 1.5rem;
            font-weight: normal;
            line-height: 2.5rem;
          }

          .rocket-text {
            z-index: 2;
            margin-bottom: 9rem;
            grid-column: 8 / span 4;
            grid-row: 4;
          }

          .planet {
            grid-column: 1 / span 1;
            grid-row: 4;
          }

          .rocket {
            position: relative;
            grid-column: 4 / span 6;
            grid-row: 3 / span 2;
            height: 41.5rem;
            text-align: center;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              width: 1328px;
            }

            h1 {
              padding-left: 1rem;
            }

            .begin-text {
              margin-bottom: 7.3rem;
            }

            .rocket {
              height: 30.9rem;
            }

            .rocket-text {
              padding-right: 0.5rem;
              margin-bottom: 1rem;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              width: 1232px;
            }

            h1 {
              grid-column: 5 / span 5;
              margin-bottom: 13.1rem;
              padding-left: 0.6rem;
            }

            .begin-text {
              margin-bottom: 7.3rem;
            }

            .rocket {
              height: 29rem;
            }

            .rocket-text {
              padding-right: 0.5rem;
              margin-bottom: -2.3rem;
              grid-column: 8 / span 4;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            article {
              width: 944px;
            }

            h1 {
              padding-top: 5.5rem;
              margin-bottom: 9rem;
              grid-column: 5 / span 5;
              font-size: 7.5rem;
            }

            .begin-text {
              grid-column: 2 / span 7;
              margin-bottom: 4rem;
              font-size: 1rem;
              line-height: 1.5rem;
            }

            .rocket {
              height: 22rem;
            }

            .rocket-text {
              padding-right: 0.5rem;
              margin-bottom: -6.2rem;
              font-size: 0.88rem;
              line-height: 1.5rem;
              grid-column: 8 / span 4;
            }
          }

          @media (max-width: 767px) {
            article {
              width: 20.5rem;
            }

            h1 {
              margin-bottom: 6.6rem;
              padding-top: 5.6rem;
              padding-left: 0;
              grid-column: 2 / span 4;
              font-size: 4rem;
            }

            .begin-text {
              grid-column: 1 / span 6;
              margin-bottom: 6rem;
              font-size: 1rem;
              line-height: 1.5rem;
              text-align: center;
            }

            .planet {
              display: none;
            }

            .rocket {
              margin-bottom: 1.1rem;
              grid-column: 2 / span 4;
              grid-row: 3;
              height: 10rem;
            }

            .rocket-text {
              margin-bottom: 0;
              grid-column: 1 / span 6;
              font-size: 0.87rem;
              line-height: 1.5rem;
              text-align: center;
            }
          }
        `}</style>
        {picture.styles}
        {planet.styles}
      </Fragment>
    )
  }
}

export default Begin
