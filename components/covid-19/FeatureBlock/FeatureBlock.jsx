import * as React from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './FeatureBlock.styles'

class FeatureBlock extends React.PureComponent {
  state = {
    isVisible: false,
  }

  handleClick = () => {
    const { isVisible } = this.state

    this.setState({ isVisible: !isVisible })
  }
  render() {
    const { className, h, t, i, iSet } = this.props

    return (
      <div
        className={`${className}${this.state.isVisible ? ' visible' : ''}`}
        onClick={this.handleClick}
      >
        <div className="header">
          <div className="header-icon">
            <img
              className="plus"
              src={require('../../../static/covid-19/icons/plus.svg').default}
              alt="plus"
            />
            <img
              className="minus"
              src={require('../../../static/covid-19/icons/minus.svg').default}
              alt="minus"
            />
          </div>

          <h3 className="font-heading-3">{h}</h3>
        </div>

        <div className="text">
          <p className="font-p-1">{t}</p>

          <div className="text-image">
            <img src={i} srcSet={iSet} alt="feature image" />
          </div>
        </div>
      </div>
    )
  }
}

export default styled(FeatureBlock)`
  ${styles}
`
