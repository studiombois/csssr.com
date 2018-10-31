import React from 'react'
import cn from 'classnames'


const FormRow = ({ children, rightSideContent, rightSideWidth = 'narrow' }) =>
  <div className='grid-container row'>
    <div
      className='cell cell_primary'>{children}</div>
    <div
      className={cn({
        cell: true,
        cell_narrow: rightSideWidth === 'narrow',
        cell_wide: rightSideWidth === 'wide',
      })}
    >
      {rightSideContent}
    </div><style jsx>{`
      .row {
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
      }

      .cell {
        height: 100%;
      }

      .cell_primary {
        grid-column: 2 / span 6;
      }

      .cell_narrow {
        grid-column: 10 / span 2;
      }

      .cell_wide {
        grid-column: 9 / span 4;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        .row {
          width: 1328px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        .row {
          width: 1232px;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        .row {
          width: 944px;
        }

        @media (max-width: 1023px) {
          .row {
            width: 59rem;
          }
        }
      }
    `}</style>
  </div>

export default FormRow
