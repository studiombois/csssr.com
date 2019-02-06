import React, { PureComponent, Fragment } from 'react'
import { findDOMNode } from 'react-dom'
import { node, string, func } from 'prop-types'

export default class ClickOutside extends PureComponent {
  static propTypes = {
    children: node,
    rootElement: node,
    className: string,
    onOutsideClick: func,
  }

  static defaultProps = {
    rootElement: <div />,
    className: '',
  }

  componentDidMount() {
    window.document.addEventListener('click', this.handleClick)
    window.document.addEventListener('keydown', this.handleKeypress)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.handleClick)
    window.document.removeEventListener('keydown', this.handleKeypress)
  }

  handleClick = event => {
    const target = event.target
    const domNode = findDOMNode(this)

    if (target !== domNode && !domNode.contains(target)) {
      this.props.onOutsideClick(event)
    }
  }

  handleKeypress = event => {
    const TABKEY = 9
    const ESCKEY = 27

    if (event.keyCode === TABKEY || event.keyCode === ESCKEY) {
      this.props.onOutsideClick(event)
    }
  }

  render() {
    const args = { className: this.props.className, style: this.props.style }

    return React.cloneElement(<Fragment />, args, this.props.children)
  }
}
