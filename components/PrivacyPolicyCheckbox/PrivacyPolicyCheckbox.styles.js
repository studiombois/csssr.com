import { css } from '@emotion/core'

const base = css`
  a[target='_blank']::after {
    display: none;
  }

  @media (max-width: 1279px) {
    .font_link-list_16 {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    .font_link-list_16 {
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }
`

export default css`
  ${base}
`
