import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile, }}) => css`
  & {
    background-color: #ffffff;
  }

  ${desktop.l} {
    .form {
      padding-top: ${calcRem(256)};;
    }
  }

  ${tablet.all} {
    .form {
      padding-top: ${calcRem(160)};
    }
  }

  ${mobile.all} {
    .form {
      padding-top: ${calcRem(160)};
    }

    .form .button {
      grid-column: 1 / span 6;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
