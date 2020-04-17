import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet }}) => css`
  ${tablet.all} {
    & {
      padding-top: ${calcRem(160)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
