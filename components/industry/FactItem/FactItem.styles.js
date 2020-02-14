import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  .fact-number {
    font-weight: normal;
  }

  .fact-text {
    color: ${colors.secondary.darken100};
  }

  ${mobile.all} {
    .fact-text {
      margin-top: ${calcRem(-4)}
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({breakpoints, colors })}
  `
}
