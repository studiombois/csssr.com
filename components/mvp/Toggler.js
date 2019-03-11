import React, { Fragment, PureComponent } from 'react'
import translate from '../../utils/translate-wrapper'

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
            width: 104px;
            height: 100%;
            content: '';
            background: #0076ff;
            transition: transform 0.3s ease-out;
            transform: translateX(${104 * activeIndex}px);
          }

          button {
            position: relative;
            z-index: 2;
            padding: 0;
            display: block;
            width: 104px;
            font-size: 0.875rem;
            font-family: Roboto, sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            color: #fff;
            border: none;
            letter-spacing: 0.08rem;
            background: none;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default translate()(Toggler)
