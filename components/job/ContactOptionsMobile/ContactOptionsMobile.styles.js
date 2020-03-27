import { css } from '@emotion/core'

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

export default css`
  ${base}
`
