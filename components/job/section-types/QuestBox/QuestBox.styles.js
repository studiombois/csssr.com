import { css } from '@emotion/core'

const base = css`
  &.font_h2-regular {
    margin-top: 6.0625rem;
  }

  &.font_p16-regular {
    margin-top: 0.5rem;
    margin-bottom: -0.4375rem;
  }

  @media (max-width: 767px) {
    &.font_h2-regular {
      margin-top: 3.4375rem;
    }

    &.font_p16-regular {
      margin-top: 0.5rem;
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }
`

export default css`
  ${base}
`
