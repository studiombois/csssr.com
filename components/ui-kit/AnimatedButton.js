import React, { PureComponent } from 'react'
import { node, oneOf, bool, func } from 'prop-types'
import cn from 'classnames'

export default class AnimatedButton extends PureComponent {
  static propTypes = {
    disabled: bool,
    type: oneOf(['button', 'submit']),
    children: node,
    onClick: func,
    onAinimationEnd: func,
  }

  static defaultProps = {
    type: 'button',
  }

  componentWillReceiveProps({ status }) {
    if (status === 'submitting') {
      this.handleLoaderProgerss()
    } if (status === 'success') {
      this.toggleSuccess()
    } else if (status === 'fail') {
      this.toggleError()
    }
  }

  buttonRef = React.createRef()

  toggleSuccess() {
    this.buttonRef.current.classList.add('success')
    this.draw('.checkmark path')
    setTimeout(() => {
      this.buttonRef.current.classList.remove('loading')
      this.buttonRef.current.classList.remove('success')
      this.resetDashes()
      this.props.onAnimationEnd()
    }, 2000)
  }

  toggleError() {
    this.buttonRef.current.classList.add('error')
    this.draw('.cross path')
    setTimeout(() => {
      this.buttonRef.current.classList.remove('loading')
      this.buttonRef.current.classList.remove('error')
      this.resetDashes()
      this.props.onAnimationEnd()
    }, 2000)
  }

  draw(selector) {
    const paths = document.querySelectorAll(selector)
    paths.forEach(path => {
      path.style.strokeDashoffset = '0'
    })
  }

  resetDashes() {
    const paths = this.buttonRef.current.querySelectorAll('path')
    paths.forEach(path => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = length + ' ' + length
      path.style.strokeDashoffset = length
    })
  }

  handleLoaderProgerss = () => {
    this.buttonRef.current.classList.add('loading')
    this.draw('.progress-circle path')
  }

  render() {
    const {
      disabled,
      type,
      children,
    } = this.props

    const classNames = cn('button', 'font_button-label', {
      button_state_disabled: disabled,
    })

    return (
      <div ref={this.buttonRef} className='progress-button elastic'>
        <button
          type={type}
          className={classNames}
          disabled={disabled}
        >
          <span>{children}</span>
        </button>
        <svg className='progress-circle' width='70' height='70' viewBox='0 0 70 70'>
          <path d='m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z' strokeDasharray='204.245 204.245' strokeDashoffset='204.245'/>
        </svg>
        <svg className='checkmark' width='70' height='70' viewBox='0 0 70 70'>
          <path d='m31.5,46.5l15.3,-23.2' strokeDasharray='27.80 27.80' strokeDashoffset='27.80'/>
          <path d='m31.5,46.5l-8.5,-7.1' strokeDasharray='11.7 11.7' strokeDashoffset='11.7'/>
        </svg>
        <svg className='cross' width='70' height='70' viewBox='0 0 70 70'>
          <path d='m35,35l-9.3,-9.3'/>
          <path d='m35,35l9.3,9.3'/>
          <path d='m35,35l-9.3,9.3'/>
          <path d='m35,35l9.3,-9.3'/>
        </svg><style jsx>{`
          button {
            cursor: pointer;
          }

          /* Button container */
          .progress-button {
            position: relative;
            display: inline-block;
            text-align: center;
            width: 100%;
          }

          /* Button style */
          .progress-button button {
            display: block;
            margin: 0 auto;
            padding: 0;
            width: 100%;
            height: 3rem;
            border: none;
            border: 2px solid transparent;
            background-color: #0076ff;
            border-radius: 0;
            color: #fff;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            transition: background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s, border-color 0.3s, border-radius 0.3s;
          }

          .progress-button .button_state_disabled {
            opacity: 0.3;
          }

          .progress-button button:hover {
            background-color: #0254d8;
          }

          .progress-button .button_state_disabled {
            // opacity: 0.3;
            pointer-events: none;
          }

          /* Text (transition for when returning to initial state) */
          .progress-button button span {
            transition: opacity 0.3s 0.1s;
          }

          /* Common style of SVGs */
          .progress-button svg {
            position: absolute;
            top: 0;
            left: 50%;
            width: 3rem;
            height: 3rem;
            transform: translateX(-50%);
            pointer-events: none;
          }

          .progress-button svg path {
            opacity: 0;
            fill: none;
          }

          .progress-button svg.progress-circle path {
            stroke: #0076ff;
            stroke-width: 5;
          }

          .error.progress-button svg.progress-circle path {
            stroke: #FB797E;
            stroke-width: 5;
          }

          .progress-button svg.checkmark path,
          .progress-button svg.cross path {
            stroke: #fff;
            stroke-linecap: round;
            stroke-width: 4;
            transition: opacity 0.1s;
          }

          /* Loading, success and error effects */
          .loading.progress-button button {
            width: 3rem; /* make a circle */
            border-width: 3px;
            border-color: #ddd;
            border-radius: 1.5rem;
            background-color: transparent;
            color: #fff;
          }

          .loading.progress-button button.button_state_disabled {
            opacity: 1;
          }

          .loading.progress-button span {
            transition: opacity 0.15s;
          }

          .loading.progress-button span,
          .success.progress-button span,
          .error.progress-button span {
            opacity: 0; /* keep it hidden in all states */
          }

          .success.progress-button button,
          .error.progress-button button {
            transition: background-color 0.3s, width 0.3s, border-width 0.3s;
          }

          .success.progress-button button {
            border-color: #0076ff;
            background-color: #0076ff;
          }

          .error.progress-button button {
            border-color: #FB797E;
            background-color: #FB797E;
          }

          .loading.progress-button svg.progress-circle path {
            opacity: 1;
            transition: stroke-dashoffset 2s;
          }

          .success.progress-button svg.checkmark path,
          .error.progress-button svg.cross path {
            opacity: 1;
            transition: stroke-dashoffset 0.5s;
          }

          /* Optional elastic effect for the width of the button */
          .elastic.progress-button button {
            transition: background-color 0.3s, color 0.3s, width 0.3s cubic-bezier(0.25, 0.25, 0.4, 1.6), border-width 0.3s, border-color 0.3s;
          }

          .loading.elastic.progress-button button {
            transition: background-color 0.3s, color 0.3s, width 0.3s cubic-bezier(0.6, -0.6, 0.75, 0.75), border-width 0.3s, border-color 0.3s;
          }
        `}</style>
      </div>
    )
  }
}
