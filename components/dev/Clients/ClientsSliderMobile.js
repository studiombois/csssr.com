import React from 'react'
import ClientsLogosListMobile from './ClientsLogosListMobile'
import clientsGroups from '../../../data/dev/clientsGroups'

// 4 колоки занимает каждый айтем
// 1 колонка расстояния между ними, кроме последнего
const gridColumns = 4 * clientsGroups.length + (clientsGroups.length - 1)
const ClientsSliderMobile = () => (
  <div className="scroller-wrapper">
    <ul className="grid-container">
      <ClientsLogosListMobile />
    </ul>
    <style jsx>{`
      ul.grid-container {
        width: auto;
        padding-left: 1rem;
      }

      .scroller-wrapper {
        overflow-x: auto;
        overflow-y: hidden;
        margin-top: 2rem;
        margin-left: -1rem;
        width: 22.5rem;
      }
    `}</style>
    <style jsx>{`
      ul.grid-container {
        grid-template-columns: repeat(${gridColumns}, 3rem);
        grid-column: 1 / span ${gridColumns};

        // 3rem занимает каждая колонка
        // 0.5rem занимает расстояние между ними
        // 9rem это сумма паддингов
        width: ${gridColumns * 3 + 0.5 * (gridColumns - 1) + 9}rem;
      }
    `}</style>
    <style jsx>{`
      ul.grid-container {
        -ms-grid-columns: (3rem) [ ${gridColumns}];
        -ms-grid-column: 1;
        -ms-grid-column-span: ${gridColumns};
      }
    `}</style>
  </div>
)

export default ClientsSliderMobile
