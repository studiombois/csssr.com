import React, { Fragment } from 'react'
import FoldArrow from '../../static/icons/foldArrow.svg'
import { string, bool, func } from 'prop-types'

const CutButton = ({ children, isCut, onClick }) =>
  <Fragment>
    <div className='grid-container'>
      <div className='border-bottom'/>
      <button onClick={onClick}>
        {children}
        <FoldArrow
          style={{
            marginLeft: '0.375rem',
            transform: isCut ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </button>
    </div>
    <style jsx>{`
      button {
        grid-column: 6 / span 2;
        padding: 1rem 1.5rem;
        display: flex;
        border: none;
        align-items: center;
        justify-content: center;
        font-family: Roboto;
        font-size: 0.625rem;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1rem;
        letter-spacing: 0.08125rem;
        text-transform: uppercase;
        color: #345eff;
        background: none;
        cursor: pointer;
      }

      button:hover {
        color: #0254d8;
      }

      .grid-container {
        margin-left: auto;
        margin-right: auto;
        width: 1792px;
      }

      .border-bottom {
        margin-right: -2rem;
        margin-left: -2rem;
        grid-column: 2 / span 10;
        height: 1px;
        background-color: #979797;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        .grid-container {
          width: 1328px;
        }

        .border-bottom {
          margin-right: -1rem;
          margin-left: -1rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        .grid-container {
          width: 1232px;
        }

        .border-bottom {
          margin-right: -1rem;
          margin-left: -1rem;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        .grid-container {
          width: 944px;
        }

        .border-bottom {
          grid-column: 2 / span 10;
          margin-right: -1rem;
          margin-left: -1rem;
        }

        @media (max-width: 1023px) {
          .grid-container {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        button {
          grid-column: 2 / span 4;
        }

        .grid-container {
          padding-left: 1rem;
          padding-right: 1rem;
          width: 22.5rem;
        }

        .border-bottom {
          margin-right: 0rem;
          margin-left: 0rem;
          grid-column: 1 / span 6;
        }
      }
    `}</style>
  </Fragment>

CutButton.propTypes = {
  children: string,
  isCut: bool,
  onClick: func,
}

export default CutButton
