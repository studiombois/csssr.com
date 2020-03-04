import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.l} {
    margin-top: 232px;
  }

  ${desktop.m} {
    margin-top: 148px;
  }

  ${desktop.s} {
    margin-top: 154px;
  }

  ${tablet.all} {
    margin-top: ${calcRem(210)};
  }

  ${mobile.all} {
    margin-top: ${calcRem(136)};
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}
