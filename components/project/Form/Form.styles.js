import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile, }}) => css`
  ${desktop.all} {
    & {
      padding-top: 256px
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(256)};
    }
  }

  ${mobile.all} {
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
