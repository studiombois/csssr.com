import { css } from '@emotion/core'

const base = css`
  :global(ul) + & {
    margin-top: 2.5rem;
  }

  & {
    margin-top: 0.5rem;
  }

  @media (max-width: 767px) {
    & {
      margin-top: 0.4375rem;
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }
`

export default css`
  ${base}
`
