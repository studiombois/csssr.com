import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = css`
  & {
    grid-column: 10 / span 3;
    grid-row: 1 / span 10;
    white-space: nowrap;
    border: none;
  }

  legend {
    white-space: nowrap;
    margin-bottom: 1rem;
  }
`

const ie11Styles = css`
  :global(.ie11) & {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 10;
  }
`

export default css`
  ${base}
  ${ie11Styles}
`
