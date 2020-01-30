import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    margin-left: auto;
    display: flex;
    order: 3;
  }

  li:not(:first-of-type) {
    margin-left: ${calcRem(16)};
  }

  a {
    letter-spacing: 0;
    color: white;
    text-transform: capitalize;
  }

  a:hover {
    color: #5695ED;
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(16)};
      margin-left: 0;
      padding-left: ${calcRem(32)};
      padding-right: ${calcRem(32)};
      flex-direction: column;
    }

    li:not(:first-of-type) {
      margin-top: ${calcRem(16)};
      margin-left: ${calcRem(0)};
    }

    a {
      letter-spacing: ${calcRem(1)};
    }
  }
 `

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
