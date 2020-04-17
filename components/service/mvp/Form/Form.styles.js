import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile, }}) => css`
  ${desktop.l} {
    & {
      padding-top: 263px
    }
  }

  ${desktop.m} {
    & {
      padding-top: 186px;
    }
  }

  ${desktop.s} {
    & {
      padding-top: 226px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(298)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(164)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
