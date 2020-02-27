import React, { Fragment, PureComponent } from 'react'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Toggler from '../Toggler'
import PictureForAllResolutions from '../../PictureForAllResolutions'
import styled from '@emotion/styled'
import styles, { dynamic } from './RiskMinimization.styles'

class RiskMinimization extends PureComponent {
  state = {
    togglerIndex: 0,
  }
  render() {
    const { className, t } = this.props
    const { togglerIndex } = this.state

    return (
      <Fragment>
        <article className={className} id="advantages" css={dynamic(togglerIndex)}>
          <img
            className="waves"
            src={require('../../../static/images/mvp/Waves.svg').default}
            alt={t('mvp:riskMinimization.imageAltWaves')}
          />

          <div className="wrapper grid-container">
            <h2>{t('mvp:riskMinimization.title')}</h2>

            <div className="toggler">
              <Toggler
                activeIndex={togglerIndex}
                items={[t('mvp:riskMinimization.togglerOn'), t('mvp:riskMinimization.togglerOff')]}
                onChange={index => this.setState({ togglerIndex: index })}
              />
            </div>

            <div className="images">
              <div className="image-on">
                <PictureForAllResolutions
                  image={{
                    namespace: 'mvp',
                    key: 'MVP_ON',
                    alt: t('mvp:riskMinimization.imageAltOn'),
                  }}
                />
              </div>

              <div className="image-off">
                <PictureForAllResolutions
                  image={{
                    namespace: 'mvp',
                    key: 'MVP_OFF',
                    alt: t('mvp:riskMinimization.imageAltOff'),
                  }}
                />
              </div>
            </div>

            <p
              className="on-text"
              dangerouslySetInnerHTML={{ __html: t('mvp:riskMinimization.textOn') }}
            />

            <p
              className="off-text"
              dangerouslySetInnerHTML={{ __html: t('mvp:riskMinimization.textOff') }}
            />
          </div>
        </article>
      </Fragment>
    )
  }
}

export default translate()(
  MsBrowserConsumer(styled(RiskMinimization)`
    ${styles}
  `),
)
