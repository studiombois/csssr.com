import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet }, colors }) => css`
  .fact-number {
    line-height: ${calcRem(84)};
    font-weight: normal;
  }

  ${tablet.all} {
    .fact-number {
      line-height: ${calcRem(48)};
    }
  }

  ${mobile.all} {
    .fact-number {
      line-height: ${calcRem(48)};
    }
  }

  .fact-text {
    color: ${colors.secondary.darken100};
  }

  ${mobile.all} {
    .fact-text {
      margin-top: ${calcRem(-4)};
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
