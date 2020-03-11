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

  .title {
    display: block;
    color: ${colors.secondary.darken100};
  }

  ${desktop.all} {
    & {
      margin-right: 69px;
      width: 636px;
    }
  }

  ${tablet.all} {
    & {
      margin-right: ${calcRem(9)};
      width: ${calcRem(543)};
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
