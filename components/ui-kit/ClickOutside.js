import React, { PureComponent } from 'react'
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
    window.document.addEventListener('keydown', this.handlerKeypress)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.handleClick)
    window.document.removeEventListener('keydown', this.handlerKeypress)
  }

  handleClick = event => {
    const target = event.target
    const domNode = findDOMNode(this)
    console.log(target !== domNode, !domNode.contains(target))
    if (target !== domNode && !domNode.contains(target)) {
      this.props.onOutsideClick(event)
    }
  }

  handlerKeypress = event => {
    const TABKEY = 9
    const ESCKEY = 27

    if (event.keyCode === TABKEY || event.keyCode === ESCKEY) {
      this.props.onOutsideClick(event)
    }
  }

  render() {
    const args = [
      this.props.rootElement,
      { className: this.props.className, style: this.props.style },
    ].concat(this.props.children)

    return React.cloneElement.apply(null, args)
  }
}
