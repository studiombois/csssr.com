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

  handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
      e.preventDefault()
      this.handleClick()
    }
  }

  render() {
    const { className, header, text, image, imagesSet, id } = this.props
    const { isVisible } = this.state

    const ariaControlsId = `expandable-${id}`

    return (
      <div
        className={`${className}${isVisible ? ' visible' : ''}`}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        aria-expanded={isVisible}
        aria-controls={ariaControlsId}
        tabIndex="0"
      >
        <div className="header">
          <div className="header-icon">
            <img
              className="plus"
              src={require('../../../static/covid-19/icons/plus.svg').default}
              alt="expand button image"
            />
            <img
              className="minus"
              src={require('../../../static/covid-19/icons/minus.svg').default}
              alt="collapse button image"
            />
          </div>

          <h3 className="font-heading-3" dangerouslySetInnerHTML={{ __html: header }} />
        </div>

        <div className="text" role="region" aria-hidden={!isVisible} id={ariaControlsId}>
          <p className="font-p-1" dangerouslySetInnerHTML={{ __html: text }} />

          <div className="text-image">
            <img src={image} srcSet={imagesSet} alt="feature image" />
          </div>
        </div>
      </div>
    )
  }
}

export default styled(FeatureBlock)`
  ${styles}
`
