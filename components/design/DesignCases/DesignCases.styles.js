import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(152)};
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(152)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(112)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(88)};
    }
  }
`
const StyledDesignCases = props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
export default StyledDesignCases
