import React, { PureComponent, Fragment } from 'react'
import { node, oneOf, bool, func, string } from 'prop-types'
import cn from 'classnames'

export default class Button extends PureComponent {
  static propTypes = {
    disabled: bool,
    type: oneOf(['button', 'submit']),
    theme: oneOf(['primary', 'secondary']),
    className: string,
    name: string,
    ariaLabel: string,
    children: node,
    onClick: func,
  }

  static defaultProps = {
    type: 'button',
    theme: 'primary',
  }

  render() {
    const {
      disabled,
      type,
      name,
      ariaLabel,
      theme,
      className,
      children,
      onClick,
    } = this.props

    const classNames = cn('button', {
      'font_button-label': true,
      [className]: className,
      button_state_disabled: disabled,
      button_theme_primary: theme === 'primary',
      button_theme_secondary: theme === 'secondary',
    })

    return (
      <Fragment>
        <button
          type={type}
          className={classNames}
          onClick={onClick}
          disabled={disabled}
          name={name}
          aria-label={ariaLabel}
        >
          {children}
        </button><style jsx>{`
          .button {
            height: 3rem;
            background: none;
            border: none;
            cursor: pointer;
            user-select: none;
          }

          .button_state_disabled {
            pointer-events: none;
            opacity: 0.3;
          }

          .button_theme_primary {
            color: #ffffff;
            background-color: #0076ff;
            transition: background-color 0.3s ease-out;
          }

          .button_theme_primary:hover,
          .button_theme_primary:active {
            background-color: #0254d8;
          }

          .button_theme_secondary {
            color: #4a4a4a;
            border: solid 0.0625rem #000000;
            transition: color 0.3s ease-out;
          }

          .button_theme_secondary:hover,
          .button_theme_secondary:active {
            color: #000;
          }
        `}</style>
      </Fragment>
    )
  }
}
