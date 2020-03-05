import * as React from 'react'
import styled from '@emotion/styled'
import styles from './QuestionBlock.styles'
import { string, node, bool } from 'prop-types'
import QuestionAnswer from '../QuestionAnswer'
import Heading from '../../ui-kit/core-design/Heading'
import Grid from '../../ui-kit/core-design/Grid'

import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

class OriginQuestionBlock extends React.PureComponent {
  state = {
    isContentVisible: false,
  }
  arrowAnimation = null
  iconRef = React.createRef()

  componentDidMount() {
    const lottieWeb = import(
      /* webpackChunkName: "lottie" */ 'lottie-web/build/player/lottie_light.min'
    )
    const arrow = import(
      /* webpackChunkName: "lottie" */ '../../../static/icons/jobs-faq/arrow.json'
    )

    Promise.all([lottieWeb, arrow]).then(([lottie, arrowJson]) => {
      this.arrowAnimation = lottie.loadAnimation({
        container: this.iconRef.current,
        animationData: arrowJson,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      })
    })
  }

  toggleAnswer = e => {
    const { isContentVisible } = this.state

    if (e.type === 'click' || e.keyCode === 13) {
      this.setState({ isContentVisible: !isContentVisible }, () => {
        isContentVisible
          ? this.arrowAnimation.playSegments([40, 50], true)
          : this.arrowAnimation.playSegments([4, 12], true)
      })
    }
  }

  render() {
    const { className, question, answer } = this.props

    return (
      <Grid className={className}>
        <Heading.H2
          className="heading"
          type="regular"
          size="s"
          onKeyDown={this.toggleAnswer}
          onClick={this.toggleAnswer}
          tabIndex="1"
        >
          <div className="icon-wrapper">
            <div className="icon" ref={this.iconRef} />
          </div>

          {question}
        </Heading.H2>

        <QuestionAnswer
          isIe11={this.props.isIe11}
          answer={answer}
          isContentVisible={this.state.isContentVisible}
        />
        <hr className="question_line" />
      </Grid>
    )
  }
}

OriginQuestionBlock.propTypes = {
  className: string,
  question: node,
  answer: node,
  isIe11: bool,
}

const QuestionBlock = MsBrowserConsumer(styled(OriginQuestionBlock)`
  ${styles.base}
  ${styles.ie11}
`)

export { QuestionBlock }
export default QuestionBlock
