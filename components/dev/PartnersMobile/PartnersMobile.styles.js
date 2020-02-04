import { css } from '@emotion/core'

const base = css`
  & {
    padding-top: 3rem;
    padding-bottom: 0.9375rem;
  }

  h2 {
    margin-bottom: 2.0625rem;
    grid-column: 1 / span 6;
    text-align: center;
  }
`

export default css`
  ${base}
`
