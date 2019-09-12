import React, { Fragment, PureComponent } from 'react'

class Toggler extends PureComponent {
  render() {
    const { activeIndex, items, onChange } = this.props

    return (
      <Fragment>
        <div className='toggler'>
          {items.map((item, index) =>
            <button key={index} type='button' onClick={() => onChange(index)}>{item}</button>)
          }
        </div><style jsx>{`
          div {
            position: relative;
            display: inline-flex;
            height: 3rem;
            background-color: #cecece;
          }

          div::after {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            display: block;
            width: 6.5rem;
            height: 100%;
            content: '';
            background: #0076ff;
            transition: transform 0.3s ease-out;
            transform: translateX(${100 * activeIndex}%);
          }

          button {
            position: relative;
            z-index: 2;
            padding: 0;
            display: block;
            width: 6.5rem;
            font-size: 0.875rem;
            font-family: 'Roboto', 'Arial', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            color: #fff;
            border: none;
            cursor: pointer;
            letter-spacing: 0.0625rem;
            background: none;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Toggler
