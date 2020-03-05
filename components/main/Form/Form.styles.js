import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`

  & {
    padding-top: ${calcRem(256)};
    padding-bottom: ${calcRem(160)};
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(160)};
    }

    .button {
      grid-column: 1 / span 6;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
