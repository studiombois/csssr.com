import { css } from '@emotion/core'
import Grid from '../../../ui-kit/core-design/Grid'
import clientsGroups from '../../../../data/dev/clientsGroups'

const base = css`
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 2rem;
  margin-left: -1rem;
  width: 22.5rem;

  ${Grid} {
    width: auto;
    padding-left: 1rem;
  }
`
const gridColumns = 4 * clientsGroups.length + (clientsGroups.length - 1)
const dynamic = css`
  ${Grid} {
    grid-template-columns: repeat(${gridColumns}, 3rem);
    grid-column: 1 / span ${gridColumns};

    // 4 колоки занимает каждый айтем, 3rem занимает каждая колонка
    // 1 колонка расстояния между ними занимает 0.5rem, кроме последнего
    // 9rem это сумма паддингов
    width: ${gridColumns * 3 + 0.5 * (gridColumns - 1) + 9}rem;
  }
`

const ie11Styles = css`
 ${Grid} {
    -ms-grid-columns: (3rem) [ ${gridColumns}];
    -ms-grid-column: 1;
    -ms-grid-column-span: ${gridColumns};
 }
`

export default ({ isIe11 }) => css`
  ${base}
  ${dynamic}
  ${isIe11 && ie11Styles}
`
