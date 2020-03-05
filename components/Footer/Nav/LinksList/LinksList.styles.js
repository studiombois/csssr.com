import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

export default () => css`
  & {
    margin-top: ${calcRem(16)};
  }

  li:not(:first-of-type) {
    margin-top: ${calcRem(8)};
  }
`
