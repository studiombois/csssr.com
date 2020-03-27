import { css } from '@emotion/core'

const base = css`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  .hot-vacancy {
    position: relative;
  }

  .hot-vacancy::before {
    content: '🔥';
    position: absolute;
    top: -0.125rem;
    left: -1.25rem;
    font-size: 0.75rem;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    a {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    .hot-vacancy::before {
      left: -1.5rem;
      font-size: 1.25rem;
    }
  }
`

const ie11Styles =  css`
 .hot-vacancy::before {
    color: orange;
    overflow: hidden;
    line-height: 12px;
    top: 0.3rem;
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
