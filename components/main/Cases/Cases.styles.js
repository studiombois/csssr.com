import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, above, mobile }}) => css`
  ${desktop.all} {
    && {
      margin-top: 128px;
    }

    .heading {
      text-align: left
    }
  }

  ${tablet.all} {
    && {
      margin-top: ${calcRem(56)};
    }
  }

  ${above.mobile} {
    .heading {
      grid-column: 2 / span 10;
    }
  }

  ${mobile.all} {
    && {
      margin-top: ${calcRem(104)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
