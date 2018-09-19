import React, { Fragment } from 'react'
import { string, func } from 'prop-types'

const Button = ({ children, style, onClick }) => {
  return <Fragment>
    <button
      className={'button font_button-label_custom_color'}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>

    <style jsx>{`
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 6rem;
        border: none;
        color: #ffffff;
        background-color: #0076ff;
      }

      button:hover,
      button:active {
        background-color: #0254d8;
      }
    `}</style>
  </Fragment>
}

Button.propTypes = {
  children: string,
  className: string,
  onClick: func,
}


export default Button
