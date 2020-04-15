import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    margin-left: auto;
    padding-top: ${calcRem(55)};
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .nav-item:nth-of-type(4) {
    width: 100px;
  }

  .title {
    display: block;
    color: ${colors.secondary.darken100};
  }

  ${desktop.all} {
    & {
      width: 738px;
    }
  }

  ${tablet.all} {
    & {
      margin-right: ${calcRem(9)};
      width: ${calcRem(672)};
    }
  }

  ${mobile.all} {
    display: none;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}
