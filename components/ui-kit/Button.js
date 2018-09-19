import React, { PureComponent } from 'react'
import { node, string, oneOf, bool, func } from 'prop-types'
import cn from 'classnames'

export default class Button extends PureComponent {
  static propTypes = {
    disabled: bool,
    type: oneOf(['button', 'submit']),
    theme: oneOf(['primary', 'secondary']),
    href: string,
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
      theme,
      href,
      children,
      onClick,
    } = this.props

    const classNames = cn('button', {
      button_state_disabled: disabled,
      button_theme_primary: theme === 'primary',
      button_theme_secondary: theme === 'secondary',
    })

    if (href) {
      return (
        <a
          href={href}
          className={classNames}
        >
          {children}
          <style jsx>{`
            .button {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 6rem;
              font-family: Roboto;
              font-size: 2rem;
              font-weight: 900;
              line-height: 3rem;
              letter-spacing: 0.2rem;
              text-transform: uppercase;
              text-decoration: none;
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
  
            .button_theme_primary:hover {
              background-color: #0254d8;
            }
          
            .button_theme_secondary {
              color: #4a4a4a;
              border: solid 1px #000000;
              transition: color 0.3s ease-out;
            }
  
            .button_theme_secondary:hover {
              color: #000;
            }
          `}</style>
        </a>
      )
    }

    return (
      <button
        type={type}
        className={classNames}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        <style jsx>{`
          .button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 6rem;
            font-family: Roboto;
            font-size: 2rem;
            font-weight: 900;
            line-height: 3rem;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
            text-decoration: none;
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

          .button_theme_primary:hover {
            background-color: #0254d8;
          }
        
          .button_theme_secondary {
            color: #4a4a4a;
            border: solid 1px #000000;
            transition: color 0.3s ease-out;
          }

          .button_theme_secondary:hover {
            color: #000;
          }
        `}</style>
      </button>
    )
  }
}
