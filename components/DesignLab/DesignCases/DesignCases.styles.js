import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(152)};
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(139)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(72)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(102)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
