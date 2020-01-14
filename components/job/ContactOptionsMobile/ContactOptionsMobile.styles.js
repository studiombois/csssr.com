import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = css`
  & {
    margin-top: 2.625rem;
    grid-column: 1 / span 6;
    white-space: nowrap;
    border: none;
  }

  legend {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
`

const ie11Styles = css`
  :global(.ie11) .cell {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }
`

export default css`
  ${base}
  ${ie11Styles}
`
