import React from 'react'
import cn from 'classnames'


const FormRow = ({ children, rightSideContent, rightSideWidth = 'narrow', fullWidth }) =>
  <div className='grid-container row'>
    <div
      className={cn({
        cell: true,
        cell_primary: !fullWidth,
        cell_fullWidth: fullWidth,
      })}
    >{children}</div>
    {!fullWidth && <div
      className={cn({
        cell: true,
        cell_narrow: rightSideWidth === 'narrow',
        cell_wide: rightSideWidth === 'wide',
      })}
    >
      {rightSideContent}
    </div>}<style jsx>{`
      div.row {
        position: relative;
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
        border: none;
      }

      div.cell {
        height: 100%;
      }

      div.cell_primary {
        grid-column: 2 / span 6;
      }

      .cell_fullWidth {
        grid-column: 1 / span 12;
      }

      div.cell_narrow {
        grid-column: 10 / span 2;
      }

      div.cell_wide {
        grid-column: 9 / span 4;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        div.row {
          width: 1328px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        div.row {
          width: 1232px;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        div.row {
          padding-top: 6.1875rem;
          padding-bottom: 31.5rem;
          background-position: 50% calc(100% - 8.45rem);
          width: 944px;
        }

        @media (max-width: 1023px) {
          div.row {
            width: 59rem;
          }
        }
      }
    `}</style>
  </div>

export default FormRow
