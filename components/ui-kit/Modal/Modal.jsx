import React, { Fragment, PureComponent } from 'react'
import { func } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'

import styles from './Modal.styles'

import CrossIcon from '../../../static/icons/close.svg'

const crossIcon = <CrossIcon width="100%" height="100%" />

// Оверлей, крестик, область для контента + отключение скрола в body

class Modal extends PureComponent {
  static propTypes = {
    onClose: func,
  }

  static defaultProps = {}

  componentDidMount() {
    if (document) {
      this.bodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '17px'
    }
  }

  componentWillUnmount() {
    if (document) {
      document.body.style.overflow = this.bodyOverflow || 'initial'
      document.body.style.paddingRight = 0
    }
  }

  handleClose = () => {
    const { onClose } = this.props
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  render() {
    const {
      children,
      onClose,
      wrapperClassName,
      contentClassName,
      withFixWidth = false,
      className,
    } = this.props
    const isNeedCross = typeof onClose === 'function'
    return (
      <Fragment>
        <aside className={className}>
          <div className="overlay" onClick={this.handleClose} />
          <div className={cn(wrapperClassName, 'wrapper', { 'fix-width': withFixWidth })}>
            {isNeedCross && (
              <button
                type="button"
                className="close"
                aria-label="Close modal"
                onClick={this.handleClose}
              >
                {crossIcon}
              </button>
            )}
            <div className={cn(contentClassName, 'content')}>{children}</div>
          </div>
        </aside>
      </Fragment>
    )
  }
}

export default styled(Modal)`
  ${styles}
`
