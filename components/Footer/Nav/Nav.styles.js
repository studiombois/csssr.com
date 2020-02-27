import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-left: auto;
    padding-top: ${calcRem(55)};
    height: 100%;
    display: flex;
  }

  .title {
    display: block;
  }

  ${desktop.all} {
    & {
      margin-right: 69px;
      width: 636px;
    }

    .nav-item:nth-of-type(1) {
      margin-right: 90px;
    }

    .nav-item:nth-of-type(2) {
      margin-right: auto;
    }

    .nav-item:nth-of-type(3) {
      margin-right: 76px;
    }
  }

  ${tablet.all} {
    & {
      margin-right: ${calcRem(9)};
      width: ${calcRem(543)};
    }

    .nav-item:nth-of-type(1) {
      margin-right: ${calcRem(66)};
    }

    .nav-item:nth-of-type(2) {
      margin-right: auto;
    }

    .nav-item:nth-of-type(3) {
      margin-right: ${calcRem(36)};
    }
  }

  ${mobile.all} {
    display: none;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
