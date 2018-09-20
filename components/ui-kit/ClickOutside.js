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
    const domNode = findDOMNode(this)

    this.clickHandler = event => {
      const target = event.target

      if (target !== domNode && !domNode.contains(target)) {
        this.props.onOutsideClick(event)
      }
    }

    this.keypressHandler = event => {
      const TABKEY = 9
      const ESCKEY = 27

      if (event.keyCode === TABKEY || event.keyCode === ESCKEY) {
        this.props.onOutsideClick(event)
      }
    }

    window.document.addEventListener('click', this.clickHandler)
    window.document.addEventListener('keydown', this.keypressHandler)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.clickHandler)
    window.document.removeEventListener('keydown', this.keypressHandler)
  }

  render() {
    const args = [
      this.props.rootElement,
      { className: this.props.className, style: this.props.style },
    ].concat(this.props.children)

    return React.cloneElement.apply(null, args)
  }
}
