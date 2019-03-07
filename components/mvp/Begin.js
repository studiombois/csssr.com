import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import translate from '../../utils/translate-wrapper'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 27.8%;
    width: 2235px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      left: 21.4%;
      width: 1920px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      left: 14.6%;
      width: 1360px;
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
`

class Begin extends PureComponent {
  static propTypes = {
    imageAlt: string,
    title: string,
    text: string,
    rocketText: string,
  }

  render() {
    const { title, text, rocketText, imageAlt } = this.props

    return (
      <Fragment>
        <article id='what-is-mvp' className='grid-container'>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'mvp', key: 'geometry', alt: imageAlt }}
          />
          <h1>{title}</h1>
          <p className='begin-text'>{text}</p>
          <div className='planet'>
            <PictureForAllResolutions
              className={planet.className}
              image={{ namespace: 'mvp', key: 'yellow_planet', alt: imageAlt }}
            />
          </div>
          <div className='rocket' />
          <p className='rocket-text font_p16-regular'>{rocketText}</p>
        </article><style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
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
            max-width: 900px;
            font-family: Roboto, sans-serif;
            font-size: 1.5rem;
            font-weight: normal;
            line-height: 2.5rem;
          }

          .rocket-text {
            margin-bottom: 9rem;
            grid-column: 8 / span 4;
            grid-row: 4;
          }

          .planet {
            grid-column: 1 / span 1;
            grid-row: 4;
          }

          .rocket {
            grid-column: 4 / span 6;
            grid-row: 3 / span 2;
            height: 664px;
            background-color: #f0f;
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
              height: 495px;
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
              height: 464px;
            }

            .rocket-text {
              padding-right: 0.5rem;
              margin-bottom: -2.3rem;
              grid-column: 8 / span 4;
            }
          }
        `}</style>
        {picture.styles}
        {planet.styles}
      </Fragment>
    )
  }
}

export default translate()(Begin)
