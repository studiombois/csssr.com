import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    margin-left: auto;
    margin-right: ${calcRem(25)};
    display: flex;
    flex-shrink: 0;
    order: 3;
  }

  li:not(:first-of-type) {
    margin-left: ${calcRem(24)};
  }

  a {
    letter-spacing: 0;
    color: white;
    text-transform: capitalize;
  }

  a:hover {
    color: #5695ED;
  }

  .link {
    font-weight: 900;
    font-size:  ${calcRem(14)};
    line-height: ${calcRem(32)};
  }

  .link_active {
    color: #5695ED;
    pointer-events: none;
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(16)};
      margin-left: 0;
      margin-right: 0;
      margin-bottom: ${calcRem(32)};
      flex-direction: column;
    }

    li:not(:first-of-type) {
      margin-top: ${calcRem(16)};
      margin-left: ${calcRem(0)};
    }

    .link {
      font-size: ${calcRem(12)};
    }

    a {
      padding-left: ${calcRem(32)};
      padding-right: ${calcRem(32)};
      display: block;
      height: 100%;
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
