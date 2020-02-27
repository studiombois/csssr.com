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
  & {
    -ms-grid-column: ${getGridValueForMs(10)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 10;
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
