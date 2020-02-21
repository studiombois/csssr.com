import { css } from '@emotion/core'
import Grid from '../../../ui-kit/core-design/Grid'

const base = css`
  grid-column: 1 / span 12;
  max-height: auto;
  overflow: hidden;

  &.is_cut {
    height: 87.0625rem;
  }

  ${Grid} {
    padding-bottom: 1.5625rem;
  }

  &.is_cut ${Grid} {
    padding-bottom: 1.5rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    &.is_cut {
      height: 75.5625rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    &.is_cut {
      height: 72.5625rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    &.is_cut {
      height: 104.5625rem;
    }
  }
`

const ie11Styles = css`
  & {
    -ms-grid-column: 1;
    -ms-grid-column-span: 23;
    -ms-grid-row: 4;
  }
`
export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
