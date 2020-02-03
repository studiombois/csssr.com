import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Competences.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Grid from '../../ui-kit/core-design/Grid'
import LogosSheet from '../LogosSheet'
import withI18next from '../../../utils/withI18next'
import CutButton from '../CutButton'

class Competences extends PureComponent {
  state = {
    isCut: true,
  }

  handleUncutArticle = () => {
    this.setState({
      isCut: false,
    })
  }

  render() {
    const { className, t, lng } = this.props
    const { isCut } = this.state

    return (
      <Fragment>
        <Grid
          as="article"
          id="competences"
          className={cn(className, {
            is_cut: isCut,
            lng_en: lng === 'en',
            lng_ru: lng === 'ru',
          })}
        >
          <h2
            className="font_h2-slab"
            dangerouslySetInnerHTML={{ __html: t('dev:competence.title1') }}
          />

          <div className="logos-and-text-container">
            <p
              className="font_p24-strong"
              dangerouslySetInnerHTML={{ __html: t('dev:competence.text1') }}
            />

            <figure className="react">
              <img src={require('../../../static/icons/dev/react.svg').default} alt="React logo" />
              <figcaption>React</figcaption>
            </figure>

            <figure className="angular">
              <img
                src={require('../../../static/icons/dev/angular.svg').default}
                alt="Angular logo"
              />
              <figcaption>Angular</figcaption>
            </figure>

            <figure className="vue">
              <img src={require('../../../static/icons/dev/vue.svg').default} alt="Vue logo" />
              <figcaption>Vue</figcaption>
            </figure>

            <figure className="node">
              <img
                src={require('../../../static/icons/dev/nodeJS.svg').default}
                alt="NodeJS logo"
              />
              <figcaption>Node.js</figcaption>
            </figure>

            <div className="logos-sheet">
              <LogosSheet />
            </div>
          </div>

          <h2
            className="font_h2-regular"
            dangerouslySetInnerHTML={{ __html: t('dev:competence.title2') }}
          />
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: t('dev:competence.text2') }}
          />

          <h2
            className="font_h2-slab"
            dangerouslySetInnerHTML={{ __html: t('dev:competence.title3') }}
          />
          <p
            className="font_p24-strong"
            dangerouslySetInnerHTML={{ __html: t('dev:competence.text3') }}
          />
        </Grid>

        {isCut && (
          <CutButton isCut={isCut} onClick={this.handleUncutArticle}>
            {t('dev:competence.buttonText')}
          </CutButton>
        )}
      </Fragment>
    )
  }
}

export default withI18next(['dev'])(
  MsBrowserConsumer(styled(Competences)`
    ${styles}
  `),
)
