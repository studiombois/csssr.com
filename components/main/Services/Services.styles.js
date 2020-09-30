import { css } from '@emotion/core'
// import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.l} {
  }

  ${desktop.m} {
  }

  ${desktop.s} {
  }

  ${tablet.all} {
  }

  ${mobile.all} {
  }

  @media (pointer: fine) {
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
