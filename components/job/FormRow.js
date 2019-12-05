import React from 'react'
import { getMsColumn } from '../../utils/style/getGridValueForMs'

const FormRow = ({ children, rightSideContent }) =>
  <div className='grid-container'>
    <div className='cell'>
      {children}
    </div>
    {rightSideContent}

    <style jsx>{`
      .grid-container {
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
      }

      .cell {
        grid-column: 2 / span 6;
        height: 100%;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        .grid-container {
          width: 1328px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        .grid-container {
          width: 1232px;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        .grid-container {
          width: 944px;
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        .grid-container {
          width: 59rem;
        }
      }

      @media (max-width: 767px) {
        .grid-container {
          width: 20.5rem;
        }

        .cell {
          grid-column: 1 / span 6;
        }
      }
    `}</style>

    <style jsx>{`
      :global(.ie11) .cell {
        -ms-grid-column: ${getMsColumn(2)};
        -ms-grid-column-span: ${getMsColumn(6)};
      }
    `}</style>
  </div>

export default FormRow
