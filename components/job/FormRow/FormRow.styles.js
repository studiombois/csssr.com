import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = css`
  .cell {
    grid-column: 2 / span 6;
    height: 100%;
  }

  @media (max-width: 767px) {
    .cell {
      grid-column: 1 / span 6;
    }
  }
`

const ie11Styles = css`
  .cell {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
