import React, { Fragment, PureComponent } from 'react'
import { string, arrayOf } from 'prop-types'
import translate from '../../utils/translate-wrapper'
import Toggler from './Toggler'
import PictureForAllResolutions from '../PictureForAllResolutions'

class RiskMinimization extends PureComponent {
  static propTypes = {
    title: string,
    textOn: string,
    textOff: string,
    imageAltOn: string,
    imageAltOff: string,
    toggleItems: arrayOf(string),
  }

  state = {
    togglerIndex: 0,
  }
  render() {
    const {
      title,
      textOn,
      textOff,
      toggleItems,
      imageAltOn,
      imageAltOff,
    } = this.props
    const { togglerIndex } = this.state

    return (
      <Fragment>
        <article id='advantages' className='grid-container'>
          <h2>{title}</h2>
          <div className='toggler'>
            <Toggler
              activeIndex={togglerIndex}
              items={toggleItems}
              onChange={index => this.setState({ togglerIndex: index })}
            />
          </div>
          <div className='images'>
            <div className='image-on'>
              <PictureForAllResolutions
                image={{ namespace: 'mvp', key: 'MVP_ON', alt: imageAltOn }}
              />
            </div>
            <div className='image-off'>
              <PictureForAllResolutions
                image={{ namespace: 'mvp', key: 'MVP_OFF', alt: imageAltOff }}
              />
            </div>
          </div>
          <p className='on-text' dangerouslySetInnerHTML={{ __html: textOn }} />
          <p className='off-text' dangerouslySetInnerHTML={{ __html: textOff }} />
        </article><style jsx>{`
          article {
            position: relative;
            grid-template-rows: auto auto 31.8rem auto;
            margin-top: -0.5rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
          }

          h2 {
            grid-column: 2 / span 11;
            grid-row: 1;
            margin-bottom: 3.2rem;
            font-size: 3rem;
            font-family: 'Roboto Slab', serif;
            font-weight: normal;
          }

          p {
            position: relative;
            z-index: 2;
            grid-column: 7 / span 5;
            grid-row: 4;
            margin-bottom: 3rem;
            font-family: 'Roboto Slab', serif;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 300;
            color: #4a4a4a;
            transition: opacity 0.3s ease-out;
          }

          .toggler {
            grid-column: 2 / span 11;
            grid-row: 2;
          }

          .images {
            position: relative;
            z-index: 1;
            grid-column: 1 / span 12;
            grid-row: 3;
          }

          .image-off,
          .image-on {
            position: absolute;
            top: -1.32rem;
            left: -5px;
            right: -5px;
            transition: opacity 0.3s ease-out;
          }

          .image-on {
            opacity: ${togglerIndex === 0 ? 1 : 0};
          }

          .image-off {
            opacity: ${togglerIndex === 1 ? 1 : 0};
          }

          .on-text {
            opacity: ${togglerIndex === 0 ? 1 : 0};
          }

          .off-text {
            opacity: ${togglerIndex === 1 ? 1 : 0};
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              margin-top: 7.4rem;
              grid-template-rows: auto auto 22.8rem auto;
              width: 1328px;
            }

            .image-off,
            .image-on {
              top: -4.1rem;
              left: 0;
              right: 0;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              margin-top: 10.85rem;
              grid-template-rows: auto auto 21.15rem auto;
              width: 1232px;
            }
            .image-off,
            .image-on {
              top: -4.1rem;
              left: 0;
              right: 0;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default translate()(RiskMinimization)
