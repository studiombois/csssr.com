import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.l} {
    & h2.title {
      margin-top: 290px;
    }
  }

  ${desktop.m} {
    & h2.title {
      margin-top: 257px;
    }
  }

  ${desktop.s} {
    & h2.title {
      margin-top: 228px;
    }
  }

  ${tablet.all} {
    & h2.title {
      margin-top: ${calcRem(230)};
    }
  }

  ${mobile.all} {
    & h2.title {
      margin-top: ${calcRem(176)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
