import { css } from '@emotion/core'

const base = css`
  & {
    margin-top: 2.0625rem;
    padding: 0;
  }

  & + ul {
    margin-top: 0.5rem;
  }

  & + ul li:not(:first-of-type) {
    margin-top: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & + ul.have-square-bullets li:before {
      top: 0.25rem;
    }
  }

  @media (max-width: 767px) {
    & {
      margin-top: 20.4375rem;
      font-size: 1rem;
    }

    & + ul {
      margin-top: 0.5625rem;
    }

    & + ul li {
      margin-top: 0;
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    & + ul li:not(:first-of-type) {
      margin-top: 0.5rem;
    }
  }
`

export default css`
  ${base}
`
