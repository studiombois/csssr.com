import React, { Fragment, PureComponent } from 'react'
import translate from '../../utils/translate-wrapper'
import Toggler from './Toggler'
import PictureForAllResolutions from '../PictureForAllResolutions'

class RiskMinimization extends PureComponent {
  state = {
    togglerIndex: 0,
  }
  render() {
    const { t } = this.props
    const { togglerIndex } = this.state

    return (
      <Fragment>
        <article id='advantages'>
          <img
            className='waves'
            src={require('../../static/images/mvp/Waves.svg')}
            alt={t('mvp:riskMinimization.imageAltWaves')}
          />
          <div className='wrapper grid-container'>
            <h2>{t('mvp:riskMinimization.title')}</h2>
            <div className='toggler'>
              <Toggler
                activeIndex={togglerIndex}
                items={[
                  t('mvp:riskMinimization.togglerOn'),
                  t('mvp:riskMinimization.togglerOff'),
                ]}
                onChange={index => this.setState({ togglerIndex: index })}
              />
            </div>
            <div className='images'>
              <div className='image-on'>
                <PictureForAllResolutions
                  image={{ namespace: 'mvp', key: 'MVP_ON', alt: t('mvp:riskMinimization.imageAltOn') }}
                />
              </div>
              <div className='image-off'>
                <PictureForAllResolutions
                  image={{ namespace: 'mvp', key: 'MVP_OFF', alt: t('mvp:riskMinimization.imageAltOff') }}
                />
              </div>
            </div>
            <p className='on-text' dangerouslySetInnerHTML={{ __html: t('mvp:riskMinimization.textOn') }} />
            <p className='off-text' dangerouslySetInnerHTML={{ __html: t('mvp:riskMinimization.textOff') }} />
          </div>
        </article><style jsx>{`
          article {
            position: relative;
          }

          .waves {
            position: absolute;
            top: 11rem;
            left: 0;
            width: 100%;
            opacity: ${togglerIndex === 0 ? 1 : 0};
          }

          .wrapper {
            position: relative;
            grid-template-rows: auto auto 31.75rem auto;
            margin-top: -0.5rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
          }

          h2 {
            grid-column: 2 / span 11;
            grid-row: 1;
            margin-bottom: 3.1875rem;
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
            top: -1.3125rem;
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
            .waves {
              top: 19.1875rem;
              transform: translateY(-50%);
            }
            
            .wrapper {
              margin-top: 7.375rem;
              grid-template-rows: auto auto 22.8125rem auto;
              width: 1328px;
            }

            .image-off,
            .image-on {
              top: -4.125rem;
              left: 0;
              right: 0;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            .waves {
              top: 19.1875rem;
              transform: translateY(-50%);
            }
            .wrapper {
              margin-top: 10.875rem;
              grid-template-rows: auto auto 21.1875rem auto;
              width: 1232px;
            }
            .image-off,
            .image-on {
              top: -4.125rem;
              left: 0;
              right: 0;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            .waves {
              top: 14rem;
              transform: translateY(-50%);
            }
            .wrapper {
              margin-top: 11.875rem;
              grid-template-rows: auto auto 15.5625rem auto;
              width: 944px;
            }

            h2 {
              margin-bottom: 3.75rem;
              font-size: 1.5rem;
            }

            .image-off,
            .image-on {
              top: -4.25rem;
              left: -1.5rem;
              right: -1.8125rem;
            }

            p {
              font-size: 1.125rem;
              line-height: 2rem
            }
          }

          @media (max-width: 767px) {
            .waves {
              top: 8rem;
              transform: translateY(-50%);
            }

            .wrapper {
              grid-template-rows: auto 11.1rem auto auto;
              margin-top: 5.8125rem;
              width: 20.5rem;
            }

            h2 {
              margin-bottom: 1rem;
              padding-left: 1.6875rem;
              grid-column: 1 / span 6;
              font-size: 1.5rem;
            }

            .images {
              grid-column: 1 / span 6;
              grid-row: 2 / span 1;
            }

            .image-off,
            .image-on {
              top: 1.1875rem;
              left: 0;
              right: 0;
            }

            .toggler {
              margin-bottom: 2.625rem;
              grid-column: 2 / span 5;
              grid-row: 3 / span 1;
            }

            p {
              grid-column: 1 / span 6;
              font-size: 1.125rem;
              text-align: center;
              line-height: 2rem
            }
          }
        `}</style>

        <style jsx>{`
          :global(.ie11) h2 {
            -ms-grid-column: 3;
            -ms-grid-column-span: 21;
            -ms-grid-row: 1;
          }

          :global(.ie11) p {
            -ms-grid-column: 13;
            -ms-grid-column-span: 9;
            -ms-grid-row: 4;
          }

          :global(.ie11) .toggler {
            -ms-grid-column: 3;
            -ms-grid-column-span: 21;
            -ms-grid-row: 2;
          }

          :global(.ie11) .images {
            -ms-grid-column: 1;
            -ms-grid-column-span: 23;
            -ms-grid-row: 3;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            :global(.ie11) .wrapper {
              -ms-grid-rows: auto auto 22.8125rem auto;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            :global(.ie11) .wrapper {
              -ms-grid-rows: auto auto 21.1875rem auto;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            :global(.ie11) .wrapper {
              -ms-grid-rows: auto auto 15.5625rem auto;
            }
          }

          @media (max-width: 767px) {
            :global(.ie11) .wrapper {
              -ms-grid-rows: auto 11.1rem auto auto;
            }

            :global(.ie11) h2 {
              -ms-grid-column: 1;
              -ms-grid-column-span: 11;
            }

            :global(.ie11) .images {
              -ms-grid-column: 1;
              -ms-grid-column-span: 11;
              -ms-grid-row: 2;
              -ms-grid-row-span: 1;
            }

            :global(.ie11) .toggler {
              -ms-grid-column: 3;
              -ms-grid-column-span: 9;
              -ms-grid-row: 3;
              -ms-grid-row-span: 1;
            }

            :global(.ie11) p {
              -ms-grid-column: 1;
              -ms-grid-column-span: 11;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default translate()(RiskMinimization)
