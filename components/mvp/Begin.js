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
      left: 15%;
      width: 1360px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    picture {
      left: 20.5%;
      width: 50.43rem;
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
      width: 80px;
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
      width: 85px;
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
          <div className='rocket'>
            <div className='rocket-inner'>
              {/* <img className='rocket-body' src={require(`../../static/images/mvp/red_block.png`)} />
              <img className='rocket-dress' src={require(`../../static/images/mvp/yellow_block.png`)} />
              <img className='rocket-blue' src={require(`../../static/images/mvp/blue_line.png`)} />
              <img className='rocket-arrow' src={require(`../../static/images/mvp/yellow_arrow.png`)} />
              <img className='rocket-jet-1' src={require(`../../static/images/mvp/green_line_left.png`)} />
              <img className='rocket-jet-2' src={require(`../../static/images/mvp/green_line_middle.png`)} />
              <img className='rocket-jet-3' src={require(`../../static/images/mvp/green_line_right.png`)} />
              <img className='rocket-black' src={require(`../../static/images/mvp/black_line.png`)} /> */}
            </div>
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
            max-width: 900px;
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
            grid-column: 4 / span 6;
            grid-row: 3 / span 2;
            height: 41.5rem;
            text-align: center;
          }

          .rocket-inner {
            display: inline-block;
            position: relative;
            width: 55rem;
            height: 41.5rem;
            transform-origin: 0 0;
          }

          .rocket-body {
            position: absolute;
            top: 5.3%;
            left: 46.4%;
            width: 21.2rem;
          }

          .rocket-blue {
            position: absolute;
            top: 30%;
            left: 44.4%;
            width: 11rem;
          }

          .rocket-dress {
            position: absolute;
            top: 27.7%;
            left: 32.1%;
            width: 17.1rem;
          }

          .rocket-arrow {
            position: absolute;
            top: -1.2%;
            left: 66.4%;
            width: 14rem;
          }

          .rocket-jet-1 {
            position: absolute;
            top: 65.5%;
            left: 38.5%;
            width: 12.6rem;
          }

          .rocket-jet-2 {
            position: absolute;
            top: 50%;
            left: 27%;
            width: 10.5rem;
          }

          .rocket-jet-3 {
            position: absolute;
            top: 27%;
            left: 14.4%;
            width: 12.7rem;
          }

          .rocket-black {
            position: absolute;
            top: 15.5%;
            left: 59.3%;
            width: 9.1rem;
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

            .rocket-inner {
              transform: scale(0.745);
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

            .rocket-inner {
              transform: scale(0.69);
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

            .rocket-inner {
              transform: scale(0.53);
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
              height: 160px;
            }

            .rocket {
              height: 10rem;
            }

            .rocket-inner {
              margin-top: 0.35rem;
              transform: scale(0.243);
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

export default translate()(Begin)
