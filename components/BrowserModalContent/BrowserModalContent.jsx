import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

import Heading from '../ui-kit/core-design/Heading'
import Text from '../ui-kit/core-design/Text'

import styles from './BrowserModalContent.styles'
import { L10nConsumer } from '../../utils/l10nProvider'

// Текст для модала невалидного браузера
// захардкожен тут, т.к. старые браузеры(некоторые) не могут i18n нормально
const CONTENT = {
  ru: {
    title: 'Ваш браузер устарел!',
    text1:
      'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    text2: 'Пожалуйста, установите современный браузер:',
    text3:
      'Закрывая это уведомление, вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
  },
  en: {
    title: 'Outdated Browser Detected!',
    text1:
      'You are using an outdated browser that does not support modern web standards and poses a threat to your security.',
    text2: 'Please install the latest version of your browser:',
    text3:
      'By closing this notice you agree that the website may not be displayed correctly in your browser.',
  },
}

// контент для модала детекта устаревших браузеров
class BrowserModalContent extends PureComponent {
  static propTypes = {
    className: string,
  }

  render() {
    const {
      className,
      l10n: { language },
    } = this.props
    const { title, text1, text2, text3 } = CONTENT[language] || {}

    return (
      <Fragment>
        <section className={className}>
          <Heading.H1
            type="regular"
            size="m"
            className="title"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <Text
            className="text1"
            type="regular"
            size="m"
            dangerouslySetInnerHTML={{ __html: text1 }}
          />

          <Text
            className="text2"
            type="regular"
            size="m"
            dangerouslySetInnerHTML={{ __html: text2 }}
          />

          <div className="browsers-box">
            <a
              className="browser"
              href="https://www.google.com/chrome/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/static/images/modals/browserModal/chrome@3x.png" alt="chrome" />
            </a>

            <a
              className="browser"
              href="https://www.mozilla.org/firefox/new/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/static/images/modals/browserModal/firefox@3x.png" alt="firefox" />
            </a>

            <a
              className="browser"
              href="https://www.apple.com/safari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/static/images/modals/browserModal/safari@3x.png" alt="safari" />
            </a>

            <a
              className="browser"
              href="https://www.microsoft.com/windows/microsoft-edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/static/images/modals/browserModal/edge@3x.png" alt="edge" />
            </a>

            <a
              className="browser"
              href="https://www.opera.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/static/images/modals/browserModal/opera@3x.png" alt="opera" />
            </a>
          </div>

          <Text type="regular" size="m" dangerouslySetInnerHTML={{ __html: text3 }} />
        </section>
      </Fragment>
    )
  }
}

export default styled(L10nConsumer(BrowserModalContent))`
  ${styles}
`
