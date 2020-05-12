import React, { Fragment, PureComponent } from 'react'
import { L10nConsumer } from '../../../utils/l10nProvider'
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
    const {
      className,
      l10n: { translations },
    } = this.props
    const { togglerIndex } = this.state

    return (
      <Fragment>
        <article className={className} id="advantages" css={dynamic(togglerIndex)}>
          <img
            className="waves"
            src={require('../../../static/images/mvp/Waves.svg').default}
            alt={translations.mvp.riskMinimization.imageAltWaves}
          />

          <div className="wrapper grid-container">
            <h2>{translations.mvp.riskMinimization.title}</h2>

            <div className="toggler">
              <Toggler
                activeIndex={togglerIndex}
                items={[
                  translations.mvp.riskMinimization.togglerOn,
                  translations.mvp.riskMinimization.togglerOff,
                ]}
                onChange={(index) => this.setState({ togglerIndex: index })}
              />
            </div>

            <div className="images">
              <div className="image-on">
                <PictureForAllResolutions
                  image={{
                    namespace: 'mvp',
                    key: 'MVP_ON',
                    alt: translations.mvp.riskMinimization.imageAltOn,
                  }}
                />
              </div>

              <div className="image-off">
                <PictureForAllResolutions
                  image={{
                    namespace: 'mvp',
                    key: 'MVP_OFF',
                    alt: translations.mvp.riskMinimization.imageAltOff,
                  }}
                />
              </div>
            </div>

            <p
              className="on-text"
              dangerouslySetInnerHTML={{ __html: translations.mvp.riskMinimization.textOn }}
            />

            <p
              className="off-text"
              dangerouslySetInnerHTML={{ __html: translations.mvp.riskMinimization.textOff }}
            />
          </div>
        </article>
      </Fragment>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(RiskMinimization)`
    ${styles}
  `),
)
